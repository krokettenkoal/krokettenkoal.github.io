<script lang="ts">
  import { onDestroy, onMount, createEventDispatcher } from "svelte";
  import {mmss} from "../utils";

  export let time = -1;
  export let paused = true;

  let interval: number;
  const dispatch = createEventDispatcher();

  onMount(() => {
    interval = window.setInterval(updateTime, 1000);
  });

  onDestroy(() => {
    window.clearInterval(interval);
    interval = 0;
  });

  function updateTime(){
    if(paused)
      return;

    if(time <= 0) {
      paused = true;
      dispatch('end');
      return;
    }

    time--;
  }
</script>

<span>
  {mmss(time)}
</span>