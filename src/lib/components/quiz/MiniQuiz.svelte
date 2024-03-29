<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import ChevronRight from 'svelte-material-icons/ChevronRight.svelte';
  import Restart from 'svelte-material-icons/Restart.svelte';
  import HeadLightbulb from 'svelte-material-icons/HeadLightbulb.svelte';
  import SendLock from 'svelte-material-icons/SendLock.svelte';
  import Timer from 'svelte-material-icons/Timer.svelte';
  import PartyPopper from 'svelte-material-icons/PartyPopper.svelte';
  import CheckBold from 'svelte-material-icons/CheckBold.svelte';
  import CloseThick from 'svelte-material-icons/CloseThick.svelte';
  import ExitToApp from 'svelte-material-icons/ExitToApp.svelte';
  import type { IQuestionResult } from "$lib/quiz/Quiz";
  import { QuizAnswer, Quiz, QuizResult } from "$lib/quiz/Quiz";
  import Icon from "$lib/components/Icon.svelte";
  import ProgressBar from "$lib/components/ProgressBar.svelte";
  import Countdown from "$lib/components/Countdown.svelte";
  import PlayerLevel from "$lib/components/quiz/PlayerLevel.svelte";
  import Achievement from "$lib/components/quiz/Achievement.svelte";
  import { mmss } from "$lib/utils";
  import { highscore } from "$lib/quiz/Highscore";
  import { onDestroy, onMount } from "svelte";

  export let src: Quiz;
  export let timePerQuestion = 30;
  export let score = 0;

  let selected = new Set<QuizAnswer>(),
    scoreChange: number,
    scoreChangeTimeout: number,
    correctAnswers = 0,
    totalCorrectAnswers = 0,
    wrongAnswers = 0,
    ratio = 0,
    time: number,
    paused: boolean,
    openStats: () => void,
    result: QuizResult|null;

  $: score = Math.trunc(src.score);

  onMount((): void => {
    src?.onComplete.on(onQuizComplete);
  });

  onDestroy((): void => {
    src?.onComplete.off(onQuizComplete);
  });

  function toggleAnswer(ans: QuizAnswer): void {
    if(src.current?.submitted)
      return;

    if(selected.has(ans))
      selected.delete(ans);
    else
      selected.add(ans);

    selected = selected;
  }

  function startQuiz(): void {
    src.start();
    startTimer();

    src = src;
  }

  function submitQuestion(): void {
    paused = true;

    const res = src.submit(...selected);

    if(res) {
      correctAnswers += res.correctAnswers;
      totalCorrectAnswers += res.totalCorrectAnswers;
      wrongAnswers += res.wrongAnswers;
      ratio = src.score / src.maxScore;
      scoreChanged(res);
    }

    src = src;
  }

  function restartQuiz(): void {
    correctAnswers = totalCorrectAnswers = wrongAnswers = scoreChange = 0;
    result = null;
    selected.clear();
    src.reset();

    src = src;
  }

  function nextQuestion(): void {
    selected.clear();
    src.next();
    startTimer();

    src = src;
  }

  function scoreChanged(result: IQuestionResult): void {
    if(scoreChange && scoreChangeTimeout)
      window.clearTimeout(scoreChangeTimeout);

    scoreChange = Math.trunc(result.score);

    //  Reset (hide) score change after 5s
    scoreChangeTimeout = window.setTimeout(() => {
      scoreChange = scoreChangeTimeout = 0;
    }, 5000);
  }

  function startTimer(): void {
    time = timePerQuestion;
    paused = false;
  }

  function scoreMessage(): string {
    if(ratio < .1)
      return "Oh well... You tried, I guess.";

    if(ratio < .5)
      return "Everyone starts somewhere. Keep going!";

    if(ratio < .8)
      return "Not bad, not bad at all!";

    if(ratio < .95)
      return "Oh wow, wanna be me friend?";

    return "Is you the Cajetan himself???";
  }

  function onQuizComplete(res: QuizResult): void {
    result = res;
  }
</script>

<article class="quiz">

    <p class="title" class:small={src.started}>
      {#if src.icon}
        <Icon name={src.icon} />
      {/if}
      <span>
        Quiz: {src.title}
      </span>
    </p>

    {#if !src.started}
      <section id="quiz_{src.id}_intro">

        {#if src.description}
          <p class="secondary">
            <SvelteMarkdown source={src.description} />
          </p>
        {/if}

        {#if $highscore.has(src.id)}
          {@const best = $highscore.get(src.id)}
          <p class="result highscore" data-label="Personal best">{best}</p>
        {/if}

        <div class="controls">
          <button on:click={startQuiz}>
            <HeadLightbulb />
            Let's go!
          </button>
        </div>
      </section>

    {:else if src.done}
      <section id="quiz_{src.id}_results">
        <p class="title done rainbow">
          <PartyPopper />
          Quiz completed
        </p>

        {#if result?.hasAchievements}
          <div class="achievements">
            {#each [...result.achievements] as achievement}
              <Achievement>
                {achievement}
              </Achievement>
            {/each}
          </div>
        {/if}

        <div class="results">
          <p class="result score" data-label="score">{score}</p>
          {#if src.totalTime >= 0}
            <p class="result time" data-label="time">{mmss(src.totalTime)}</p>
          {/if}
          <p class="result correct" data-label="correct">{correctAnswers} / {totalCorrectAnswers}</p>
          <p class="result wrong" data-label="wrong">{wrongAnswers}</p>
        </div>
        <ProgressBar progress={ratio} />
        <p class="secondary result-msg">{scoreMessage()}</p>

        <div class="controls">
          <button on:click={restartQuiz}>
            <Restart />
            Play again
          </button>
        </div>
      </section>

    {:else if src.current}
      <section id="quiz_{src.id}_main">

        <div class="hud">
          <div class="score">
            <span class="score-value">
              {score}
            </span>
            <span class="score-change"
               class:active={scoreChange}
               class:penalty={scoreChange < 0}>
              {scoreChange}
            </span>
          </div>
          <div class="difficulty">
            <span class="result" data-label="difficulty">
              {src.current.difficulty}
            </span>
          </div>
          <div class="timer" class:hidden={time < 0} class:danger={time < 10}>
            <Timer />
            <span class="timer-value">
              <Countdown bind:time bind:paused on:end={submitQuestion} />
            </span>
          </div>
        </div>

        {#key src.current}
          <p>
            <SvelteMarkdown source={src.current.text} />
          </p>

          <ul class="answers" class:submitted={src.current.submitted}>
            {#each src.current.answers as ans (ans.id)}

              <li class="answer"
                  class:selected={selected.has(ans)}
                  class:correct={ans.correct}>
                <button on:click={toggleAnswer.bind(null, ans)}>
                  {#if src.current.submitted}
                    <span>
                      {#if ans.correct}
                        <CheckBold />
                      {:else}
                        <CloseThick />
                      {/if}
                    </span>
                  {/if}
                  <span>{ans.text}</span>
                </button>
              </li>

            {/each}
          </ul>

        {/key}

        <div class="controls">
          {#if src.current.submitted}
            <button on:click={nextQuestion}>
              {src.hasNext ? 'Next question' : 'View results'}
              <ChevronRight />
            </button>
          {:else}
            <button on:click={submitQuestion}>
              <SendLock />
              Submit
            </button>
          {/if}
          <button on:click={restartQuiz} class="cancel">
            <ExitToApp />
            End quiz
          </button>
        </div>
      </section>

    {/if}

  <div class="player-stats">
    <PlayerLevel bind:openStats />
  </div>
</article>

<style>
    .quiz {
      background-image: var(--bg-gradient);
        padding: 1rem 2rem;
        border-radius: .7rem;
    }

    .quiz :global(p) {
        margin: unset;
    }

    button {
        cursor: pointer;
        padding: .75rem 2rem;
        font-size: 1.1rem;
        border-radius: .5rem;
        flex-grow: 1;
        font-weight: bold;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: .5rem;
        width: 100%;

        color: var(--accent-col);
        border: 2px solid var(--accent-col);
        background-color: transparent;

        transition: all 200ms ease-out;
    }

    button:hover {
        border-color: transparent;
        background-color: var(--accent-col);
        color: var(--main-text-col);
    }

    .title {
        font-size: 2.5rem;
        font-weight: bold;
        font-family: var(--font-heading);
        text-transform: uppercase;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: .75rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        transform-origin: top left;

        transition: font-size 200ms ease-out;
    }

    .title.small {
        font-size: 1.5rem;
        padding-bottom: .5rem;
    }

    .title:not(.done) {
        border-bottom: 1px solid var(--secondary-text-col);
    }

    .title.done {
        font-size: 3rem;
        color: yellowgreen;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        .title.done {
            font-size: 1.8rem;
        }
    }

    .title span {
        flex-grow: 1;
        text-align: left;
        line-height: 1.1;
    }

    @media screen and (max-width: 768px){
        .title {
            font-size: 2rem;
        }
    }

    .answers {
        list-style: none;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: center;
        gap: .5rem;
    }

    .answer {
        width: 48%;
        flex-grow: 1;
    }

    .answer button {
        width: 100%;
        height: 100%;
        background-color: var(--secondary-bg-col);
        color: var(--main-text-col);
        border-color: transparent;
    }

    @media screen and (max-width: 768px) {
        .answer button {
            font-size: 1rem;
            font-weight: normal;
        }
    }

    .answer button:hover {
        filter: brightness(1.2);
    }

    .answer.selected button {
        border-color: transparent;
        background-color: dodgerblue;
    }

    .answers.submitted .answer button {
        cursor: unset;
        background-color: transparent;
    }

    .answers.submitted .answer:not(.correct) button {
        color: crimson;
    }

    .answers.submitted .answer button {
        border-color: transparent;
    }

    .answers.submitted .answer.selected button {
        color: var(--main-text-col);
    }

    .answers.submitted .answer.selected:not(.correct) button {
        background-color: crimson;
    }

    .answers.submitted .answer.selected.correct button {
        background-color: yellowgreen;
    }

    .answers.submitted .answer.correct:not(.selected) button {
        color: lightgreen;
    }

    .hud {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 2rem;
    }

    .score {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: flex-end;
        column-gap: .5rem;
    }

    .score-value {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.2rem;
        min-width: 4ch;
    }

    .score-value::before {
        content: 'SCORE';
        font-size: .8rem;
        color: var(--secondary-text-col);
        line-height: unset;
    }

    .score-change {
        color: forestgreen;
        font-size: 1rem;
        transform: scale(0) translateX(5px);
        min-width: 8ch;
        opacity: 0;

        transition: all 200ms ease-out;
    }

    .score-change:not(.penalty)::before {
        content: '+';
    }

    .score-change.penalty {
        color: crimson;
    }

    .score-change.active {
        transform: unset;
        opacity: unset;
    }

    .secondary {
        font-size: 1.2rem;
        color: var(--secondary-text-col);
    }

    .timer {
        font-size: 1.2rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        column-gap: .5rem;
    }

    .timer.hidden {
      visibility: hidden;
    }

    .timer-value {
        min-width: 5ch;
        transition: color 200ms ease-out;
    }

    .timer.danger {
        color: crimson;
        animation: .5s infinite alternate-reverse timer-flash;
    }

    .controls {
        margin-top: 2rem;
        margin-bottom: 1rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    }

    .controls > * {
        width: unset;
    }

    .controls > .cancel {
        flex-grow: 0;
    }

    button.cancel {
        border: none;
        border-radius: 0;
        color: var(--main-text-col);
    }

    button.cancel:hover {
        background-color: transparent;
        color: var(--accent-col);
    }

    .result-msg {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .results {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: flex-end;
        padding: 1rem;
    }

    .result {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        row-gap: .25rem;
        font-size: 1.2rem;
    }

    .result::before {
        content: attr(data-label);
        text-transform: uppercase;
        font-size: .8rem;
        color: var(--secondary-text-col);
    }

    .result.score {
        font-weight: bold;
    }

    .result.correct {
        color: yellowgreen;
    }

    .result.wrong {
        color: crimson;
    }

    .highscore {
        margin-top: 2rem;
    }

    .player-stats {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    .achievements {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        column-gap: 1rem;
        row-gap: .5rem;
    }

    @keyframes timer-flash {
        from {
            filter: brightness(1);
        }

        to {
            filter: brightness(.75);
        }
    }
</style>