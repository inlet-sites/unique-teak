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
        align-items: center;
        justify-content: space-around;
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
        font-size: 45px;
    }

    .headerImage{
        height: 75%;
    }
</style>
