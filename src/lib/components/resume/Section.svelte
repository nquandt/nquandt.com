<script>
    export let title;
    export let leftAlignTitle = false;

    let justify = "justify-center";
    if (leftAlignTitle){
        justify = "pl-2 justify-start"
    }
</script>

<div class="w-full flex flex-col">
    <div class="w-full flex {justify}">
        <div class="uppercase text-xl font-bold">{title}</div>
    </div>
    <hr />
    <div class="w-full flex flex-col px-2 gap-4 py-2">
        <slot/>
    </div>
</div>