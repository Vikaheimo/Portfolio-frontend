<script lang="ts">
    import { onMount } from 'svelte';
    let navlinks: Element;
    let togglebuton: Element;

    onMount(() => {
        navlinks = document.getElementsByClassName("navlinks")[0];
        togglebuton = document.getElementsByClassName("toggle-button")[0];

        navlinks.classList.toggle("active");
        togglebuton.classList.toggle("active");
    })

    const navtoggle = () => {
        console.log(navlinks)
        navlinks.classList.toggle("active");
        togglebuton.classList.toggle("active");
        console.log(togglebuton)
    }
</script>

<nav>
    <div class="title">Vikaheimo</div>
	<div class="navlinks active">
		<ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
	</div>
    <a href="#" class="toggle-button active" on:click={navtoggle}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #222831;
        color: white;
    }

    .title {
        margin: .5rem;
        font-size: 1.5rem;
        padding-left: 50px;
    }

    .navlinks {
        margin-right: 100px;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
    }

    li {
        list-style-type: none;
        a {
            text-decoration: none;
            color: white;
            padding: 1rem;
            display: block;
        }

        a:hover {
            background-color: #555;
        }
    }


    .toggle-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
    }

    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }
    @media (max-width: 500px) {
        nav {
            flex-direction: column;
            align-items: flex-start;

            ul {
                width: 100%;
                flex-direction: column;
            }
        }

        .navlinks {
            display: none;
            width: 100%;
        }

        .toggle-button {
            display: flex;
        }

        li {
            text-align: center;
        }

        .navlinks a {
            padding: .5rem 1rem;
        }

        .navlinks.active {
            display: flex;
        }

        .toggle-button.active {
            position: relative;
            left: calc(50% - 20px);
            top: 0;
            margin-bottom: 5px;
        }
    }
</style>
