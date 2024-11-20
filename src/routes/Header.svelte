<script>
    import background from "$lib/background.webp";
    import heronHero from "$lib/heronHero.png";
    import dolphinHero from "$lib/dolphinHero.png";
</script>

<header>
    <div class="menu">
        <a href="/products">Products</a>
        <a href="/gallery">Gallery</a>
    </div>

    <img class="headerBackground" src={background} alt="Teak Wood pattern">
    <h1>Unique Teak Creations</h1>
    <div class="headerImages">
        <img class="mobileHide" src={heronHero} alt="Teak hero sculpture">
        <img src={dolphinHero} alt="Teak dolphin sculpture">
    </div>
    <div class="subtext">
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

    .menu{
        position: absolute;
        top: 0;
        left: 0;
    }

    .menu a{
        display: flex;
        font-size: 28px;
        background: rgba(0, 0, 0, 0.5);
        padding: 15px 0 15px 5px;
        width: 150px;
        color: rgb(150, 150, 150, 0.75);
        text-decoration: none;
        transition: padding-left 0.3s, width 0.3s;
    }

    .menu a:hover{
        padding-left: 20px;
        width: 165px;
        color: rgba(225, 225, 225, 0.75);
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
        text-align: center;
    }

    header h2{
        text-align: center;
        margin-top: 35px;
    }

    .headerImages{
        display: flex;
        justify-content: space-around;
        height: 50%;
        width: 50%;
        margin: 35px 0;
    }

    .headerImages img{
        height: 100%;
    }

    @media screen and (max-width: 700px){
        .menu{
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .menu a{
            display: flex;
            justify-content: center;
        }

        .mobileHide{
            display: none;
        }
    }

    @media screen and (max-width: 500px){
        header h1{
            font-size: 32px;
        }

        header h2{
            font-size: 22px;
            width: 95%;
            margin-top: 15px;
        }
    }
</style>
