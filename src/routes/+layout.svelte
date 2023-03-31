<script lang="ts">
    import Navbar from "../lib/navbar.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<Navbar />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
    /* https://colorhunt.co/palette/222831393e4600adb5eeeeee */
    
    // CSS reset 
    :global(*),  :global(*::before), :global(*::after) {
        margin: 0;
        box-sizing: border-box;
        *, *::before, *::after {
            box-sizing: border-box;
        }

        * {
            margin: 0;
        }
    }

    :global(html), :global(body) {
        height: 100%;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }

    :global(img), :global(picture), :global(video), :global(canvas), :global(svg) {
        display: block;
        max-width: 100%;
    }

    :global(input), :global(button), :global(textarea), :global(select) {
        font: inherit;
    }

    :global(p), :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
        overflow-wrap: break-word;
    }
    // Custom backround color
    :global(body) {
        background-color: #393E46;
    }

    // Custom body
    :global(body), :global(html) {
        height: 100%;
        overflow: auto;
    }

    :global(body) {
        display: flex;
        flex-direction:column;
        min-height: 100%
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

	.navlinks {
		display: flex;
		justify-content: space-around;
	}
    main {
        color: #EEEEEE;
        height: 100vw;
    }
</style>
