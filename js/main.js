
let productCards = document.querySelector(".aksiya-cards");

let lastFourProducts = products.slice(-4);


lastFourProducts.map((el) => {
    productCards.innerHTML += `
    <div class="crsds w-full bg-[#FFFFFF]  max-w-[400px]  shadow rounded-md overflow-hidden">
      <div class="card relative group w-full ">
        <img class="mx-auto  w-full   h-[250px] rounded-[4px] shadow"
             src=${el.images[0]} alt="${el.name}">
        <img class="absolute  cursor-pointer -top-0 right-2 w-8 h-8 opacity-0 
             group-hover:opacity-100 transition-all duration-500"
             src="./imgs/like.png" alt="like">
        <img class="absolute bottom-2 left-2 w-[56px]"
             src="./imgs/chegirma.png" alt="chegirma">
      </div>

      <div class="flex px-[10px] mt-[10px] w-full justify-between">
        <h1 class="line-through text-[#414141] text-[25px] font-bold">
          ${el.price} $
        </h1>
        <h1 class="text-[#606060] ">
          ${el.price - el.price * el.discount / 100} $
          <p class="text-[12px] text-[#BFBFBF]">Обычная</p>
        </h1>
      </div>

      <div class="px-[10px] mt-[10px] text-[#414141] line-clamp-2">
        ${el.description}
      </div>


${el.rating === 5 ? `<div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===4.5 ? <div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-half.svg" alt="" class="max-w-10 max-h-10">
</div>
:el.rating===4 ? <div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===3.5 ? <div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-half.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===3 ? <div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===2.5 ?<div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    <img src="./imgs/star-half.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===2 ?<div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-full.svg" alt="" class="max-w-10 max-h-10">
    >
</div>
: el.rating===1.5 ?<div class="flex items-center"> <img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
    <img src="./imgs/star-half.svg" alt="" class="max-w-10 max-h-10">
</div>
: el.rating===1 ? <div class="flex items-center"><img src="./imgs/star-full.svg" alt=""
        class="max-w-10 max-h-10">
</div>
`: `` }

      <div class="px-[10px] mt-[10px] mb-[10px]">
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







let newsCards = document.querySelector(".naws-cards");

let news = products.slice(-4);


news.map((el) => {
    newsCards.innerHTML += `
    <div class="crsds w-full bg-[#FFFFFF]  max-w-[400px]  shadow rounded-md overflow-hidden">
      <div class="card relative group w-full ">
        <img class="mx-auto  w-full   h-[250px] rounded-[4px] shadow"
             src=${el.images[1]} alt="${el.name}">
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
        <img class="w-full max-w-[250px]" src="./imgs/rating 5.png" alt="rating">
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
    <div class="crsds w-full bg-[#FFFFFF]  max-w-[400px]  shadow rounded-md overflow-hidden">
      <div class="card relative group w-full ">
        <img class="mx-auto  w-full   h-[250px] rounded-[4px] shadow"
             src=${el.images[2]} alt="${el.name}">
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
        <img class="w-full max-w-[250px]" src="./imgs/rating 5.png" alt="rating">
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