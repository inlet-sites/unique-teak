<script>
    import smallBench from "$lib/smallBench.webp";
    import leaf from "$lib/leaf.webp";
</script>

<div class="Content">
    <div class="contentItem first">
        <img src={smallBench} alt="Small teak bench">
        <p>Velit senectus tristique, proin sem pellentesque aptent. Donec posuere porttitor, vivamus orci, diam dictum massa aliquam litora rutrum. Lorem vivamus proin malesuada, sodales ut ad, euismod consectetur habitasse placerat fusce imperdiet a dictumst.</p>
    </div>

    <div class="contentItem second">
        <img src={leaf} alt="Leaf design from teak">
        <p>Sodales in semper, feugiat porttitor, congue elementum id nulla dictum. Semper nostra eget lectus, proin senectus lacus, bibendum fringilla viverra quisque gravida odio hendrerit.</p>
    </div>
</div>

<style>
    .contentItem{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        height: 100vh;
        width: 100%;
    }

    .contentItem img{
        height: 50%;
        border-radius: 15%;
    }

    .contentItem p{
        max-width: 500px;
        font-size: 28px;
        line-height: 45px;
        text-align: justify;
        color: rgb(215, 215, 215);
    }

    .first{
        background-image: url("/bench.webp");
    }

    .second{
        background-image: url("/sculptures.webp");
        flex-direction: row-reverse;
    }
</style>
