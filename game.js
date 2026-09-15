'use strict';

const T=32,WW=32,WH=32;
const cv=document.getElementById('c'),ctx=cv.getContext('2d');

function resize(){
  cv.width=innerWidth;
  cv.height=innerHeight;
  ctx.imageSmoothingEnabled=false;
}
addEventListener('resize',resize);

function h(x,y){return((x*374761393+y*668265263)^0x5bf03635)&0x7fffffff}

// Mundo
const W=[],V=[];
for(let y=0;y<WH;y++){W[y]=[];V[y]=[];for(let x=0;x<WW;x++){const v=h(x,y),r=(v%1000)/1000;let b=0;if(r<0.15)b=2;else if(r<0.25)b=3;else if(r<0.4)b=6;else if(r<0.6)b=0;else if(r<0.75)b=1;else if(r<0.85)b=4;else b=5;W[y][x]=b;V[y][x]=v%4}}

// Entidades
const E=[];
const AT=['deer','boar','rabbit','fox','wolf','bird','cow','sheep','pig','dog','cat','chicken','fish'];
for(let i=0;i<10;i++)E.push({t:'a',a:AT[i%13],x:10+(h(i,100)%15)*T,y:10+(h(i,200)%15)*T,vx:0,vy:0,f:0,ft:0,hp:3,sp:80+Math.random()*40});
E.push({t:'n',n:'Viejo',x:16*T,y:14*T,d:['Bienvenido a PachaMirai','Explora con cuidado']});
E.push({t:'n',n:'Guarda',x:20*T,y:20*T,d:['Cuida la naturaleza']});

// Jugador
const P={x:WW*T/2,y:WH*T/2,vx:0,vy:0,dir:0,f:0,ft:0,st:'idle',atk:0,hp:100,mhp:100,mp:50,mmp:50,xp:0,lv:1,g:50,inv:{wood:0,stone:0,potion:3,apple:0}};

// Input
let jx=0,jy=0;

(function(){
  const j=document.getElementById('joy'),k=document.getElementById('jk');
  let a=false,cx=0,cy=0;
  function s(e){a=true;const r=j.getBoundingClientRect();cx=r.left+r.width/2;cy=r.top+r.height/2;e.preventDefault();m(e.touches[0])}
  function m(e){if(!a)return;e.preventDefault();const dx=e.clientX-cx,dy=e.clientY-cy,d=Math.min(Math.sqrt(dx*dx+dy*dy),25),an=Math.atan2(dy,dx);k.style.transform=`translate(calc(-50% + ${Math.cos(an)*d}px), calc(-50% + ${Math.sin(an)*d}px))`;jx=d>5?Math.cos(an)*d/25:0;jy=d>5?Math.sin(an)*d/25:0}
  function en(){a=false;jx=0;jy=0;k.style.transform='translate(-50%,-50%)'}
  j.addEventListener('touchstart',s,{passive:false});
  j.addEventListener('touchmove',e=>m(e.touches[0]),{passive:false});
  j.addEventListener('touchend',en);
})();

function atk(){if(P.atk>0)return;P.atk=0.4;P.st='attack';for(let i=E.length-1;i>=0;i--){const e=E[i];if(e.t!=='a')continue;if(Math.hypot(e.x-P.x,e.y-P.y)<40){e.hp--;if(e.hp<=0){P.xp+=10;E.splice(i,1)}}}}
function int_(){for(const e of E)if(e.t==='n'&&Math.hypot(e.x-P.x,e.y-P.y)<50){dlg(e.n+': '+e.d[Math.floor(Math.random()*e.d.length)]);return}}
function dlg(t){const d=document.getElementById('dialogue');d.textContent=t;d.style.display='block';setTimeout(()=>d.style.display='none',2500)}

document.getElementById('ba').onclick=atk;
document.getElementById('bb').onclick=int_;
document.getElementById('bc').onclick=()=>dlg('Madera: '+P.inv.wood+' | Piedra: '+P.inv.stone);
document.getElementById('mr').onclick=()=>document.getElementById('menu').style.display='none';
document.getElementById('ms').onclick=()=>{localStorage.setItem('p',JSON.stringify(P));dlg('Guardado')};
document.getElementById('ml').onclick=()=>{const s=localStorage.getItem('p');if(s){Object.assign(P,JSON.parse(s));dlg('Cargado')}else dlg('Sin partida')};

function render(){
  ctx.fillStyle='#1a1a2e';ctx.fillRect(0,0,cv.width,cv.height);
  
  const sw=cv.width,sh=cv.height;
  const z=2;
  const ts=T*z;
  const ox=P.x*z-sw/2;
  const oy=P.y*z-sh/2;
  
  const startX=Math.max(0,Math.floor(ox/z/T));
  const startY=Math.max(0,Math.floor(oy/z/T));
  const endX=Math.min(WW,Math.ceil((ox+sw)/z/T));
  const endY=Math.min(WH,Math.ceil((oy+sh)/z/T));
  
  for(let ty=startY;ty<endY;ty++)for(let tx=startX;tx<endX;tx++){
    const t=W[ty][tx];
    const cs=[['#3a6b2a','#4a7c2e','#387328','#48802c'],['#5d4037','#6d4c41','#4e342e','#795548'],['#0d47a1','#1565c0','#1976d2','#0d47a1'],['#f9a825','#fdd835','#ffb300','#f9a825'],['#616161','#757575','#9e9e9e','#616161'],['#e0e0e0','#f5f5f5','#fafafa','#e0e0e0'],['#2d5a2d','#2d5a2d','#2d5a2d','#2d5a2d']];
    ctx.fillStyle=cs[t][V[ty][tx]];
    ctx.fillRect(tx*ts-ox,ty*ts-oy,ts+1,ts+1);
    
    if(t===0){
      ctx.fillStyle='#5a9a3a';
      ctx.fillRect(tx*ts-ox+4*z,ty*ts-oy+26*z,2*z,6*z);
      ctx.fillRect(tx*ts-ox+14*z,ty*ts-oy+25*z,2*z,7*z);
    }
    if(t===6){
      ctx.fillStyle='#4e342e';
      ctx.fillRect(tx*ts-ox+11*z,ty*ts-oy+14*z,10*z,16*z);
      ctx.fillStyle='#1b5e20';
      ctx.beginPath();ctx.arc(tx*ts-ox+16*z,ty*ts-oy+10*z,10*z,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#2e7d32';
      ctx.beginPath();ctx.arc(tx*ts-ox+15*z,ty*ts-oy+8*z,7*z,0,Math.PI*2);ctx.fill();
    }
    if(t===2){
      ctx.fillStyle='rgba(66,165,245,0.5)';
      ctx.fillRect(tx*ts-ox+4*z,ty*ts-oy+8*z,8*z,2*z);
      ctx.fillRect(tx*ts-ox+16*z,ty*ts-oy+18*z,6*z,2*z);
    }
  }
  
  for(const e of E){
    const sx=e.x*z-ox,sy=e.y*z-oy;
    if(sx<-T||sx>sw+T||sy<-T||sy>sh+T)continue;
    
    if(e.t==='a'){
      const c={deer:[160,120,80],boar:[80,60,40],rabbit:[240,240,240],fox:[200,80,20],wolf:[80,80,80],bird:[40,100,200],cow:[250,250,250],sheep:[250,250,240],pig:[250,180,180],horse:[120,80,60],dog:[250,250,240],cat:[200,100,50],chicken:[250,250,240],fish:[100,180,255]}[e.a]||[150,150,150];
      ctx.fillStyle=`rgb(${c[0]},${c[1]},${c[2]})`;
      ctx.beginPath();ctx.ellipse(sx+14*z,sy+18*z,8*z,5*z,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(sx+22*z,sy+12*z,5*z,4*z,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#212121';ctx.fillRect(sx+24*z,sy+11*z,2*z,2*z);
    } else {
      ctx.fillStyle='#795548';ctx.fillRect(sx+6*z,sy+2*z,20*z,10*z);ctx.fillRect(sx+10*z,sy,12*z,4*z);
      ctx.fillStyle='#ffccbc';ctx.fillRect(sx+8*z,sy+10*z,16*z,10*z);
      ctx.fillStyle='#1565c0';ctx.fillRect(sx+6*z,sy+18*z,20*z,12*z);
      ctx.fillStyle='#fc0';ctx.font=`${7}px monospace`;ctx.textAlign='center';ctx.fillText(e.n,sx+16*z,sy-4*z);
    }
  }
  
  const px=P.x*z-ox,py=P.y*z-oy;
  const bob=P.st==='walk'?[0,-2*z,0,2*z][P.f]:0;
  const leg=P.st==='walk'?[0,3*z,0,-3*z][P.f]:0;
  const cx=px+16*z,cy=py+16*z+bob;
  
  ctx.fillStyle='rgba(0,0,0,0.3)';ctx.beginPath();ctx.ellipse(cx,cy+12*z,8*z,3*z,0,0,Math.PI*2).fill();
  ctx.fillStyle='#5d4037';ctx.fillRect(cx-4*z,cy+2*z,3*z,10*z+leg);ctx.fillRect(cx+1*z,cy+2*z,3*z,10*z-leg);
  ctx.fillStyle='#3e2723';ctx.fillRect(cx-4*z,cy+11*z+leg,3*z,3*z);ctx.fillRect(cx+1*z,cy+11*z-leg,3*z,3*z);
  ctx.fillStyle='#1565c0';ctx.fillRect(cx-6*z,cy-6*z,12*z,10*z);ctx.fillStyle='#1976d2';ctx.fillRect(cx-5*z,cy-5*z,10*z,8*z);
  ctx.fillStyle='#ffccbc';ctx.fillRect(cx-5*z,cy-14*z,10*z,10*z);ctx.fillStyle='#ffe0b2';ctx.fillRect(cx-4*z,cy-12*z,8*z,6*z);
  ctx.fillStyle='#3e2723';ctx.fillRect(cx-6*z,cy-15*z,12*z,4*z);
  if(P.dir!==3){ctx.fillStyle='#fff';ctx.fillRect(cx-3*z,cy-10*z,3*z,3*z);ctx.fillRect(cx+1*z,cy-10*z,3*z,3*z);ctx.fillStyle='#1a1a1a';ctx.fillRect(cx-2*z,cy-9*z,2*z,2*z);ctx.fillRect(cx+2*z,cy-9*z,2*z,2*z)}
  if(P.st==='attack'&&P.f<2){ctx.fillStyle='#b0bec5';ctx.fillRect(cx+8*z,cy-10*z,3*z,14*z);ctx.fillStyle='#ffc107';ctx.fillRect(cx+6*z,cy+4*z,7*z,3*z)}
}

function renderMM(){
  const mc=document.getElementById('mc');if(!mc)return;
  const mctx=mc.getContext('2d');
  mctx.fillStyle='#0a0a1a';mctx.fillRect(0,0,50,50);
  const r=14,ppx=Math.floor(P.x/T),ppy=Math.floor(P.y/T);
  for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){
    const wx=ppx+dx,wy=ppy+dy;
    if(wx<0||wx>=WW||wy<0||wy>=WH)continue;
    const t=W[wy][wx];
    mctx.fillStyle=t===0?'#4caf50':t===1?'#8d6e63':t===2?'#0288d1':t===3?'#f9a825':t===4?'#757575':t===5?'#fff':'#1b5e20';
    mctx.fillRect(25+dx*1.6,25+dy*1.6,1.6,1.6);
  }
  mctx.fillStyle='#fff';mctx.fillRect(24,24,2,2);
  mctx.fillStyle='#fc0';
  for(const e of E)if(e.t==='n'){const nx=25+Math.floor((e.x/T-ppx)*1.6),ny=25+Math.floor((e.y/T-ppy)*1.6);if(nx>0&&nx<50&&ny>0&&ny<50)mctx.fillRect(nx-1,ny-1,3,3)}
}

function update(dt){
  const sp=150;
  P.vx=jx*sp;P.vy=jy*sp;
  P.x+=P.vx*dt;P.y+=P.vy*dt;
  P.x=Math.max(T,Math.min(WW*T-T,P.x));
  P.y=Math.max(T,Math.min(WH*T-T,P.y));
  
  if(Math.abs(jx)>Math.abs(jy))P.dir=jx>0?2:1;else if(jy!==0)P.dir=jy>0?0:3;
  
  if(P.atk>0){P.st='attack';P.atk-=dt}else if(Math.abs(P.vx)>1||Math.abs(P.vy)>1)P.st='walk';else P.st='idle';
  P.ft+=dt;if(P.ft>0.2){P.ft=0;P.f=(P.f+1)%4}
  
  for(const e of E){
    if(e.t!=='a')continue;
    const dx=P.x-e.x,dy=P.y-e.y,dist=Math.hypot(dx,dy);
    if(dist<80&&dist>0){e.vx=-dx/dist*120;e.vy=-dy/dist*120}
    else if(dist>200){e.vx=(Math.random()-0.5)*40;e.vy=(Math.random()-0.5)*40}
    else{e.vx*=0.95;e.vy*=0.95}
    e.x+=e.vx*dt;e.y+=e.vy*dt;
    e.x=Math.max(T,Math.min(WW*T-T,e.x));
    e.y=Math.max(T,Math.min(WH*T-T,e.y));
  }
  
  if(P.xp>=P.lv*50){P.xp-=P.lv*50;P.lv++;P.mhp+=10;P.hp=P.mhp;dlg('NIVEL '+P.lv+'!')}
  
  document.getElementById('hp-fill').style.width=(P.hp/P.mhp*100)+'%';
  document.getElementById('mp-fill').style.width=(P.mp/P.mmp*100)+'%';
  document.getElementById('xp-fill').style.width=(P.xp/(P.lv*50)*100)+'%';
  document.getElementById('hp-txt').textContent=P.hp+'/'+P.mhp;
  document.getElementById('mp-txt').textContent=P.mp+'/'+P.mmp;
  document.getElementById('xp-txt').textContent=P.xp+'/'+(P.lv*50);
  document.getElementById('lvl-display').textContent='Nv '+P.lv;
  document.getElementById('gold-display').textContent='🪙 '+P.g;
  document.getElementById('inv-wood').textContent=P.inv.wood;
  document.getElementById('inv-stone').textContent=P.inv.stone;
  document.getElementById('inv-potion').textContent=P.inv.potion;
}

let last=0;
function loop(ts){const dt=Math.min((ts-last)/1000,0.1);last=ts;update(dt);render();renderMM();requestAnimationFrame(loop)}

resize();
last=performance.now();
requestAnimationFrame(loop);
