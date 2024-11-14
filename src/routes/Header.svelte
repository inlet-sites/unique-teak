<script>
    import background from "$lib/background.webp";
    import headboard from "$lib/headboard.png";
</script>

<header>
    <img class="headerBackground" src={background} alt="Teak Wood pattern">
    <h1>Unique Teak Creations</h1>
    <img class="headerImage" src={headboard} alt="Teak headboard">
    <div>
        <h2>300 - 500 year old, Grade A, Teak Furniture</h2>
        <h2>Beautifully Handcrafted by Skilled Artisans</h2>
    </div>
</header>

<style>
    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100vh;
        width: 100vw;
        color: rgb(225, 225, 225);
    }

    .headerBackground{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        filter: brightness(50%);
    }

    header h1{
        font-size: 55px;
    }

    .headerImage{
        height: 50%;
        margin: 35px 0;
    }
</style>
