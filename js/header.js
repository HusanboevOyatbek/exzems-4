let toggleBtn = document.getElementById("toggleBtn");
let resMenu = document.getElementById("res-menu");
let menu = document.getElementById("menu");
let close = document.getElementById("close");
let loading = document.getElementById("loading")
let profil = document.getElementById("profil")
let modal = document.getElementById("profilmodal")
let innerProfaylModal = document.getElementById("inner-profayl-modal") 
let formModal = document.getElementById("form-modal")
let profelImg = document.getElementById("profel-img")
let profelName = document.getElementById("profil-name")

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


//**madal str */
function showProfile(){
  let info = JSON.parse(localStorage.getItem("infos") || "{}")

  profelImg.src = info.imageUrl;
  profelName.textContent = info.name
}
showProfile()

profil.addEventListener("click" , function(){
modal.classList.remove("hidden")
})

modal.addEventListener("click" , function(){
  modal.classList.add("hidden")
})

innerProfaylModal.addEventListener("click" , function(e) {
  e.stopPropagation()
})


formModal.addEventListener("submit" , function(e){
  e.preventDefault()
  let infos = {};
  infos.name = e.target[0].value
  infos.imageUrl = e.target[1].value
  infos.tel = e.target[2].value

localStorage.setItem("infos" , JSON.stringify(infos))

  showProfile()
  

  modal.classList.add("hidden")

})
