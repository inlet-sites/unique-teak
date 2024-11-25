<script>
    import smallBench from "$lib/smallBench.webp";
    import leaf from "$lib/leaf.webp";
    import crab from "$lib/crab.webp";
    import platter from "$lib/platter.webp";
    import stool from "$lib/stool.webp";
</script>

<div class="Content">
    <div class="contentItem first">
        <div class="storyItem">
            <img src={smallBench} alt="Small teak bench" loading="lazy">
            <p>Bojonegoro is one of the names of the regions on the island of Java, Indonesia which has the best quality teak wood in the world</p>
        </div>

        <div></div>

        <div class="storyItem storyReverse">
            <img src={crab} alt="Teak crab in front of water" loading="lazy">
            <p>In the past, during the Dutch colonization of Indonesia, they made ships from teak wood, because it has been proven to be the strongest of all woods</p>
        </div>
    </div>

    <div class="contentItem second">
        <div></div>

        <div class="storyItem">
            <img src={leaf} alt="Leaf design from teak" loading="lazy">
            <p>The remnants of teak logging left behind teak roots that are now more than 500 years old and still remain in the ground</p>
        </div>

        <div></div>
    </div>

    <div class="contentItem third">
        <div class="storyItem">
            <img src={platter} alt="Leaf shaped platter from teak" loading="lazy">
            <p>Previously, teak roots were considered rubbish, but with the expertise of local residents, this rubbish was turned into something very valuable, namely teak wood crafts in the form of statues and carvings</p>
        </div>

        <div></div>

        <div class="storyItem">
            <img src={stool} alt="Teak stool" loading="lazy">
            <p>All of our teak wood furniture & carvings are of the highest grade</p>
        </div>
    </div>
</div>

<style>
    .contentItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        height: 100vh;
        width: 100%;
    }

    .contentItem > *{
        flex-basis: 100px;
        flex-grow: 1;
    }

    .storyItem{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        background: rgba(0, 0, 0, 0.75);
    }

    .storyItem img{
        height: 250px;
        border-radius: 50%;
        border: 2px solid white;
    }

    .storyItem p{
        max-width: 50%;
        font-size: 28px;
        line-height: 65px;
        color: rgb(215, 215, 215);
        text-align: center;
    }

    .storyReverse{
        flex-direction: row-reverse;
    }

    .first{
        background-image: url("/bench.webp");
    }

    .second{
        background-image: url("/sculptures.webp");
    }

    .third{
        background-image: url("/shop.webp");
    }

    @media screen and (max-width: 700px){
        .storyItem{
            flex-direction: column;
        } 

        .storyItem img{
            height: 175px;
        }

        .storyItem p{
            max-width: initial;
            text-align: justify;
            padding: 0 5px;
            font-size: 18px;
            line-height: 24px;
        }
    }
</style>
