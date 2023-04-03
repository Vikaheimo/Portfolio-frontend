<script lang="ts">
    import { onMount } from 'svelte';
    import Imageslider from "../../lib/projectShowcase.svelte";
    type sliderData = {image: string, technologies: string[], platforms: string[], 
        name: string, description: string, sourceCodeLink: string, visitLink: string};
    let jsonData: sliderData[];

    onMount(async () => {
        const currentURL = window.location.origin;
        fetch(currentURL + "/projects.json")
            .then((response) => response.json())
            .then((data) => { jsonData = data})
    })
    

</script>

<div class="center">
    <div class="flex">
        <div class="text">Here you can find some of projects that I've worked on.</div>
        <Imageslider jsonData={jsonData}/>
    </div>
</div>

<style lang="scss">
    .center {   
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 50px;
    }

    .text {
        font-size: 3rem;
        text-align: center;
    }

    .flex {
        margin: 2rem;
        display: flex;
        flex-direction: column;
        row-gap: 10rem;
        align-items: center;
        justify-content: center;
    }

</style>