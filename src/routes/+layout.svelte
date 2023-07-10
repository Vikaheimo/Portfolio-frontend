<script lang="ts">
    import Navbar from '../lib/navbar.svelte';
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</svelte:head>

<Navbar />
<main>
    <slot />
</main>

<style>
    /* https://colorhunt.co/palette/222831393e4600adb5eeeeee */

    :global(*),
    :global(*::before),
    :global(*::after) {
        margin: 0;
        box-sizing: border-box;
    }

    :global(html),
    :global(body) {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }

    :global(img),
    :global(picture),
    :global(video),
    :global(canvas),
    :global(svg) {
        display: block;
        max-width: 100%;
    }

    :global(input),
    :global(button),
    :global(textarea),
    :global(select) {
        font: inherit;
    }

    :global(p),
    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
        overflow-wrap: break-word;
    }

    :global(body) {
        background-color: #393e46;
        background-image: linear-gradient(
            to right bottom,
            #00adb5,
            #2197a8,
            #338196,
            #3c6b80,
            #3f5768,
            #3c4c5b,
            #38424e,
            #333841,
            #2f343d,
            #2a3039,
            #262c35,
            #222831
        );
        color: #eeeeee;
        min-height: 100vh;
    }

    main {
        min-height: 100vh;
        display: grid;
        align-items: center;
    }
</style>
