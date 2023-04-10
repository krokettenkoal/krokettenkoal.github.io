<script lang="ts">
  import {highscore} from "$lib/quiz/Highscore";
</script>

<article class="player-level" title="Level: {$highscore.level}&#13;XP: {$highscore.expPercent}%">
  <span class="label">
    Level
  </span>
  <span class="level" style="--exp: {$highscore.expPercent}%">
    {$highscore.level}
  </span>
</article>

<style>
  .player-level {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      column-gap: .5rem;
  }

  .label {
      font-size: .8rem;
      text-transform: uppercase;
      color: var(--secondary-text-col);
  }

  .level {
      font-size: 1rem;
      font-weight: bold;
      background-color: var(--accent-col);
      background-image: linear-gradient(0deg, #23A4A8 calc(var(--exp, 0) - 5%), var(--accent-col-shade) calc(var(--exp, 0) + 5%));
      border-radius: 100%;
      width: 2ch;
      height: 2ch;
      display: flex;
      color: var(--main-bg-col);
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      transition: background 1s ease-out;
  }
</style>