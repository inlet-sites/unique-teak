<script>
    let {product} = $props();

    const maxPrice = (product)=>{
        let max = product.variations[0].price;
        for(let i = 1; i < product.variations.length; i++){
            if(product.variations[i].price > max) max = product.variations[i].price;
        }
        return max;
    }

    const minPrice = (product)=>{
        let min = product.variations[0].price;
        for(let i = 1; i < product.variations.length; i++){
            if(product.variations[i].price < min) min = product.variations[i].price;
        }
        return min;
    }

    const formatPrice = (num)=>{
        return (num / 100).toFixed(2);
    }
</script>

<a href="https://inlet.shop/utc/{product.id}" class="Product" target="_blank">
    <img
        src="https://api.inlet.shop/document/{product.images[0]}"
        alt={product.name}
    >
    <p class="name">{product.name}</p>
    {#if product.variations.length > 1}
        <p>
            ${formatPrice(minPrice(product))}
            -
            ${formatPrice(maxPrice(product))}
        </p>
    {:else}
        <p>${formatPrice(product.variations[0].price)}</p>
    {/if}
</a>

<style>
    .Product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 250px;
        height: 250px;
        margin: 25px;
        color: black;
        text-decoration: none;
    }

    img{
        width: 100%;
    }

    .name{
        font-size: 12px;
        font-weight: bold;
        margin: 5px 0;
    }
</style>
