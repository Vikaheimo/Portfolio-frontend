<div class="outer">
    <div>
        <h1>Vili Ikäheimo</h1>
        <p class="infotext">Software Developer</p>
    </div>
    <p class="longtext">
        Starting Software developer passionate about developing in Rust.
        Knowledgeable in front-end, back-end, debugging and security.
        Experience in many technologies, including React, Node, Express, MongoDB and gRPC.
    </p>
    <div class="socials">
        <a href="https://www.linkedin.com/in/vili-ikaheimo/" class="fa fa-linkedin-square linkedin"> </a>
        <a href="https://twitter.com/VIkaheim" class="fa fa-twitter twitter"> </a>
        <a href="https://github.com/Vikaheimo" class="fa fa-github github"> </a>
        <a href="mailto:vili.vikaheim@gmail.com" class="fa fa-envelope email"> </a>
    </div>
    <img src={"images/avatar.jpg"} alt="loading.." >
</div>


<style lang="scss">
    .outer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
    }

    h1 {
        color: #00ADB5;
        font-size: 4rem;
        text-align: center;
    }

    .infotext {
        font-size: 2rem;
        text-align: center;
    }

    .longtext {
        margin-top: 2rem;
        font-size: 2rem;
        text-align: center;
        max-width: 1000px;
    }

    .socials {
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
        width: 360px;
    }

    img {
        margin-top: 4rem;
        max-height: 300px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        object-fit: cover;
    }

    a {
        text-decoration: none;
        font-size: 36px;
        color: #00ADB5;
    }

    .linkedin {
        color: #0077B5;
    }

    .twitter {
        color: #1DA1F2;
    }

    .github {
        color: white;
    }

    .email {
        color: #B94700;
    }
</style>