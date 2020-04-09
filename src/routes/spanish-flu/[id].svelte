<script context="module">
  export async function preload({ params, query }) {
    // the `id` parameter is available because
    // this file is called [id].svelte
    const res = await this.fetch(`spanish-flu/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return {
        room: data
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let room;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{room.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{room.title}</title>
</svelte:head>
<div class="grid-container">
  <div class="content">
    <h3>{room.title}</h3>
    <p>{room.text}</p>
    {#if room.images}
      {#each room.images as image}
        <picture>{image.media}</picture>
        <p>Rights: {image.rights}</p>
        <p>Rightsowner: {image.rightsowner}</p>
      {/each}
    {/if}
  </div>
  <div class="mute">Mute Button</div>
  <div class="map">Map Button</div>
  <div class="about">About Button</div>
  <div class="left">
    {#if room.left}
      <a rel="prefetch" href="spanish-flu/{room.left}">Left</a>
    {/if}
  </div>
  <div class="right">
    {#if room.right}
      <a rel="prefetch" href="spanish-flu/{room.right}">Right</a>
    {/if}
  </div>
  <div class="up">
    {#if room.up}
      <a rel="prefetch" href="spanish-flu/{room.up}">Up</a>
    {/if}
  </div>
  <div class="down">
    {#if room.down}
      <a rel="prefetch" href="spanish-flu/{room.down}">Down</a>
    {/if}
  </div>

</div>
