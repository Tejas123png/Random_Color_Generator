const butt=document.querySelector('button');
const h1=document.querySelector('h1');
butt.addEventListener('click',function(){
    const newcolor=randomcol();
    document.body.style.backgroundColor=newcolor;
    h1.innerText=newcolor;
})

const randomcol=function(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`;
}
