class MobileNavBar {
  constructor(menu,list,links){this.menu=document.querySelector(menu);this.list=document.querySelector(list);this.links=document.querySelectorAll(links)}
  toggle(){this.list.classList.toggle("active");this.menu.classList.toggle("active");this.links.forEach((l,i)=>l.style.animation=this.list.classList.contains("active")?`navLinkFade .4s ease forwards ${i*.06+.05}s`:"")}
  init(){if(!this.menu)return;this.menu.addEventListener("click",()=>this.toggle());this.links.forEach(l=>l.addEventListener("click",()=>{this.list.classList.remove("active");this.menu.classList.remove("active")}))}
}
new MobileNavBar(".mobile-menu",".nav-list",".nav-list li").init();
