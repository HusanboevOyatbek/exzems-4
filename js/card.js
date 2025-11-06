
let cardCArds = document.querySelector(".discripton");
let homCards = document.getElementById("home-cards");
let badge = document.getElementById("badge");
let card = JSON.parse(localStorage.getItem("cart") || "[]")
let remov = document.getElementById("remove");
let ids = [];
let allCheck = document.getElementById("all-check");
let checks = document.getElementsByClassName("checks");
let allPrice2 = document.getElementById("all-price-2");
let allDiscounts = document.getElementById("all-discounts");
let payPrice = document.getElementById("pay-price");
let promoInput = document.getElementById("promo");
badge.textContent = card.length

cardCArds.innerHTML += `
<h1 class="mt-[25px] text-[40px] sm:text-[50px] md:text-[64px] text-[#414141] font-bold">
    ${products[0].description}
</h1>
`
function showProducts(content, data) {

    let sum = 0;
    let discount = 0;

    promoInput.addEventListener("input", function (e) {
        if (e.target.value === "OYATTILO") {

            discount += 200;
            calculatePrice(0, discount)

        }
    })

    function calculatePrice(sum = 0, discount = 0) {
        for (let el of card) {
            sum += el.price * el.qty;
            discount += el.price * el.qty * el.discount / 100;
        }

        allPrice2.textContent = sum;
        allDiscounts.textContent = Math.floor(discount);
        payPrice.textContent = Math.floor(sum - discount);
    }
    calculatePrice(sum, discount)

    homCards.innerHTML = ''
    card.forEach((el) => {
        homCards.innerHTML += `
        <div class="px-[20px] relative ">
<div class="px-[20px] relative ">
    <div
        class="card mt-[34px] max-w-[876px] w-full min-h-[90px] bg-[#FFFFFF] rounded-[6px] shadow flex items-center justify-between gap-[5px] p-[10px] ">
        <input
        
        onClick="addToCheck(this, ${el.id})"
        type="checkbox" class="checks w-[20px] h-[20px] cursor-pointer absolute top-[0] lef-[0] ">

        <img class="w-[70px] h-[70px] object-contain rounded" src=${el.images[0]} alt="Комбайн">
         

        <div class="flex flex-col flex-1">
            <p class="text-[#414141] font-semibold text-[15px] leading-tight">
                ${el.description}
            </p>
            <div  class="flex items-center justify-between px-[10px] text-[#70C05B] my-[5px] max-w-[111px] w-full">
                <h1 class="text-[13px]  text-[#70C05B] font-bold mt-[5px]">
                    ${el.price}
                </h1>
                <h1 class="text-[13px]  text-[#70C05B] font-bold mt-[5px]">
            ${(el.price - el.price * el.discount / 100).toFixed(2)} $
          </h1>
               
            </div>
        </div>


        
        <div class="flex items-center bg-[#F3F2F1] rounded-[6px] overflow-hidden border border-[#70C05B]  ">
            <button onClick="decrease(${el.id})"
                class="px-[12px] py-[6px] text-[#70C05B] font-bold text-[18px] hover:bg-[#70C05B] hover:text-white duration-300 cursor-pointer ">-</button>
            <span id="qty-${el.id}" class="px-[12px] py-[6px] text-[#414141] font-medium">${el.qty || 1}   </span>
            <button   onClick="increase(${el.id})"
                class="px-[12px] py-[6px] text-[#70C05B] font-bold text-[18px] hover:bg-[#70C05B] hover:text-white duration-300 cursor-pointer">+</button>
        </div>

         <h1 class="text-[20px]   font-bold mt-[5px]  px-[20px]">
                    ${(((el.price - el.price * el.discount / 100) * (el.qty || 1))).toFixed(2)} $
                </h1>

    </div>
</div>
`
    })
}
showProducts(cardCArds, card)






function saveCart() {
    localStorage.setItem('cart', JSON.stringify(card))
    badge.textContent = card.length
}

function increase(id) {
    const idx = card.findIndex(c => c.id === id)
    if (idx === -1) return
    card[idx].qty = (card[idx].qty || 1) + 1
    saveCart()
    showProducts(homCards, card)
}

function decrease(id) {
    const idx = card.findIndex(c => c.id === id)
    if (idx === -1) return
    const currentQty = card[idx].qty || 1
    if (currentQty > 1) {
        card[idx].qty = currentQty - 1
    } else {
        card.splice(idx, 1)
    }
    saveCart()
    showProducts(homCards, card)
}

function addCard(id) {
    const product = products.find((el) => el.id === id)
    if (!product) return
    const existing = card.find(c => c.id === id)
    if (existing) {
        existing.qty = (existing.qty || 1) + 1
    } else {
        const item = Object.assign({}, product)
        item.qty = 1
        card.push(item)
    }
    saveCart()
    showProducts(homCards, card)
}

// **check inp str */
function addToCheck(value, id) {
    if (value.checked) {
        ids.push(id)
    } else if (value.checked === false) {
        ids = ids.filter((el) => el !== id);
    }

}
remov.addEventListener("click", function () {
    card = card.filter((el) => !ids.includes(el.id));
    localStorage.setItem('cart', JSON.stringify(card))
    showProducts(homCards, card)
    badge.textContent = card.length
})

allCheck.addEventListener("click", function (e) {
    if (allCheck.checked) {
        for (let el of checks) {
            el.checked = true;
        }
        card.map((el) => {
            ids.push(el.id);
        })
    } else if (allCheck.checked === false) {
        ids = [];

        for (let el of checks) {
            el.checked = false;
        }
    }

})
// **check inp end */

