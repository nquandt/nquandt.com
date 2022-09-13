import { crossfade } from 'svelte/transition';
import { fly } from 'svelte/transition';

const [send, receive] = crossfade({});

export { send, receive };
