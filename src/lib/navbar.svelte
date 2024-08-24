<script lang="ts">
    import { page } from '$app/stores';

    let current_page: string;
    page.subscribe((data) => {
        current_page = data.url.pathname;
    });
</script>

<header>
    <nav>
        <svg viewBox="0 0 2 3">
            <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
        </svg>
        <ul>
            <li>
                <a href="/" class={current_page === '/' ? 'current' : undefined}>home</a>
            </li>

            <li>
                <a href="/about" class={current_page === '/about' ? 'current' : undefined}>about</a>
            </li>

            <li>
                <a href="/projects" class={current_page === '/projects' ? 'current' : undefined}
                    >projects</a
                >
            </li>
        </ul>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
        </svg>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        width: 100vw;
        position: fixed;
        background-color: #222831;
        height: 0.5rem;
    }

    nav {
        position: fixed;
        top: -2rem;
        height: 3rem;
        display: flex;
        transition: top 0.5s linear;
    }

    nav:hover {
        top: 0;
    }

    svg {
        width: 2em;
        height: 3em;
        display: block;
    }

    path {
        fill: #222831;
    }

    ul {
        background-color: #222831;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        column-gap: 2rem;
        padding: 0;
    }

    li {
        height: 100%;
        display: grid;
        align-items: center;
    }

    .current {
        text-decoration: underline;
        text-decoration-color: #eeeeee;

        -webkit-text-decoration-color: #eeeeee;
        -moz-text-decoration-color: #eeeeee;
    }

    .current:hover {
        text-decoration-color: #00adb5;

        -webkit-text-decoration-color: red;
        -moz-text-decoration-color: red;
    }

    a {
        color: #eeeeee;
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: 0.5s;
    }

    a:hover {
        color: #00adb5;
    }

    @media (max-width: 1000px) {
        nav {
            top: 0;
        }
    }
</style>
