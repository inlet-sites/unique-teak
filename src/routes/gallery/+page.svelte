<script>
    import "../../global.css";
    let {data} = $props();
    let showAlbum = $state(null);
    let showPhoto = $state(null);

    const albumImage = (album)=>{
        return `${import.meta.env.VITE_APIURL}/document/${album.photos[0].file}`;
    }

    const photoString = (p)=>{
        return `${import.meta.env.VITE_APIURL}/document/${p.file}`;
    }

    const getDate = (d)=>{
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const date = new Date(d);
        return date.toLocaleDateString("en-US", options);
    }
</script>

<div class="container">
    <div class="menu">
        <a class="menuButton" href="/">Home</a>
        <a class="menuButton" href="/products">Products</a>
        {#if showAlbum}
            <button class="menuButton" onclick={()=>{showAlbum = null}}>Albums</button>
        {/if}
    </div>

    {#if showAlbum}
        {#if showPhoto}
            <div class="singlePhoto">
                <button
                    class="closePhoto"
                    onclick={()=>{showPhoto = null}}
                    aria-label="close"
                >
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </button>

                <img src={photoString(showPhoto)} alt={showPhoto.originalName}>
                <p class="date">{getDate(showPhoto.created)}</p>
                {#if showPhoto.description}
                    <p class="singlePhotoDesc">{showPhoto.description}</p>
                {/if}
            </div>
        {/if}

        <div class="singleAlbum">
            <h1>{showAlbum.name}</h1>
            <p class="date">Created: {getDate(showAlbum.created)}</p>
            <p class="date">Last Updated: {getDate(showAlbum.lastUpdated)}</p>
            <p class="albumDescription">{showAlbum.description}</p>

            <div class="photos">
                {#each showAlbum.photos as photo}
                    <button onclick={()=>{showPhoto = photo}} aria-label={photo.originalName}>
                        <img 
                            src={photoString(photo)}
                            alt={photo.originalName}
                            loading="lazy"
                        >
                    </button>
                {/each}
            </div>
        </div>
    {:else}
        <div class="albums">
            {#each data.albums as album}
                {#if album.photos.length > 0}
                    <button class="album" onclick={()=>{showAlbum = album}}>
                        <img src={albumImage(album)} alt={album.description}>
                        <p class="albumName">{album.name}</p>
                    </button>
                {/if}
            {/each}
        </div>
    {/if}
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
        z-index: 10;
    }

    .menuButton{
        display: flex;
        font-size: 28px;
        background: rgba(0, 0, 0, 0.5);
        padding: 15px 0 15px 15px;
        width: 150px;
        color: rgba(150, 150, 150, 0.75);
        text-decoration: none;
        transition: padding-left 0.3s, width 0.3s;
        border: none;
        cursor: pointer;
    }

    .menuButton:hover{
        padding-left: 20px;
        width: 165px;
        color: rgba(225, 225, 225, 0.75);
    }

    .singleAlbum{
        margin: 35px 35px 35px 175px;
    }

    .albumDescription{
        font-size: 22px;
        margin-bottom: 35px;
    }

    .photos{
        display: flex;
        flex-wrap: wrap;
    }

    .photos button{
        height: 250px;
        background: none;
        border: none;
        margin: 15px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
        border: 1px solid brown;
        border-radius: 10px;
    }

    .photos img{
        height: 100%;
        border-radius: 10px;
    }

    .singlePhoto{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(10px);
        z-index: 11;
    }

    .singlePhoto img{
        max-height: 85%;
        max-width: 85%;
    }

    .singlePhoto .date{
        position: absolute;
        top: 35px;
        left: 35px;
        color: white;
    }

    .singlePhotoDesc{
        max-height: 200px;
        max-width: 75%;
        background: rgb(225, 225, 225);
        overflow-y: auto;
        padding: 15px;
        margin: 0 35px;
        border-radius: 15px;
        text-align: center;
    }

    .closePhoto{
        position: absolute;
        top: 35px;
        right: 35px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .albums{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        height: 100%;
        width: 75%;
        margin: 35px auto 0 175px;
    }

    .album{
        display: flex;
        margin: 35px 10px 35px 10px;
        background: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 270px;
        position: relative;
    }

    .date{
        font-size: 14px;
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

        .album{
            flex-direction: column;
            height: initial;
            width: 200px;
        }

        .album img{
            height: initial;
            width: 100%;
        }

        .album .albumName{
            position: static;
            height: initial;
            padding: 5px;
        }
    }
</style>
