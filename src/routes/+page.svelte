<script lang="ts">
    import Button from '../lib/button.svelte';

    const setPage = (page: string) => {
        document.location.href = page;
    };
</script>

<div class="flex">
    <div class="box">
        <h1>
            Hello there, I'm <a href="https://www.linkedin.com/in/vili-ikaheimo/">Vili Ikäheimo</a>.
        </h1>
        <h1>I am a software developer!</h1>
        <div class="buttons">
            <Button text={'About me'} onClick={() => setPage('/about')} />
            <Button text={'Projects'} onClick={() => setPage('/projects')} />
        </div>
    </div>
</div>

<style>
    .flex {
        display: flex;
        align-self: center;
        justify-content: center;
    }

    .box {
        margin: 2rem;
    }
    .buttons {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    h1 {
        text-align: start;
        font-size: 3rem;
        height: fit-content;
        line-height: 3rem;
        font-family: monospace;
    }

    a {
        text-decoration: none;
        color: #00adb5;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 1.5rem;
            line-height: 1.5rem;
        }
    }
</style>
