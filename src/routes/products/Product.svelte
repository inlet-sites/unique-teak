<script>
    let {product} = $props();
</script>

<div class="Product">
    <img
        src="https://api.inlet.shop/document/{product.images[0]}"
        alt={product.name}
    >
    <p class="name">{product.name}</p>
    <p>${(product.price / 100).toFixed(2)}</p>
</div>

<style>
    .Product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 250px;
        height: 250px;
        margin: 25px;
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
