<script lang="ts">

  export let progress = 0;

  let percent = 0;
  $: percent = Math.trunc(progress * 100);
</script>

<div class="progress-bar">
  <div class="progress" style="--progress-percent: {percent}%"></div>
  <div class="percent">{percent}%</div>
</div>

<style>
  .progress-bar {
      position: relative;
      width: 100%;
      height: 2rem;
      background-color: crimson;
      border-radius: .7rem;

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      overflow: clip;
  }

  .progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: yellowgreen;
      z-index: 0;

      transition: width 1s ease-out;
      animation: 1s ease-out forwards progress-track;
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