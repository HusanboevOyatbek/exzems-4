let alCards = document.querySelector(".al-cards");
let pro = products;

pro.map((el) => {
    alCards.innerHTML += `
     <div
      class="crsds w-full bg-[#FFFFFF] max-w-[400px] shadow rounded-md overflow-hidden block hover:shadow-lg transition-all duration-300 cursor-pointer"
      onclick="window.location.href='../pages/tavar.html?id=${el.id}'">

      <div class="card relative group w-full">
        <img class="mx-auto w-full h-[250px] object-cover rounded-[4px]" src="${el.images[0]}" alt="${el.name}">

        
        <img 
          class="absolute cursor-pointer top-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500"
          src="../imgs/like.png" 
          alt="like"
          onclick="event.stopPropagation(); window.location.href='../pages/like.html';">


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

      

      <div class="px-[10px] mt-[10px] mb-[10px]">
        <button class="group border-2 border-[#70C05B] cursor-pointer w-full py-2 rounded-md hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-300">
          <span class="text-[#70C05B] group-hover:text-white font-bold">
            В корзину
          </span>
        </button>
      </div>
    </div>
  
  `;
});
