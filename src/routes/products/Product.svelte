<script>
    let {product} = $props();
</script>

<a href="https://inlet.shop/utc/{product.id}" class="Product" target="_blank">
    <img
        src="https://api.inlet.shop/document/{product.images[0]}"
        alt={product.name}
    >
    <p class="name">{product.name}</p>
    <p>${(product.price / 100).toFixed(2)}</p>
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
