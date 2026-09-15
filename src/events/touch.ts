import { Controller } from "../state";

export const configureTouchControls = (controller: Controller) => {
    const touchUI = document.createElement('div');
    touchUI.id = 'touch-ui';

    // Joystick zone
    const joystickZone = document.createElement('div');
    joystickZone.id = 'joystick-zone';
    const joystickKnob = document.createElement('div');
    joystickKnob.id = 'joystick-knob';
    joystickZone.appendChild(joystickKnob);

    // Attack buttons - grid 4x2 for all 8 attacks
    const attackButtons = document.createElement('div');
    attackButtons.id = 'attack-buttons';

    const attackConfigs = [
        { key: 'y', label: '🔥', color: 'rgba(255, 100, 0, 0.6)', name: 'Fireball' },
        { key: 'u', label: '❄️', color: 'rgba(100, 200, 255, 0.6)', name: 'IceShard' },
        { key: 'i', label: '💚', color: 'rgba(100, 255, 100, 0.6)', name: 'Heal' },
        { key: 'o', label: '⚡', color: 'rgba(255, 255, 0, 0.6)', name: 'Lightning' },
        { key: 'p', label: '☠️', color: 'rgba(0, 200, 0, 0.6)', name: 'Poison' },
        { key: 'j', label: '🌪️', color: 'rgba(100, 100, 255, 0.6)', name: 'Thunder' },
        { key: 'k', label: '🌑', color: 'rgba(80, 0, 120, 0.6)', name: 'Dark' },
        { key: 'l', label: '✨', color: 'rgba(255, 100, 255, 0.6)', name: 'Shadow' },
    ];

    const activeTouches: { [id: number]: string } = {};

    attackConfigs.forEach(cfg => {
        const btn = document.createElement('button');
        btn.className = 'attack-btn';
        btn.textContent = cfg.label;
        btn.style.background = cfg.color;
        btn.dataset.key = cfg.key;
        
        btn.addEventListener('touchstart', e => {
            e.preventDefault();
            const touch = e.changedTouches[0];
            if (touch) activeTouches[touch.identifier] = cfg.key;
            controller.press(cfg.key);
            btn.style.transform = 'scale(0.9)';
            btn.style.filter = 'brightness(1.5)';
        });
        
        btn.addEventListener('touchend', e => {
            e.preventDefault();
            const touch = e.changedTouches[0];
            if (touch) delete activeTouches[touch.identifier];
            controller.release(cfg.key);
            btn.style.transform = 'scale(1)';
            btn.style.filter = 'brightness(1)';
        });
        
        // Multi-touch support: also cancel when touch is cancelled
        btn.addEventListener('touchcancel', e => {
            e.preventDefault();
            const touch = e.changedTouches[0];
            if (touch) delete activeTouches[touch.identifier];
            controller.release(cfg.key);
            btn.style.transform = 'scale(1)';
            btn.style.filter = 'brightness(1)';
        });
        
        attackButtons.appendChild(btn);
    });

    touchUI.appendChild(joystickZone);
    touchUI.appendChild(attackButtons);
    document.body.appendChild(touchUI);

    let joystickActive = false;
    let joystickCenterX = 0;
    let joystickCenterY = 0;
    let joystickTouchId: number | null = null;

    joystickZone.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (joystickTouchId !== null) return;
        
        const touch = e.changedTouches[0];
        joystickTouchId = touch.identifier;
        joystickActive = true;
        
        const rect = joystickZone.getBoundingClientRect();
        joystickCenterX = rect.left + rect.width / 2;
        joystickCenterY = rect.top + rect.height / 2;
        updateJoystick(touch.clientX, touch.clientY);
    });

    joystickZone.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!joystickActive || joystickTouchId === null) return;
        
        // Find our specific touch
        for (let i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === joystickTouchId) {
                updateJoystick(e.touches[i].clientX, e.touches[i].clientY);
                break;
            }
        }
    });

    joystickZone.addEventListener('touchend', (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === joystickTouchId) {
                joystickActive = false;
                joystickTouchId = null;
                joystickKnob.style.transform = 'translate(-50%, -50%)';
                releaseAllDirections();
                break;
            }
        }
    });

    joystickZone.addEventListener('touchcancel', (e) => {
        for (let i = 0; i < e.changedTouches.length; i++) {
            if (e.changedTouches[i].identifier === joystickTouchId) {
                joystickActive = false;
                joystickTouchId = null;
                joystickKnob.style.transform = 'translate(-50%, -50%)';
                releaseAllDirections();
                break;
            }
        }
    });

    const updateJoystick = (clientX: number, clientY: number) => {
        const dx = clientX - joystickCenterX;
        const dy = clientY - joystickCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = Math.min(joystickZone.getBoundingClientRect().width / 3, 50);

        const clampedDistance = Math.min(distance, maxDistance);
        const angle = Math.atan2(dy, dx);

        const knobX = Math.cos(angle) * clampedDistance;
        const knobY = Math.sin(angle) * clampedDistance;
        joystickKnob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;

        releaseAllDirections();

        const threshold = maxDistance * 0.35;
        if (distance > threshold) {
            if (Math.abs(dx) > Math.abs(dy)) {
                controller.press(dx > 0 ? 'd' : 'a');
            } else {
                controller.press(dy > 0 ? 's' : 'w');
            }
        }
    };

    const releaseAllDirections = () => {
        controller.release('w');
        controller.release('a');
        controller.release('s');
        controller.release('d');
    };

    return { joystickZone, attackButtons };
};
