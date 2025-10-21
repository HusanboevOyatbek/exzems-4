let toggleBtn = document.getElementById("toggleBtn");
let resMenu = document.getElementById("res-menu");
let menu = document.getElementById("menu");
let close = document.getElementById("close");
let loading = document.getElementById("loading")

//**Togel Start */
toggleBtn.addEventListener("click" , function(){
  resMenu.classList.toggle("translate-x-[-100%]");
  menu.classList.toggle("hidden");
  close.classList.toggle("hidden")

})
//**Togel end */

//**Loading Start */
window.addEventListener("load" , function(){
  loading.classList.add("hidden")
})
//**Loading end */


