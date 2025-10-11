

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

      <div class="px-[10px] mt-[10px] text-[#414141]">
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

      <div class="px-[10px] mt-[10px] text-[#414141]">
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