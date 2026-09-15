import { Controller } from "../state";

export const configureTouchControls = (controller: Controller) => {
    const touchUI = document.createElement('div');
    touchUI.id = 'touch-ui';

    const joystickZone = document.createElement('div');
    joystickZone.id = 'joystick-zone';
    const joystickKnob = document.createElement('div');
    joystickKnob.id = 'joystick-knob';
    joystickZone.appendChild(joystickKnob);

    const attackButtons = document.createElement('div');
    attackButtons.id = 'attack-buttons';

    const attackKeys = ['y', 'u', 'i', 'o'];
    attackKeys.forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'attack-btn';
        btn.textContent = key.toUpperCase();
        btn.addEventListener('touchstart', e => {
            e.preventDefault();
            controller.press(key);
        });
        btn.addEventListener('touchend', e => {
            e.preventDefault();
            controller.release(key);
        });
        attackButtons.appendChild(btn);
    });

    touchUI.appendChild(joystickZone);
    touchUI.appendChild(attackButtons);
    document.body.appendChild(touchUI);

    let joystickActive = false;
    let joystickCenterX = 0;
    let joystickCenterY = 0;

    joystickZone.addEventListener('touchstart', (e) => {
        e.preventDefault();
        joystickActive = true;
        const touch = e.touches[0];
        const rect = joystickZone.getBoundingClientRect();
        joystickCenterX = rect.left + rect.width / 2;
        joystickCenterY = rect.top + rect.height / 2;
        updateJoystick(touch.clientX, touch.clientY);
    });

    joystickZone.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!joystickActive) return;
        const touch = e.touches[0];
        updateJoystick(touch.clientX, touch.clientY);
    });

    joystickZone.addEventListener('touchend', () => {
        joystickActive = false;
        joystickKnob.style.transform = 'translate(-50%, -50%)';
        releaseAllDirections();
    });

    const updateJoystick = (clientX: number, clientY: number) => {
        const dx = clientX - joystickCenterX;
        const dy = clientY - joystickCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 50;

        const clampedDistance = Math.min(distance, maxDistance);
        const angle = Math.atan2(dy, dx);

        const knobX = Math.cos(angle) * clampedDistance;
        const knobY = Math.sin(angle) * clampedDistance;
        joystickKnob.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;

        releaseAllDirections();

        const threshold = 15;
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
};
