<script>
    import Section from './Section.svelte';
    let strengths = [
        "Adaptability",
        "Communication",
        "Desire to Learn",
        "Enthusiasm",
        "Financial Analysis",
        "Logical Thinking",
        "Method Optimization",
        "Motivated",
        "Problem Solving",
        "Parallel Processes"
    ];
</script>

<Section title="Strengths">
    <div class="grid grid-cols-2 gap-1">
    {#each strengths as strength}
    <div class="text-sm print:text-xs">{strength}</div>
    {/each}    
</div>
</Section>