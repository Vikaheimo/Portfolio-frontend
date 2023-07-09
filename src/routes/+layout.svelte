<script lang="ts">
    import Navbar from '../lib/navbar.svelte';
    import Footer from '../lib/footer.svelte';
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
</svelte:head>
<div class="page-container">
    <div class="content-wrap">
        <Navbar />
        <main>
            <slot />
        </main>
    </div>
    <Footer />
</div>

<style lang="scss">
    /* https://colorhunt.co/palette/222831393e4600adb5eeeeee */

    // CSS reset
    :global(*),
    :global(*::before),
    :global(*::after) {
        margin: 0;
        box-sizing: border-box;
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        * {
            margin: 0;
        }
    }

    :global(html),
    :global(body) {
        height: 100%;
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
    // Custom backround color
    :global(body) {
        background-color: #393e46;
        max-height: fit;
        color: #eeeeee;
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    html {
        height: 100%;
    }
    .page-container {
        position: relative;
        min-height: 100%;
    }

    .content-wrap {
        padding-bottom: 2.5rem;
        min-height: 100vh;
    }

    main {
        min-height: calc(100vh - 2.5rem - 70px);
    }
</style>
