<script>
    export let title;
    export let icon = null;
    export let leftAlignTitle = false;

    let justify = "justify-center";
    if (leftAlignTitle){
        justify = "px-2 justify-between"
    }
</script>

<div class="w-full flex flex-col">
    <div class="w-full flex fill-gray-400 {justify}">
        <div class="uppercase text-xl font-bold">{title}</div>
        {#if icon}
            <svelte:component this={icon} />
        {/if}
    </div>
    <hr />
    <div class="w-full flex flex-col px-2 gap-[12px] py-2">
        <slot/>
    </div>
</div>