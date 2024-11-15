<script>
    import "../../global.css";
    import Product from "./Product.svelte";

    let products = $state([]);
    let tags = $state({});
    let activeTag = $state("all");

    const sortByTag = (data)=>{
        const tags = {};
        tags["all"] = [];
        for(let i = 0; i < data.length; i++){
            tags["all"].push(data[i]);
            for(let j = 0; j < data[i].tags.length; j++){
                let tag = data[i].tags[j].toLowerCase();
                if(tags[tag]){
                    tags[tag].push(data[i]);
                }else{
                    tags[tag] = [data[i]];
                }
            }
        }
        return tags;
    }

    const searchTags = (tag)=>{
        activeTag = tag;
        products = tags[tag];
    }

    fetch("https://api.inlet.shop/product/vendor/672cd710c3fa18c32ec1c18c", {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r=>r.json())
        .then((response)=>{
            if(response.error){
                console.error(error);
            }else{
                console.log(response);
                tags = sortByTag(response);
                products = tags.all;
            }
        })
        .catch((err)=>{
            console.error(err);
        });
</script>

<div class="container">
    <div class="menu">
        <a href="/">Home</a>
        <a href="/gallery">Gallery</a>
    </div>

    <h1>Unique Teak Creations</h1>

    <div class="tags">
        {#each Object.keys(tags) as tag}
            <button
                class="tag"
                class:active={tag === activeTag}
                onclick={()=>{searchTags(tag)}}
            >{tag.toUpperCase()}</button>
        {/each}
    </div>

    <div class="products">
        {#each products as product}
            <Product product={product}/>
        {/each}
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(200, 200, 200);
        min-height: 100vh;
        padding: 35px;
    }

    h1{
        font-size: 38px;
        margin-bottom: 35px;
        text-align: center;
    }

    .tags{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 75%;
        margin-bottom: 35px;
    }

    .tag{
        background: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border: 1px solid black;
        margin-right: -1px;
        margin: 1px -1px 5px 0;
    }

    .tag:hover{
        background: rgb(235, 235, 235);
    }

    .tag.active{
        border-bottom: 2px solid red;
    }

    .products{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
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

        h1{
            margin-top: 35px;
        }

        .tags{
            width: 95%;
        }
    }
</style>
