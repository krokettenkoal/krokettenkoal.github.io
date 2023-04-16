<script lang="ts">
  import { highscore } from "$lib/quiz/Highscore";
  import Modal from "$lib/components/Modal.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import ChartBellCurveCumulative from 'svelte-material-icons/ChartBellCurveCumulative.svelte';

  export let openStats: () => void;
  export let closeStats: (any?) => void;
</script>

<button class="player-level" title="Level: {$highscore.level}&#13;Score: {$highscore.total}&#13;XP: {$highscore.expPercent}%" on:click={openStats}>
  <span class="label">
    Level
  </span>
  <span class="level-badge" style="--exp: {$highscore.expPercent}%">
    {$highscore.level}
  </span>
</button>

<Modal bind:showModal={openStats} bind:closeModal={closeStats}>
  <span slot="title">
      <span class="stats-title">
        <ChartBellCurveCumulative size="2rem" />
        Player stats
      </span>
  </span>

  <div slot="content" class="stats">
    <p class="h1 level">Level {$highscore.level}</p>
    <p class="exp">
      XP
    </p>
      <ProgressBar
        progress={$highscore.exp}
        min={$highscore.pointsForCurrentLevel.toString()}
        max={$highscore.pointsForNextLevel.toString()}
        background="var(--main-bg-col)"
        foreground="var(--accent-col)"
      />
    <p class="score">{$highscore.total}</p>
  </div>
</Modal>

<style>
  .player-level {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      column-gap: .5rem;
      background-color: transparent;
      color: var(--main-text-col);
      border: none;
      cursor: pointer;
  }

  .label {
      font-size: .8rem;
      text-transform: uppercase;
      color: var(--secondary-text-col);
  }

  .level-badge {
      font-size: 1rem;
      font-weight: bold;
      background-color: var(--accent-col);
      background-image: linear-gradient(0deg, #23A4A8 calc(var(--exp, 0) - 5%), var(--accent-col-shade) calc(var(--exp, 0) + 5%));
      border-radius: 100%;
      width: 3ch;
      height: 3ch;
      display: flex;
      color: var(--main-bg-col);
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      letter-spacing: 0;

      transition: background 1s ease-out;
  }

  .stats-title {
      font-family: var(--font-heading);
      text-transform: uppercase;
      font-size: 2rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      gap: .7rem;
  }

  @media screen and (max-width: 768px) {
      .stats-title {
          font-size: 1.5rem;
      }
  }

  .stats p {
      text-align: center;
      margin-bottom: .5rem;
      font-size: 1.5rem;
      font-weight: bold;
  }

  .stats .level {
      font-size: 5rem;
      text-transform: uppercase;
      margin: 2.5rem 0;
  }

  @media screen and (max-width: 768px) {
      .stats .level {
          font-size: 3rem;
      }
  }

  .stats .exp,
  .stats .score {
      font-weight: normal;
      font-size: 1.2rem;
  }

  .stats .score {
      margin-top: .25rem;
  }

  .stats .exp {
      font-style: italic;
      color: var(--secondary-text-col);
  }
</style>