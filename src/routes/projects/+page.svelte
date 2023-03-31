<script lang="ts">
    import Imageslider from "../../lib/projectShowcase.svelte";
    let projectData ={
        image: "https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        name: "Kissa",
        description: "Kissa on kissa. Ei se siitä mihinkään muutu.",
        technologies: ["Kissa", "puu"],
        platforms: ["web"],
        sourceCodeLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
        visitLink: "visitLink"
    }
</script>

<div class="center">
    <div class="flex">
        <div class="text">Here you can find some of projects that I've worked on.</div>
        <Imageslider data={projectData}/>

        <Imageslider data={projectData}/>
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
        row-gap: 5rem;
        align-items: center;
        justify-content: center;
    }

</style>