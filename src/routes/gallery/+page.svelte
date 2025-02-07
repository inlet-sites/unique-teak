<script>
    import "../../global.css";
    let {data} = $props();

    const albumImage = (album)=>{
        return `${import.meta.env.VITE_APIURL}/document/${album.photos[0].file}`;
    }
</script>

<div class="container">
    <div class="menu">
        <a href="/">Home</a>
        <a href="/products">Products</a>
    </div>

    <div class="albums">
        {#each data.albums as album}
            {#if album.photos.length > 0}
                <button class="album">
                    <img src={albumImage(album)} alt={album.description}>
                    <p class="albumName">{album.name}</p>
                </button>
            {/if}
        {/each}
    </div>
</div>

<style>
    .container{
        height: 100vh;
        width: 100vw;
        position: relative;
        background: rgb(200, 200, 200);
        overflow-y: auto;
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
        padding: 15px 0 15px 15px;
        width: 150px;
        color: rgba(150, 150, 150, 0.75);
        text-decoration: none;
        transition: padding-left 0.3s, width 0.3s;
    }

    .menu a:hover{
        padding-left: 20px;
        width: 165px;
        color: rgba(225, 225, 225, 0.75);
    }

    h1{
        font-size: 38px;
    }

    .albums{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 100%;
        width: 75%;
        margin: 35px auto 0 150px;
    }

    .album{
        display: flex;
        margin: 35px 10px 35px 10px;
        background: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 0 100px gray;
        border-radius: 10px;
        height: 270px;
        position: relative;
    }

    .album img{
        height: 200px;
        border-radius: 10px 10px 0 0;
    }

    .album p{
        font-size: 22px;
        text-align: left;
        padding: 0 5px 0 5px;
        position: absolute;
        bottom: 0;
        left: 5px;
        height: 70px;
        overflow: hidden;
    }

    @media screen and (max-width: 750px){
        .menu{
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        .menu a{
            justify-content: center;
            color: rgba(235, 235, 235, 0.75);
        }

        .albums{
            margin: 45px auto;
            justify-content: center;
        }
    }
</style>
