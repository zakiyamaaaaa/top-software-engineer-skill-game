(() => {
'use strict';
const width=15,height=9;
const gates=window.CURRICULUM.chapters.map((c,i)=>({...c,x:i<7?1+i*2:1+(i-7)*2,y:i<7?1:7}));
const hikari={x:13,y:4};
const walls=[{x:4,y:3},{x:5,y:3},{x:9,y:5},{x:10,y:5}];
let player={x:7,y:4},facing='down';
const sprites={up:'assets/player-up.svg',down:'assets/player-down.svg',left:'assets/player-left.svg',right:'assets/player-right.svg'};
const directions={up:'上',down:'下',left:'左',right:'右'};
const blocked=(x,y)=>x<0||y<0||x>=width||y>=height||walls.some(p=>p.x===x&&p.y===y)||(x===hikari.x&&y===hikari.y);
function nearby(){return [hikari,...gates].find(p=>Math.abs(player.x-p.x)+Math.abs(player.y-p.y)<=1)||null;}
function move(dx,dy){if(Math.abs(dx)+Math.abs(dy)!==1)return false;facing=dx<0?'left':dx>0?'right':dy<0?'up':'down';if(blocked(player.x+dx,player.y+dy))return false;player={x:player.x+dx,y:player.y+dy};return true;}
const position=p=>`left:${(p.x+.5)/width*100}%;top:${(p.y+.5)/height*100}%`;
function prompt(){const target=nearby();return target?(target===hikari?'ヒカリと話す':target.title+'へ出発'):'入口かヒカリの隣まで歩こう';}
function html(){return `<section class="exploration card" aria-labelledby="world-title"><div class="world-heading"><div><p class="eyebrow">WALK THROUGH THE GUILD</p><h2 id="world-title">星灯りの小さな広場</h2></div><span class="muted">あなたの足で、次の学びへ。</span></div><p id="world-help">ホーム画面では矢印キーで移動できます。広場を選ぶと WASD も使えます。入口の隣で Enter / Space。スマホは下の方向ボタンを使えます。</p><div class="world" data-world tabindex="0" role="group" aria-label="キャラクターを操作する広場" aria-describedby="world-help world-status"><div class="world-path"></div>${gates.map(g=>`<div class="world-gate" title="${g.id+1}. ${g.title}" aria-label="${g.id+1}. ${g.title}の入口" style="${position(g)}"><span>${g.icon}</span><small>${g.id+1}</small></div>`).join('')}${walls.map(p=>`<div class="world-obstacle" style="${position(p)}" aria-hidden="true">▤</div>`).join('')}<div class="world-hikari" style="${position(hikari)}"><img src="assets/hikari-sprite.svg" alt="ヒカリ"><small>ヒカリ</small></div><div id="world-player" class="world-player" data-facing="${facing}" style="${position(player)}"><img src="${sprites[facing]}" alt="あなたのキャラクター（${directions[facing]}向き）"></div></div><div class="world-controls"><div class="direction-pad" aria-label="移動ボタン"><button data-move="up" aria-label="上へ移動">↑</button><button data-move="left" aria-label="左へ移動">←</button><button data-move="down" aria-label="下へ移動">↓</button><button data-move="right" aria-label="右へ移動">→</button></div><button class="primary" data-interact ${nearby()?'':'disabled'}>${prompt()}</button></div><p id="world-status" role="status">${status()}</p><details class="world-legend"><summary>入口の番号と章を見る</summary><p>${gates.map(g=>`${g.id+1}. ${g.title}`).join(' / ')}</p></details></section>`;}
function status(){return `現在地：横 ${player.x+1} / ${width}、縦 ${player.y+1} / ${height}。向き：${directions[facing]}。${prompt()}`;}
function update(){const el=document.querySelector('#world-player');if(!el)return;el.style.cssText=position(player);el.dataset.facing=facing;const sprite=document.querySelector('#world-player img');sprite.src=sprites[facing];sprite.alt=`あなたのキャラクター（${directions[facing]}向き）`;const button=document.querySelector('[data-interact]');button.disabled=!nearby();button.textContent=prompt();document.querySelector('#world-status').textContent=status();}
window.GUILD_MAP={html,move,nearby,update,getPlayer:()=>({...player}),blocked};
})();
