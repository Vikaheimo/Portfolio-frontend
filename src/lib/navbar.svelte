<nav>
    <div class="title">Vikaheimo</div>
	<div class="navlinks">
		<ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
        </ul>
	</div>
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
    }

    a {
        text-decoration: none;
        color: white;
        padding: 1rem;
        display: block;
    }

    a:hover {
        background-color: #555;
    }
</style>
