<script lang="ts">

  export let progress = 0;
  export let min = '';
  export let max = '';
  export let foreground = '';
  export let background = '';

  let percent = 0;
  $: percent = Math.trunc(progress * 100);

  function progressBarStyle(): string {
    let s = '';

    if(background)
      s += `--progress-background:${background};`;

    return s;
  }

  function progressStyle(): string {
    let s = `--progress-percent:${percent}%;`;

    if(foreground)
      s += `--progress-foreground:${foreground};`;

    return s;
  }
</script>

<div class="progress-wrapper">
  {#if min}
    <span class="min">
      {min}
    </span>
  {/if}

  <div class="progress-bar" style={progressBarStyle()}>
    <div class="progress" style={progressStyle()}></div>
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
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        column-gap: .5rem;
    }

  .progress-bar {
      --progress-background: crimson;

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
      --progress-foreground: yellowgreen;

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
  }
</style>