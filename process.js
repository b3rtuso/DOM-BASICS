const main = document.getElementById("main");
const section = main.firstElementChild;
const h2 = section.firstElementChild;
const div = h2.nextElementSibling;
const h3 = div.firstElementChild;
const p = h3.nextElementSibling;

const cart = document.getElementById("cart");
const divCart = div.firstElementChild;
const div2Cart = divCart.firstElementChild;
const div3Cart = divCart.nextElementSibling;
const Cartproduct = div3Cart.firstElementChild;


const products = Array.from(
  main.firstElementChild.firstElementChild.nextElementSibling.children
);

products.forEach((product) => {
  const button =
    product.firstElementChild.nextElementSibling.nextElementSibling
      .nextElementSibling.firstElementChild.nextElementSibling;
    const price = product.firstElementChild.nextElementSibling.nextElementSibling
      .nextElementSibling.textContent;
  button.addEventListener("click", () => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.innerHTML = price;
    div.appendChild(p);
    Cartproduct.appendChild(div);

    console.log(price);
  });
});

console.log(products);
