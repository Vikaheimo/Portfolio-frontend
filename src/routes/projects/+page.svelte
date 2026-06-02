<script lang="ts">
    import Imageslider from '../../lib/projectShowcase.svelte';
    import projects from '../../lib/static/projects.json';

</script>

<div class="flex">
    <Imageslider {projects} />
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
