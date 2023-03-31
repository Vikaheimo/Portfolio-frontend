<script lang="ts">
    import Button from "./button.svelte";
    type sliderData = {image: string, technologies: string[], platforms: string[], 
        name: string, description: string, sourceCodeLink: string, visitLink: string};
    export let data: sliderData;
</script>

<div class="showcase">
    <div class="text">
        <h1>{data.name}</h1>
        <p class="first">{data.description}</p>
        <p>Technologies: {data.technologies.join(", ")}</p>
        <p>Platforms: {data.platforms.join(", ")}</p>
        <div class="buttons">
            {#if data.visitLink}
                <Button onClick={()=> {window.location.href = data.visitLink}} text="View"/>
            {/if}
            {#if data.sourceCodeLink}
                <Button onClick={()=> {window.location.href = data.sourceCodeLink}} text="Source Code"/>
            {/if}
        </div>
    </div>
    <img src={data.image} alt="loading.." >
</div>

<style lang="scss">
    .text {
        max-width: 570px;
    }

    .showcase {
        display: flex;
        flex-shrink: 1;
        row-gap: 50px;
        column-gap: 20px;
        flex-wrap: wrap;
        max-height: fit-content;
    }

    .showcase img {
        max-height: 380px;
    }

    .buttons {
        margin-top: 2rem;
        display: flex;
        justify-content: start;
        column-gap: 20px;
        height: fit-content;
    }

    .first {
        margin-bottom: 2rem;
    }

    img {
        display: block;
        max-width:100%px;
        max-height:100%;
        width: auto;
        height: auto;
    }

    p {
        font-size: 2rem;
    }

    h1 {
        font-size: 3rem;
        color: #00ADB5;
    }
</style>