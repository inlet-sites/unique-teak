<script>
    import "../../global.css";

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
                tags = sortByTag(response);
                products = tags.all;
            }
        })
        .catch((err)=>{
            console.error(err);
        });
</script>

<div class="container">
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
            <h2>{product.name}</h2>
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

    .container h1{
        font-size: 38px;
        margin-bottom: 35px;
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
    }

    .tag:hover{
        background: rgb(235, 235, 235);
    }

    .tag.active{
        border-bottom: 2px solid red;
    }
</style>
