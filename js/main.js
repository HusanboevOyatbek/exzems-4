
let productCards = document.querySelector(".aksiya-cards");
let lastFourProducts = products.slice(-4);
let badge = document.getElementById("badge")
let cart = []
let isExist;


badge.textContent = cart.length

function getStars(rating) {
  const fullStar = `<img src="./imgs/star-full.svg" class="w-5 h-5">`;
  const halfStar = `<img src="./imgs/star-half.svg" class="w-5 h-5">`;

  let stars = "";


  const fullCount = Math.floor(rating);
  for (let i = 0; i < fullCount; i++) stars += fullStar;


  if (rating % 1 !== 0) stars += halfStar;

  return `<div class="flex items-center mt-[8px] gap-[2px]">${stars}</div>`;
}


function showProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    const itemInCart = cart.find((car) => car.id === el.id);

    content.innerHTML += `
    <div class="crsds w-full bg-[#FFFFFF] max-w-[400px] shadow rounded-md overflow-hidden block hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div class="card relative group w-full">
        <img class="mx-auto w-full h-[250px] object-cover rounded-[4px]" src="${el.images[0]}" alt="${el.name}">
      </div>

      <div class="flex justify-between items-center px-[10px] mt-[10px] w-full">
        <h1 class="line-through text-[#414141] text-[18px] font-semibold">${el.price} $</h1>
        <div class="text-right">
          <h1 class="text-[#606060] text-[18px] font-bold">
            ${(el.price - el.price * el.discount / 100).toFixed(2)} $
          </h1>
          <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
        </div>
      </div>

      <div class="px-[10px] mt-[10px] text-[#414141] text-[14px] line-clamp-2">
        ${el.description}
      </div>

      ${getStars(el.rating)}

      ${itemInCart
        ? `
          <div class="flex items-center justify-between w-full rounded-[10px] border border-[#E0E0E0] bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] shadow-sm overflow-hidden mt-[10px]">
            <button onClick="decrease(${el.id})" class="w-1/3 py-2 font-semibold text-[18px] text-[#333] bg-[#F1F3F5] active:scale-95 transition-all">−</button>
            <span class="w-1/3 text-center py-2 bg-white text-[#2F9E44] font-bold text-[18px]">${itemInCart.qty}</span>
            <button onClick="increase(${el.id})" class="w-1/3 py-2 font-semibold text-[18px] text-white bg-[#70C05B] active:scale-95 transition-all">+</button>
          </div>`
        : `
          <div class="px-[10px] mt-[10px] mb-[10px]">
            <button
              onClick="addCard(${el.id})"
              class="group border-2 border-[#70C05B] cursor-pointer w-full py-2 rounded-md hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-300">
              <span class="text-[#70C05B] group-hover:text-white font-bold">
                В корзину
              </span>
            </button>
          </div>`
      }
    </div>
    `;
  });
}

function addCard(id) {
  let itm = lastFourProducts.find((el) => el.id === id);
  cart.push({ ...itm, qty: 1 });
  badge.textContent = cart.length;
  showProducts(productCards, lastFourProducts);
}

function increase(id) {
  let item = cart.find((el) => el.id === id);
  if (item) item.qty++;
  showProducts(productCards, lastFourProducts);
}

function decrease(id) {
  let item = cart.find((el) => el.id === id);
  if (item && item.qty > 1) {
    item.qty--;
  } else {
    cart = cart.filter((el) => el.id !== id);
  }
  badge.textContent = cart.length;
  showProducts(productCards, lastFourProducts);
}

showProducts(productCards, lastFourProducts);


let newsCards = document.querySelector(".naws-cards");
let news = products.slice(-4);
news.map((el) => {
  newsCards.innerHTML += `
    <a href="./pages/tavar.html?id=${el.id}"crsds w-full bg-[#FFFFFF]  max-w-[400px]  shadow rounded-md overflow-hidden">
      <div class="card relative group w-full ">
        <img class="mx-auto  w-full   h-[250px] rounded-[4px] shadow"
             src=${el.images[0]} alt="${el.name}">
        <img class="absolute  cursor-pointer -top-0 right-2 w-8 h-8 opacity-0 
             group-hover:opacity-100 transition-all duration-500"
             src="./imgs/like.png" alt="like">
       
      </div>

      <div class="flex px-[10px] mt-[10px] w-full justify-between">
        <h1 class="text-[#414141] font-bold text-[25px] ">
          ${el.price} $
         
        </h1>
       
      </div>

      <div class="px-[10px] mt-[10px] text-[#414141]  line-clamp-2">
        ${el.description}
      </div>
      

      <div class="px-[10px] mt-[10px]">
      ${getStars(el.rating)}
      </div>

      <div class="px-[10px] mt-[10px] mb-[15px]">
        <button class="group border-2 border-[#70C05B] text-center w-full cursor-pointer py-2 
                hover:bg-[#FF6633] duration-500 hover:border-[#FF6633] rounded-md">
          <span class="text-[#70C05B] group-hover:text-white block font-bold">
            В корзину
          </span>
        </button>
      </div>
    </div>
  `;
});

let productrCards = document.querySelector(".productr");
let productr = products.slice(-4);
productr.map((el) => {
  productrCards.innerHTML += `
    <a href="./pages/tavar.html?id=${el.id}"crsds w-full bg-[#FFFFFF]  max-w-[400px]  shadow rounded-md overflow-hidden">
      <div class="card relative group w-full ">
        <img class="mx-auto  w-full   h-[250px] rounded-[4px] shadow"
             src=${el.images[0]} alt="${el.name}">
        <img class="absolute  cursor-pointer -top-0 right-2 w-8 h-8 opacity-0 
             group-hover:opacity-100 transition-all duration-500"
             src="./imgs/like.png" alt="like">
       
      </div>

      <div class="flex px-[10px] mt-[10px] w-full justify-between">
        <h1 class="text-[#414141] font-bold text-[25px] ">
          ${el.price} $
         
        </h1>
       
      </div>

      <div class="px-[10px] mt-[10px] text-[#414141]  line-clamp-2 ">
        ${el.description}
      </div>

      <div class="px-[10px] mt-[10px]">
        ${getStars(el.rating)}
      </div>

      <div class="px-[10px] mt-[10px] mb-[15px]">
        <button class="group border-2 border-[#70C05B] text-center w-full cursor-pointer py-2 
                hover:bg-[#FF6633] duration-500 hover:border-[#FF6633] rounded-md">
          <span class="text-[#70C05B] group-hover:text-white block font-bold">
            В корзину
          </span>
        </button>
      </div>
    </div>
  `;
});



