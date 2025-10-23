let searchInput = document.getElementById("search")
let searchValeu = "";
let searchResalt = document.getElementById("search-result")
let path = new URLSearchParams(window.location.search)
let id = path.get("id")
let acsiyaCard = document.querySelector(".might")
let acsiyaslis = products.slice(-4)

//**rating */
function getStars(rating) {
  const fullStar = `<img src="../imgs/star-full.svg" class="w-5 h-5">`;
  const halfStar = `<img src="../imgs/star-half.svg" class="w-5 h-5">`;

  let stars = "";


  const fullCount = Math.floor(rating);
  for (let i = 0; i < fullCount; i++) stars += fullStar;


  if (rating % 1 !== 0) stars += halfStar;

  return `<div class="flex items-center mt-[8px] gap-[2px]">${stars}</div>`;
}
//**rating end */

searchValeu ? searchResalt : searchResalt.classList.add("hidden")

//**singel-pradact */
let singleProduct = document.querySelector(".single-product")

let idProduct = products.filter((el) => el.id == id)

idProduct.map((el) => {
    singleProduct.innerHTML += `
    <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-[20px] px-[20px] mt-[50px] max-w-[10000px] w-full">
            <div class="flex items-center gap-[20px]">
                <div class="flex-col gap-[5px] ">
                ${el.images.map((el) => {
        return ` <img class="max-w-[150px] w-full object-cover " src=${el} alt="">
       `
    }).join(" ")
        }
                </div>
              <div class=" w-full">
    <img class="max-w-[480px] w-full h-full" src="${el.images[0]}" alt="">
</div>
                
            </div>

             <div class=" max-w-[584px] px-[30px] mt-[40px]">
            <div class="">
                <div class=" flex justify-between ">
                    <h1 class="text-[24px] text-[#606060] ">
                         ${el.price} $ 
                    </h1>
        
                    <h1 class="text-[24px] text-[#414141] font-bold">
                         ${el.price - el.price * el.discount / 100} $                     </h1>
                </div>

                <div class="flex justify-center mt-[30px]  ">
                    <button
                        class="bg-[#FF6633] cursor-pointer  flex gap-[10px] justify-center items-center px-[16px] py-[10px] rounded-[4px] text-white">
                        <img src="../imgs/shopping-cart.png" alt="">
                        В корзину
                    </button>
                </div>
<div class="space-y-[4px] mt-[40px]">
    <div class="bg-[#F3F2F1] grid grid-cols-2 px-[30px] py-[6px] items-center rounded-[4px]">
        <h3 class="text-[#414141] text-[12px]">Бренд</h3>
        <h2 class="text-[#414141] text-[12px] font-bold text-right">${el.name}</h2>
    </div>

    <div class="bg-[#F3F2F1] grid grid-cols-2 px-[30px] py-[6px] items-center rounded-[4px]">
        <h3 class="text-[#414141] text-[12px]">Страна производителя</h3>
        <h2 class="text-[#414141] text-[12px] font-bold text-right">Россия</h2>
    </div>

    <div class="bg-[#F3F2F1] grid grid-cols-2 px-[30px] py-[6px] items-center rounded-[4px]">
        <h3 class="text-[#414141] text-[12px]">Упаковка</h3>
        <h2 class="text-[#414141] text-[12px] font-bold text-right">180 г</h2>
    </div>
</div>


       </div>
        </div>
        </div>
    `
})

//**singel-pradact end */

//**input*/
searchInput.addEventListener("input", function (e) {
    searchValeu = e.target.value
    searchValeu ? searchResalt.classList.remove("hidden") : searchResalt.classList.add("hidden")
  
    let searchProducs = products.filter((el) => el.name.toLocaleLowerCase().includes(searchValeu.toLowerCase()))
    searchProducs.length === 0 ? searchResalt.textContent = "kechirasiz maxsulot topilmadi" :
    searchResalt.innerHTML = ""
    searchProducs.map((el) => {
        searchResalt.innerHTML += `
   <div class="flex gap-4 items-center mt-2 bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
  <img class="w-20 h-20 object-cover rounded-lg" src="${el.images[0]}" alt="${el.name}">
  
  <div class="flex-1">
    <h2 class="text-[#2E2E2E] font-semibold text-[14px] leading-tight line-clamp-1">
      ${el.name}
    </h2>
    <p class="text-[#6B6B6B] text-[12px] mt-[4px] line-clamp-2">
      ${el.description}
    </p>
    <span class="text-[#FF6633] font-semibold text-[14px] mt-[6px] block">
      ${el.price} $
    </span>
  </div>
</div>

    `
    })

})

//**input end*/


// let newsProduct = document.querySelector(".catalog-tovar");

// let productSlis = products.slice(-4);

//  productSlis.map((el) => {
//     newsProduct.innerHTML += `
//     <div
//       class="crsds w-full bg-[#FFFFFF] max-w-[400px] shadow rounded-md overflow-hidden block hover:shadow-lg transition-all duration-300 cursor-pointer"
//       onclick="window.location.href='../pages/tavar.html?id=${el.id}'">

//       <div class="card relative group w-full">
//         <img class="mx-auto w-full h-[250px] object-cover rounded-[4px]" src="${el.images[1]}" alt="${el.name}">

        
//         <img 
//           class="absolute cursor-pointer top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
//           src="../imgs/like.png" 
//           alt="like"
//           onclick="event.stopPropagation(); window.location.href='../pages/like.html';">

//         <img class="absolute bottom-2 left-2 w-[56px]" src="../imgs/chegirma.png" alt="chegirma">
//       </div>

//       <div class="flex justify-between items-center px-[10px] mt-[10px] w-full">
//         <h1 class="line-through text-[#414141] text-[18px] font-semibold">${el.price} $</h1>
//         <div class="text-right">
//           <h1 class="text-[#606060] text-[18px] font-bold">
//             ${(el.price - el.price * el.discount / 100).toFixed(2)} $
//           </h1>
//           <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
//         </div>
//       </div>

//       <div class="px-[10px] mt-[10px] text-[#414141] text-[14px] line-clamp-2">
//         ${el.description}
//       </div>

//       ${getStars(el.rating)}

//       <div class="px-[10px] mt-[10px] mb-[10px]">
//         <button class="group border-2 border-[#70C05B] cursor-pointer w-full py-2 rounded-md hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-300">
//           <span class="text-[#70C05B] group-hover:text-white font-bold">
//             В корзину
//           </span>
//         </button>
//       </div>
//     </div>
//     `
// })

//**Acsiya star */
// acsiyaslis.map((el) => {
// acsiyaCard.innerHTML += `
//  <div 
//        class="crsds w-full bg-[#FFFFFF] max-w-[400px] shadow rounded-md overflow-hidden block hover:shadow-lg transition-all duration-300">

//       <div class="card relative group w-full">
//         <img class="mx-auto w-full h-[250px] object-cover rounded-[4px]" src="${el.images[0]}" alt="${el.name}">
//         <img class="absolute cursor-pointer top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
//              src="../imgs/like.png" alt="like">
//         <img class="absolute bottom-2 left-2 w-[56px]" src="../imgs/chegirma.png" alt="chegirma">
//       </div>

//       <div class="flex justify-between items-center px-[10px] mt-[10px] w-full">
//         <h1 class="line-through text-[#414141] text-[18px] font-semibold">${el.price} $</h1>
//         <div class="text-right">
//           <h1 class="text-[#606060] text-[18px] font-bold">
//             ${(el.price - el.price * el.discount / 100).toFixed(2)} $
//           </h1>
//           <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
//         </div>
//       </div>

//       <div class="px-[10px] mt-[10px] text-[#414141] text-[14px] line-clamp-2">
//         ${el.description}
//       </div>

//       ${getStars(el.rating)}

//       <div class="px-[10px] mt-[10px] mb-[10px]">
//         <button class="group border-2 border-[#70C05B] cursor-pointer w-full py-2 rounded-md hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-300">
//           <span class="text-[#70C05B] group-hover:text-white font-bold">
//             В корзину
//           </span>
//         </button>
//       </div>
//     </a>
// `
// })