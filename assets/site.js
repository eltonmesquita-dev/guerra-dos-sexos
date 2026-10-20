// Sumário ativo, animação dos gráficos ao entrar na tela e botão "voltar ao topo"
(()=>{
const links=[...document.querySelectorAll('nav.toc a')];const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove('on'));map.get(e.target.id)?.classList.add('on')}}),{rootMargin:'0px 0px -75% 0px'});
map.forEach((a,id)=>{const el=document.getElementById(id);el&&io.observe(el)});
if(matchMedia('(max-width:980px)').matches)document.querySelectorAll('details.tocw').forEach(d=>d.removeAttribute('open'));
const vz=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');vz.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.viz').forEach(v=>vz.observe(v));
document.documentElement.classList.add('js');
const t=document.querySelector('.totop'),bar=document.querySelector('.topbar');
addEventListener('scroll',()=>{const y=scrollY>innerHeight*.8;t.classList.toggle('show',y);bar.classList.toggle('solid',scrollY>40)},{passive:true});
})();
