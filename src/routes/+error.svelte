<script lang="ts">
    import Button from '$lib/button.svelte';

    const buttonOnClick = () => {
        window.location.href = '/';
    };
</script>

<div class="flex">
    <div class="box">
        <h1>The page you were searching for doesn't exist.</h1>
        <Button text="Back to homepage" onClick={buttonOnClick} />
    </div>
</div>

<style>
    .flex {
        display: flex;
        align-self: center;
        justify-content: center;
    }
    .box {
        display: flex;
        row-gap: 1rem;
        flex-direction: column;
        align-items: center;
    }
</style>
