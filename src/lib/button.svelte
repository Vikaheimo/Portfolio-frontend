<script lang="ts">
    export let text: String;
    export let onClick: any;
</script>

<button class="button-arounder" on:click={onClick}>{text}</button>

<style>
    button {
        border: solid 2px black;
        padding: 0.375em 1.125em;
        font-size: 1rem;
        background: #00ADB5;
        color: #212121;
        width: fit-content;
        box-shadow: 0 0px 0px hsla(190deg, 15%, 5%, 0.2);
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        --dur: 0.15s;
        --delay: 0.15s;
        --radius: 16px;

        transition: border-top-left-radius var(--dur) var(--delay) ease-out,
            border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
            border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
            border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
            box-shadow calc(var(--dur) * 4) ease-out, transform calc(var(--dur) * 4) ease-out,
            background calc(var(--dur) * 4) steps(4, jump-end);
    }

    button:hover,
    button:focus {
        box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
        transform: translateY(-4px);
        background: hsl(230deg, 50%, 45%);
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
</style>
