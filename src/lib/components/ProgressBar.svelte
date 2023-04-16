<script lang="ts">

  export let progress = 0;
  export let min = '';
  export let max = '';
  export let foreground = '';
  export let background = '';

  let percent = 0;
  $: percent = Math.trunc(progress * 100);

  function progressStyle(p: number): string {
    let s = `--progress-percent:${p}%;`;

    if(background)
      s += `--progress-background:${background};`;

    if(foreground)
      s += `--progress-foreground:${foreground};`;

    return s;
  }
</script>

<div class="progress-wrapper" style={progressStyle(percent)}>
  {#if min}
    <span class="min">
      {min}
    </span>
  {/if}

  <div class="progress-bar">
    <div class="progress"></div>
    <div class="percent">{percent}%</div>
  </div>

  {#if max}
    <span class="max">
      {max}
    </span>
  {/if}
</div>

<style>
    .progress-wrapper {
      --progress-background: crimson;
      --progress-foreground: yellowgreen;

      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      column-gap: .5rem;
    }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 2rem;
    background-color: var(--progress-background);
    border-radius: .7rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    overflow: clip;
  }

  .progress {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: var(--progress-foreground);
    z-index: 0;

    transition: width 1s ease-out;
    animation: 1s ease-out forwards progress-track;
  }

  .min, .max {
    font-size: 1rem;
    color: var(--secondary-text-col);
    font-style: italic;
  }

  @keyframes progress-track {
    from {
      width: 0;
    }

    to {
      width: var(--progress-percent, 0);
    }
  }

  .percent {
    color: var(--main-bg-col);
    font-size: 1rem;
    font-weight: bold;
    z-index: 1;
    text-shadow: 0 0 0 var(--progress-foreground);
  }
</style>