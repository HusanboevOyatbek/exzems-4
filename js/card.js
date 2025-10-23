
let cardCArds = document.querySelector(".discripton");
let homCards = document.getElementById("home-cards");
let badge = document.getElementById("badge");
let card = []

badge.textContent = card.length

cardCArds.innerHTML += `
<h1 class="mt-[25px] text-[40px] sm:text-[50px] md:text-[64px] text-[#414141] font-bold">
    ${products[0].description}
</h1>
`

function showProducts(content, data) {
    data.map((el) => {
        content.innerHTML += `
<div class="px-[20px]">
    <div
        class="card max-w-[876px] w-full min-h-[90px] bg-[#FFFFFF] rounded-[6px] shadow flex items-center justify-between gap-[15px] p-[10px]">

        <img class="w-[70px] h-[70px] object-contain rounded" src=${el.images[0]} alt="Комбайн">

        <div class="flex flex-col flex-1">
            <p class="text-[#414141] font-semibold text-[15px] leading-tight">
                ${el.description}
            </p>
            <p class="text-[13px] text-[#70C05B] font-bold mt-[5px]">
                ${el.price} $
            </p>
        </div>



        <div class="flex items-center bg-[#F3F2F1] rounded-[6px] overflow-hidden border border-[#70C05B]">
            <button
                class="px-[12px] py-[6px] text-[#70C05B] font-bold text-[18px] hover:bg-[#70C05B] hover:text-white duration-300 cursor-pointer ">-</button>
            <span class="px-[12px] py-[6px] text-[#414141] font-medium">1</span>
            <button
                class="px-[12px] py-[6px] text-[#70C05B] font-bold text-[18px] hover:bg-[#70C05B] hover:text-white duration-300 cursor-pointer">+</button>
        </div>

        <h2 class="text-[18px] text-[#414141] font-bold whitespace-nowrap">
            ${el.price} $
        </h2>

    </div>
</div>
`
    })
}

showProducts(homCards, products)

function addCard(id) {
    let item = products.find((el) => el.id === id)
    card.push(item)
    badge.textContent = card.length

}