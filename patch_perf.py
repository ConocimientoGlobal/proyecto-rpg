#!/usr/bin/env python3
import sys

html = open('index.html', 'r').read()
original_len = len(html)

# 1. Eliminar strokeRect por tile (muy costoso en movil)
html = html.replace(
    "    ctx.strokeStyle='rgba(0,0,0,0.1)';\n    ctx.strokeRect(px,py,size,size);\n  }",
    "  }"
)

# 2. Agregar biomas swamp(7) y lava(8)
html = html.replace(
    "      if(r<0.12)b=2;\n      else if(r<0.22)b=3;\n      else if(r<0.4)b=6;\n      else if(r<0.6)b=0;\n      else if(r<0.75)b=1;\n      else if(r<0.85)b=4;\n      else b=5;",
    "      if(r<0.08)b=2;\n      else if(r<0.16)b=3;\n      else if(r<0.28)b=6;\n      else if(r<0.44)b=0;\n      else if(r<0.58)b=1;\n      else if(r<0.70)b=4;\n      else if(r<0.80)b=5;\n      else if(r<0.90)b=7;\n      else b=8;"
)

# 3. Agregar swamp y lava a paleta
html = html.replace(
    "    tree:['#1b5e20','#2e7d32','#388e3c','#4caf50','#4e342e']\n  };",
    "    tree:['#1b5e20','#2e7d32','#388e3c','#4caf50','#4e342e'],\n    swamp:['#33691e','#1b5e20','#4a6741','#2e4a2e','#558b2f'],\n    lava:['#ff6f00','#e65100','#ff8f00','#bf360c','#f44336']\n  };"
)

# 4. Agregar dibujo de swamp y lava antes del cierre de drawTile
# Buscar el ultimo else if de drawTile (tree)
old_tree_end = """      ctx.fillStyle='#388e3c';
      ctx.beginPath();
      ctx.arc(px+18,py+8,5,0,Math.PI*2);
      ctx.fill();
    }
  }
  
  // =============================================
  // DIBUJAR PERSONAJE ESTILO RPG-JS
  // ============================================="""

new_tree_end = """      ctx.fillStyle='#388e3c';
      ctx.beginPath();
      ctx.arc(px+18,py+8,5,0,Math.PI*2);
      ctx.fill();
    }
    else if(biome===7){ // Swamp
      for(let i=0;i<6;i++){
        const rx=px+((seed+i*7)%size);
        const ry=py+((seed+i*13)%size);
        ctx.fillStyle=colors[1+(i%3)];
        ctx.fillRect(rx,ry,3,3);
      }
      ctx.fillStyle='#1b5e20';
      ctx.beginPath();
      ctx.arc(px+size/2,py+size/2,size/3,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle='#558b2f';
      ctx.fillRect(px+4,py+20,2,6);
      ctx.fillRect(px+20,py+18,2,5);
    }
    else if(biome===8){ // Lava
      for(let i=0;i<8;i++){
        const rx=px+((seed+i*7)%size);
        const ry=py+((seed+i*13)%size);
        ctx.fillStyle=colors[1+(i%3)];
        ctx.fillRect(rx,ry,3,3);
      }
      ctx.fillStyle='#ff6f00';
      ctx.beginPath();
      ctx.arc(px+size/2,py+size/2,size/4,0,Math.PI*2);
      ctx.fill();
      ctx.fillStyle='#bf360c';
      ctx.fillRect(px+10,py+8,2,12);
      ctx.fillRect(px+16,py+14,2,10);
    }
  }
  
  // =============================================
  // DIBUJAR PERSONAJE ESTILO RPG-JS
  // ============================================="""

html = html.replace(old_tree_end, new_tree_end)

# 5. Agregar animales snake y frog
html = html.replace(
    "const AT=['deer','boar','rabbit','fox','wolf','bird','cow','sheep','pig','dog','cat','chicken','fish'];",
    "const AT=['deer','boar','rabbit','fox','wolf','bird','cow','sheep','pig','dog','cat','chicken','fish','snake','frog'];"
)

# 6. Agregar colores para snake y frog
html = html.replace(
    "fish:[100,180,255]};",
    "fish:[100,180,255],snake:[50,140,50],frog:[80,180,80]};"
)

# 7. Agregar enemigos, boss, eventos despues de NPCs
old_npc_end = """  E.push({t:'n',n:'Aldeana',x:24*T,y:22*T,d:['Los animales son nuestros amigos'],dir:0,f:0,ft:0});
  
  // Jugador"""

new_npc_end = """  E.push({t:'n',n:'Aldeana',x:24*T,y:22*T,d:['Los animales son nuestros amigos','Tengo una mision para ti: derrota a los goblins','Busca al Dragon de Lava al norte'],dir:0,f:0,ft:0,q:' Mata 3 goblins'});
  
  // Enemigos
  for(let i=0;i<3;i++){
    E.push({t:'e',a:'goblin',x:8*T+i*4*T,y:8*T+i*3*T,vx:0,vy:0,f:0,ft:0,hp:3,sp:60+Math.random()*30,dir:0,dmg:5});
  }
  for(let i=0;i<2;i++){
    E.push({t:'e',a:'skeleton',x:25*T+i*5*T,y:25*T+i*2*T,vx:0,vy:0,f:0,ft:0,hp:5,sp:50+Math.random()*20,dir:0,dmg:8});
  }
  // Boss
  E.push({t:'e',a:'dragon',x:30*T,y:30*T,vx:0,vy:0,f:0,ft:0,hp:20,sp:100,dir:0,dmg:15,boss:true});
  
  // Eventos
  E.push({t:'c',n:'Cofre',x:18*T,y:12*T,opened:false,dir:0,f:0,ft:0});
  E.push({t:'f',n:'Fogata',x:14*T,y:10*T,dir:0,f:0,ft:0});
  
  // Jugador"""

html = html.replace(old_npc_end, new_npc_end)

# 8. Agregar drawEnemy antes de drawAnimal
old_drawanimal_start = """  // =============================================
  // DIBUJAR ANIMAL
  // =============================================
  
  function drawAnimal(cx,cy,z,animal,frame){"""

new_drawanimal_start = """  // =============================================
  // DIBUJAR ENEMIGO
  // =============================================
  
  function drawEnemy(cx,cy,z,type,frame,boss){
    const bob=frame%2===0?0:-2;
    const s=z*32;
    
    ctx.fillStyle='rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(cx,cy+16*z,10*z,4*z,0,0,Math.PI*2);
    ctx.fill();
    
    if(type==='goblin'){
      ctx.fillStyle='#4caf50';
      ctx.fillRect(cx-8*z,cy-4*z+bob,16*z,14*z);
      ctx.fillStyle='#66bb6a';
      ctx.fillRect(cx-7*z,cy-14*z+bob,14*z,12*z);
      ctx.fillStyle='#f44336';
      ctx.fillRect(cx-4*z,cy-10*z+bob,2*z,2*z);
      ctx.fillRect(cx+2*z,cy-10*z+bob,2*z,2*z);
      ctx.fillStyle='#4caf50';
      ctx.fillRect(cx-10*z,cy-14*z+bob,3*z,4*z);
      ctx.fillRect(cx+7*z,cy-14*z+bob,3*z,4*z);
      ctx.fillStyle='#9e9e9e';
      ctx.fillRect(cx+10*z,cy-6*z,4*z,10*z);
    } else if(type==='skeleton'){
      ctx.fillStyle='#e0e0e0';
      ctx.fillRect(cx-7*z,cy-4*z+bob,14*z,14*z);
      ctx.fillStyle='#f5f5f5';
      ctx.fillRect(cx-6*z,cy-14*z+bob,12*z,12*z);
      ctx.fillStyle='#000';
      ctx.fillRect(cx-4*z,cy-10*z+bob,2*z,2*z);
      ctx.fillRect(cx+2*z,cy-10*z+bob,2*z,2*z);
      ctx.fillStyle='#e0e0e0';
      ctx.fillRect(cx-10*z,cy-2*z,4*z,8*z);
      ctx.fillRect(cx+6*z,cy-2*z,4*z,8*z);
      ctx.fillStyle='#bdbdbd';
      ctx.fillRect(cx+10*z,cy-8*z,3*z,12*z);
    } else if(type==='dragon'){
      const ds=z*(boss?40:24);
      ctx.fillStyle='#d32f2f';
      ctx.fillRect(cx-ds/2,cy-4*z+bob,ds,16*z);
      ctx.fillStyle='#b71c1c';
      ctx.fillRect(cx-ds/3,cy-18*z+bob,ds*0.66,16*z);
      ctx.fillStyle='#ffeb3b';
      ctx.fillRect(cx-ds/6,cy-12*z+bob,3*z,3*z);
      ctx.fillRect(cx+ds/8,cy-12*z+bob,3*z,3*z);
      if(frame%4<2){
        ctx.fillStyle='#ff6f00';
        ctx.fillRect(cx+ds/3,cy-14*z+bob,8*z,4*z);
      }
      ctx.fillStyle='#8b0000';
      ctx.fillRect(cx-ds,cy-10*z+bob,ds/2,8*z);
      ctx.fillRect(cx+ds/2,cy-10*z+bob,ds/2,8*z);
      ctx.fillRect(cx-ds,cy+2*z+bob,ds/2,4*z);
    }
  }
  
  // =============================================
  // DIBUJAR ANIMAL
  // =============================================
  
  function drawAnimal(cx,cy,z,animal,frame){"""

html = html.replace(old_drawanimal_start, new_drawanimal_start)

# 9. Actualizar render para manejar entidades tipo 'e', 'c', 'f'
old_render_entities = """      if(e.t==='a'){
        drawAnimal(esx,esy,z,e.a,e.f);
      } else {
        drawNPC(esx,esy,z,e.dir,e.f);
        ctx.fillStyle='#fc0';ctx.font='8px monospace';ctx.textAlign='center';ctx.fillText(e.n,esx,esy-20*z);
      }"""

new_render_entities = """      if(e.t==='a'){
        drawAnimal(esx,esy,z,e.a,e.f);
      } else if(e.t==='e'){
        drawEnemy(esx,esy,z,e.a,e.f,e.boss);
        ctx.fillStyle='#f44';ctx.font='8px monospace';ctx.textAlign='center';
        ctx.fillText(e.boss?'BOSS '+e.a:e.a,esx,esy-20*z);
        // Barra de vida
        ctx.fillStyle='#333';ctx.fillRect(esx-15*z,esy-26*z,30*z,3*z);
        ctx.fillStyle='#f44';ctx.fillRect(esx-15*z,esy-26*z,30*z*(e.hp/(e.boss?20:e.a==='skeleton'?5:3)),3*z);
      } else if(e.t==='c'){
        // Cofre
        ctx.fillStyle=e.opened?'#8d6e63':'#ff8f00';
        ctx.fillRect(esx-8*z,esy-4*z,16*z,12*z);
        ctx.fillStyle='#fdd835';
        ctx.fillRect(esx-2*z,esy-2*z,4*z,3*z);
        ctx.fillStyle='#fc0';ctx.font='8px monospace';ctx.textAlign='center';ctx.fillText(e.n,esx,esy-8*z);
      } else if(e.t==='f'){
        // Fogata
        ctx.fillStyle='#5d4037';
        ctx.fillRect(esx-6*z,esy+2*z,12*z,4*z);
        ctx.fillStyle='#ff6f00';
        ctx.fillRect(esx-3*z,esy-4*z+bob,6*z,8*z);
        if(e.f%4<2){
          ctx.fillStyle='#ffeb3b';
          ctx.fillRect(esx-2*z,esy-8*z,4*z,6*z);
        }
        ctx.fillStyle='#fc0';ctx.font='8px monospace';ctx.textAlign='center';ctx.fillText(e.n,esx,esy-10*z);
      } else {
        drawNPC(esx,esy,z,e.dir,e.f);
        ctx.fillStyle='#fc0';ctx.font='8px monospace';ctx.textAlign='center';ctx.fillText(e.n,esx,esy-20*z);
      }"""

html = html.replace(old_render_entities, new_render_entities)

# 10. Actualizar update() para manejar enemigos (IA simple, ataque, colision)
old_update = """    for(const e of E){
      if(e.t!=='a')continue;
      const dx=P.x-e.x,dy=P.y-e.y,d=Math.hypot(dx,dy);
      if(d<80&&d>0){e.vx=-dx/d*120;e.vy=-dy/d*120}
      else if(d>200){e.vx=(Math.random()-0.5)*40;e.vy=(Math.random()-0.5)*40}
      else{e.vx*=0.95;e.vy*=0.95}
      e.x+=e.vx*dt;e.y+=e.vy*dt;
      e.x=Math.max(T,Math.min(WW*T-T,e.x));
      e.y=Math.max(T,Math.min(WH*T-T,e.y));
      e.ft+=dt;if(e.ft>0.2){e.ft=0;e.f=(e.f+1)%4}
      if(Math.abs(e.vx)>Math.abs(e.vy))e.dir=e.vx>0?2:1;
      else if(e.vy!==0)e.dir=e.vy>0?0:3;
    }"""

new_update = """    for(const e of E){
      if(e.t==='a'){
        const dx=P.x-e.x,dy=P.y-e.y,d=Math.hypot(dx,dy);
        if(d<80&&d>0){e.vx=-dx/d*120;e.vy=-dy/d*120}
        else if(d>200){e.vx=(Math.random()-0.5)*40;e.vy=(Math.random()-0.5)*40}
        else{e.vx*=0.95;e.vy*=0.95}
        e.x+=e.vx*dt;e.y+=e.vy*dt;
        e.x=Math.max(T,Math.min(WW*T-T,e.x));
        e.y=Math.max(T,Math.min(WH*T-T,e.y));
        e.ft+=dt;if(e.ft>0.2){e.ft=0;e.f=(e.f+1)%4}
        if(Math.abs(e.vx)>Math.abs(e.vy))e.dir=e.vx>0?2:1;
        else if(e.vy!==0)e.dir=e.vy>0?0:3;
      } else if(e.t==='e'){
        // IA enemiga: perseguir al jugador
        const dx=P.x-e.x,dy=P.y-e.y,d=Math.hypot(dx,dy);
        if(d<120&&d>0){e.vx=dx/d*e.sp;e.vy=dy/d*e.sp}
        else if(d>200){e.vx=(Math.random()-0.5)*30;e.vy=(Math.random()-0.5)*30}
        else{e.vx*=0.9;e.vy*=0.9}
        e.x+=e.vx*dt;e.y+=e.vy*dt;
        e.x=Math.max(T,Math.min(WW*T-T,e.x));
        e.y=Math.max(T,Math.min(WH*T-T,e.y));
        e.ft+=dt;if(e.ft>0.2){e.ft=0;e.f=(e.f+1)%4}
        if(Math.abs(e.vx)>Math.abs(e.vy))e.dir=e.vx>0?2:1;
        else if(e.vy!==0)e.dir=e.vy>0?0:3;
        // Dano al jugador
        if(d<30&&P.atk<=0){
          P.hp-=e.dmg*dt;
          if(P.hp<=0){P.hp=0;dlg('GAME OVER - Recargue la pagina')}
        }
      }
    }"""

html = html.replace(old_update, new_update)

# 11. Actualizar ataque para incluir enemigos
old_atk = """  function atk(){if(P.atk>0)return;P.atk=0.4;P.st='attack';for(let i=E.length-1;i>=0;i--){const e=E[i];if(e.t!=='a')continue;if(Math.hypot(e.x-P.x,e.y-P.y)<40){e.hp--;if(e.hp<=0){P.xp+=10;E.splice(i,1);dlg('+10 XP')}}}}"""

new_atk = """  function atk(){if(P.atk>0)return;P.atk=0.4;P.st='attack';
    for(let i=E.length-1;i>=0;i--){
      const e=E[i];
      if(e.t==='a'&&Math.hypot(e.x-P.x,e.y-P.y)<40){e.hp--;if(e.hp<=0){P.xp+=10;E.splice(i,1);dlg('+10 XP')}}
      else if(e.t==='e'&&Math.hypot(e.x-P.x,e.y-P.y)<50){e.hp--;if(e.hp<=0){P.xp+=e.boss?100:25;E.splice(i,1);dlg(e.boss?'+100 XP - JEFE DERROTADO!':'+25 XP')}}
      else if(e.t==='c'&&Math.hypot(e.x-P.x,e.y-P.y)<40&&!e.opened){e.opened=true;P.g+=50;P.inv.potion++;dlg('Cofre! +50 monedas +1 pocion')}
    }
  }"""

html = html.replace(old_atk, new_atk)

# 12. Actualizar interactuar para misiones
old_int = """  function int_(){for(const e of E)if(e.t==='n'&&Math.hypot(e.x-P.x,e.y-P.y)<50){dlg(e.n+': '+e.d[Math.floor(Math.random()*e.d.length)]);return}}"""

new_int = """  function int_(){
    for(const e of E){
      if(e.t==='n'&&Math.hypot(e.x-P.x,e.y-P.y)<50){
        const msg=e.d[Math.floor(Math.random()*e.d.length)];
        dlg(e.n+': '+msg);
        if(e.q&&msg.includes('mision'))dlg('MISION: '+e.q);
        return;
      }
      if(e.t==='f'&&Math.hypot(e.x-P.x,e.y-P.y)<50){
        P.hp=Math.min(P.mhp,P.hp+20);P.mp=Math.min(P.mmp,P.mp+10);
        dlg('Fogata: HP y MP restaurados');
        return;
      }
    }
  }"""

html = html.replace(old_int, new_int)

# 13. Actualizar minimapa para incluir swamp y lava
old_mm = """      mctx.fillStyle=t===0?'#4caf50':t===1?'#8d6e63':t===2?'#0288d1':t===3?'#f9a825':t===4?'#757575':t===5?'#fff':'#1b5e20';"""
new_mm = """      mctx.fillStyle=t===0?'#4caf50':t===1?'#8d6e63':t===2?'#0288d1':t===3?'#f9a825':t===4?'#757575':t===5?'#fff':t===7?'#33691e':'#ff6f00';"""
html = html.replace(old_mm, new_mm)

# 14. Actualizar drawTile para incluir swamp y lava en el array de biomes
old_biome_arr = "const colors=PALETTE[['grass','dirt','water','sand','stone','snow','tree'][biome]];"
new_biome_arr = "const colors=PALETTE[['grass','dirt','water','sand','stone','snow','tree','swamp','lava'][biome]];"
html = html.replace(old_biome_arr, new_biome_arr)

open('index.html', 'w').write(html)
print(f"Parches aplicados: {original_len} -> {len(html)} caracteres (+{len(html)-original_len})")
print("Cambios: +2 biomas (swamp, lava), +2 animales (snake, frog), +3 enemigos, +1 boss, +2 eventos, +misiones, +fogata, -strokeRect")
