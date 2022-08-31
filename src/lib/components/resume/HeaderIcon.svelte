<script>
    export let text;
    export let glyph;
</script>

<div class="flex items-center gap-4 justify-end">
    <div>{text}</div>
    <div class="w-8">
        <svelte:component this={glyph} />
    </div>
</div>