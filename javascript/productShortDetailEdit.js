import {products1, products2} from '../data/products.js'

const updateProduct = (products, code) => {
    products.map((item, index) => {
        const name = document.getElementById(`pName${code}${index + 1}`);
        const detail = document.getElementById(`pDetail${code}${index + 1}`);
        const prices = document.getElementById(`pPrices${code}${index + 1}`);
        const imgSrc = document.getElementById(`pImg${code}${index + 1}`);

        if (name) name.innerHTML = item.name;
        if (detail) detail.innerHTML = item.detail;
        if (prices) prices.innerHTML = item.prices;
        if (imgSrc) imgSrc.src = item.imgSrc;
    })
}

document.addEventListener('DOMContentLoaded', () => {
    updateProduct(products1, "");
    updateProduct(products2, "-mw");
})
