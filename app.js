const root=document.documentElement;
const stored=localStorage.getItem("cv-theme");
if(stored==="dark" || (!stored && matchMedia("(prefers-color-scheme: dark)").matches)) root.classList.add("dark");
document.getElementById("themeToggle")?.addEventListener("click",()=>{
  root.classList.toggle("dark");
  localStorage.setItem("cv-theme",root.classList.contains("dark")?"dark":"light");
});
if("serviceWorker" in navigator) addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",()=>document.activeElement?.blur()));
