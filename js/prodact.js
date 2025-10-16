let path = new URLSearchParams(window.location.search);
let id = path.get("id");

let singleProduct = document.querySelector(".single-products");

let idProduct = products.filter((el) => el.id == id)

console.log(idProduct); 

