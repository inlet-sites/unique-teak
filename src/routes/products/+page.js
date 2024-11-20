export const load = async ({fetch, params})=>{
    let products = await fetch("https://api.inlet.shop/product/vendor/672cd710c3fa18c32ec1c18c", {
        method: "get",
        headers: {
            "Content-Type": "application"
        }
    });
    products = await products.json();

    return {products};
}
