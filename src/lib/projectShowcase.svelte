<script lang="ts">
  import Button from './button.svelte';
  type sliderData = {
    image: string;
    technologies: string[];
    platforms: string[];
    name: string;
    description: string;
    sourceCodeLink: string;
    visitLink: string;
  };
  export let jsonData: sliderData[] = [];
</script>

<div class="showcase">
  {#each jsonData as data}
    <div class="text">
      <h1>{data.name}</h1>
      <p class="first">{data.description}</p>
      <p>Technologies: {data.technologies.join(', ')}</p>
      <p>Platforms: {data.platforms.join(', ')}</p>
      <div class="buttons">
        {#if data.visitLink}
          <Button
            onClick={() => {
              window.location.href = data.visitLink;
            }}
            text="View"
          />
        {/if}
        {#if data.sourceCodeLink}
          <Button
            onClick={() => {
              window.location.href = data.sourceCodeLink;
            }}
            text="Source Code"
          />
        {/if}
      </div>
    </div>
    <img src={data.image} alt="loading.." />
  {/each}
</div>

<style lang="scss">
  .text {
    max-width: 570px;
  }

  .showcase {
    display: grid;
    grid-template-columns: 500px 600px;
    align-items: center;
    row-gap: 200px;
    column-gap: 100px;
  }

  .showcase img {
    max-height: 380px;
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: start;
    column-gap: 20px;
    height: fit-content;
  }

  .first {
    margin-bottom: 2rem;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    border: 1px solid black;
  }

  p {
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
    color: #00adb5;
  }

  @media (max-width: 1300px) {
    .showcase {
      grid-template-columns: 1fr;
      row-gap: 100px;
    }

    img {
      margin-bottom: 100px;
    }
  }
</style>
