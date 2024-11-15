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
            <img src={smallBench} alt="Small teak bench">
            <p>Velit senectus tristique, proin sem pellentesque aptent. Donec posuere porttitor, vivamus orci, diam dictum massa aliquam litora rutrum. Lorem vivamus proin malesuada, sodales ut ad, euismod consectetur habitasse placerat fusce imperdiet a dictumst.</p>
        </div>

        <div></div>

        <div class="storyItem storyReverse">
            <img src={crab} alt="Teak crab in front of water">
            <p>Lobortis dictumst eu, rhoncus vulputate, eleifend potenti magna pharetra enim. Quis mollis, inceptos ligula ipsum. Quisque himenaeos, nec netus sociosqu.</p>
        </div>
    </div>

    <div class="contentItem second">
        <div></div>

        <div class="storyItem">
            <img src={leaf} alt="Leaf design from teak">
            <p>Sodales in semper, feugiat porttitor, congue elementum id nulla dictum. Semper nostra eget lectus, proin senectus lacus, bibendum fringilla viverra quisque gravida odio hendrerit.</p>
        </div>

        <div></div>
    </div>

    <div class="contentItem third">
        <div class="storyItem">
            <img src={platter} alt="Leaf shaped platter from teak">
            <p>Inceptos quisque quisque aenean, aliquam himenaeos ante, tristique porta dapibus ad sagittis vehicula in.</p>
        </div>

        <div></div>

        <div class="storyItem">
            <img src={stool} alt="Teak stool">
            <p>Cursus sapien blandit, scelerisque nam, rutrum euismod curabitur orci viverra sociosqu dui.</p>
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
        font-size: 22px;
        line-height: 40px;
        color: rgb(215, 215, 215);
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
