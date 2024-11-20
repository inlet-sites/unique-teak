export const load = async ({fetch, params})=>{
    let products = await fetch("https://api.inlet.shop/product/vendor/673cded83318fd316bc1c18c", {
        method: "get",
        headers: {
            "Content-Type": "application"
        }
    });
    products = await products.json();

    return {products};
}
