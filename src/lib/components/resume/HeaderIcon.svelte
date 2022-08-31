<script>
    export let text;
    export let glyph;
</script>

<div class="flex items-center gap-4 justify-end">
    {#if text.startsWith("https://www.")}
    <a href={text} target="_blank"><div>{text.substring(12)}</div></a>
    {:else}
    <div>{text}</div>
    {/if}
    <div class="w-8 flex justify-center">
        <svelte:component this={glyph} />
    </div>
</div>