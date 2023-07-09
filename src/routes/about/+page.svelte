<div class="center">
    <div class="outer">
        <div class="main">
            <h1>Vili Ikäheimo</h1>
            <p class="longtext">
                Starting Software developer passionate about developing in Rust. Knowledgeable in
                front-end, back-end, debugging and security. Experience in many technologies,
                including React, Node, Express and MongoDB.
            </p>
            <div class="socials">
                <!-- svelte-ignore a11y-missing-content -->
                <a
                    href="https://www.linkedin.com/in/vili-ikaheimo/"
                    class="fa fa-linkedin-square linkedin"
                />
                <!-- svelte-ignore a11y-missing-content -->
                <a href="https://twitter.com/VIkaheim" class="fa fa-twitter twitter" />
                <!-- svelte-ignore a11y-missing-content -->
                <a href="https://github.com/Vikaheimo" class="fa fa-github github" />
                <!-- svelte-ignore a11y-missing-content -->
                <a href="mailto:vili.vikaheim@gmail.com" class="fa fa-envelope email" />
            </div>
        </div>
        <img src={'images/avatar.jpg'} alt="loading.." />
    </div>
</div>

<style lang="scss">
    .center {
        min-height: 100vh;
        display: grid;
        align-items: center;
    }

    .outer {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: min(7rem, 10vw);
        flex-wrap: wrap;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }

    .longtext {
        max-width: 500px;
        text-align: center;
    }

    .socials {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        column-gap: 2rem;
        flex-wrap: wrap;
    }

    img {
        height: min(300px, 80vw);
        width: min(300px, 80vw);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        object-fit: contain;
    }

    a {
        text-decoration: none;
        font-size: 36px;
    }

    .linkedin {
        color: #0077b5;
    }

    .twitter {
        color: #1da1f2;
    }

    .github {
        color: white;
    }

    .email {
        color: #b94700;
    }
</style>
