async function getProduts() {
    const myProduts = await fetch("https://dummyjson.com/products");
    const data = await myProduts.json();
    const products = data.products;

    const result = products.map(function(ele) {
            return `
    <div class="product">
    <p>${ele.title}</p>
    <img src=${ele.thumbnail}>
    <h2>${ele.price}</h2>
    </div>
    `;
        }).join("");

    document.querySelector(".cont").innerHTML = result;
}

getProduts();
