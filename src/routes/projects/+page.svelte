<script lang="ts">
    import { onMount } from 'svelte';
    import Imageslider from '../../lib/projectShowcase.svelte';
    type sliderData = {
        image: string;
        technologies: string[];
        platforms: string[];
        name: string;
        description: string;
        sourceCodeLink: string;
        visitLink: string;
    };
    let jsonData: sliderData[];

    onMount(async () => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => {
                jsonData = data;
            });
    });
</script>

<div class="flex">
    <Imageslider {jsonData} />
</div>

<style>
    .flex {
        margin: 5rem;
        display: flex;
        flex-direction: column;
        row-gap: 10rem;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 1000px) {
        .flex {
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            margin-bottom: 0;
        }
    }
</style>
