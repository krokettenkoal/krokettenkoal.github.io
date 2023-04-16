<script>
  import {tick} from "svelte";
  import { Confetti } from 'svelte-confetti';
  import Star from 'svelte-material-icons/Star.svelte';

  let active = false;

  async function showConfetti() {
    active = false;
    await tick();
    active = true;
  }
</script>

<button class="achievement" on:click={showConfetti}>
  <span class="content">
    <Star />
    <span class="label">
      <slot/>
    </span>
  </span>

  {#if active}
    <span class="confetti">
      <Confetti y={[-0.5, 0.5]} x={[-0.5, 0.5]} />
    </span>
  {/if}
</button>

<style>
  .achievement {
      position: relative;
      font-size: 1rem;
      padding: .25rem 1rem;
      background-color: var(--accent-col);
      border: none;
      border-radius: 1rem;
      font-weight: bold;
      cursor: pointer;
      color: var(--main-text-col);
  }

  .achievement .content {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      column-gap: .5rem;
  }

  .confetti {
      position: absolute;
      pointer-events: none;
      top: 50%;
      left: 50%;
  }
</style>