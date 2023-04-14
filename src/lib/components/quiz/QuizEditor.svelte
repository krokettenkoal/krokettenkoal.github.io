<script lang="ts">
  import Plus from 'svelte-material-icons/Plus.svelte';
  import ArrowCollapseVertical from 'svelte-material-icons/ArrowCollapseVertical.svelte';
  import ArrowExpandVertical from 'svelte-material-icons/ArrowExpandVertical.svelte';
  import {Quiz, QuizQuestion, QuizAnswer} from "$lib/quiz/Quiz";
  import Icon from "$lib/components/Icon.svelte";
  import { createQuizFile } from "$lib/quiz/QuizUtils";

  export let src: Quiz = new Quiz();

  let expanded = new Set<string>(), serialized: string, blob: Blob;
  $: serialized = src.serialize();
  $: blob = new Blob([createQuizFile(src)], {type: 'octet/stream'});

  function addQuestion(): void {
    const q = new QuizQuestion();
    src.questions.push(q);
    expanded.add(q.id);

    src = src;
  }

  function addAnswer(question: QuizQuestion): void {
    question.answers.push(new QuizAnswer());

    src = src;
  }

  function toggleExpanded(id: string): void {
    if(expanded.has(id))
      expanded.delete(id);
    else
      expanded.add(id);

    expanded = expanded;
  }
</script>

<form>
  <fieldset>
    <legend>General</legend>

    <div class="input-group">
      <label for="id">ID</label>
      <input type="text" bind:value={src.id} name="id" id="id">
    </div>
    <div class="input-group">
      <label for="title">Title</label>
      <input type="text" bind:value={src.title} name="title" id="title" class="primary">
    </div>
    <div class="input-group">
      <label for="icon">Icon</label>
      <input type="text" bind:value={src.icon} name="icon" id="icon">
      {#if src.icon}
        <span class="icon-preview">
          <Icon size="2rem" name={src.icon} />
        </span>
      {/if}
    </div>
    <div class="input-group">
      <label for="description">Description</label>
      <textarea bind:value={src.description} name="description" id="description"></textarea>
    </div>
  </fieldset>

  <fieldset>
    <legend>Questions</legend>

    <ul id="questions">
      {#each src.questions as question (question.id)}
        {@const coll = !expanded.has(question.id)}

        <li class="question" class:collapsed={coll}>
          <div class="collapsed-visible">
            <p class="h5 collapsed-title">{question.text}</p>

            <button class="collapse-toggle"
                    type="button"
                    title="{coll ? 'Expand question' : 'Collapse question'}"
                    on:click={toggleExpanded.bind(null, question.id)}>
                <span class="icon">
                {#if coll}
                  <ArrowExpandVertical size="1.5rem" />
                {:else}
                  <ArrowCollapseVertical size="1.5rem" />
                {/if}
                </span>
            </button>

          </div>

          <div class="input-group">
            <label for="{question.id}_text">Question</label>
            <input type="text" bind:value={question.text} name="{question.id}_text" id="{question.id}_text" class="primary" placeholder="What do you wanna ask? What color is my underwear?">
          </div>

          <div class="input-group">
            <label for="{question.id}_difficulty">Difficulty</label>
            <input type="number" bind:value={question.difficulty} name="{question.id}_difficulty" id="{question.id}_difficulty">
          </div>

          <label for="{question.id}_answers">Answers</label>

          <ul class="answers" id="{question.id}_answers">
            {#each question.answers as answer (answer.id)}

              <li class="answer">
                <div class="input-group">
                  <input type="text" bind:value={answer.text} name="{answer.id}_text" id="{answer.id}_text" placeholder="A sophisticated, straightforward and/or funny answer">
                </div>
                <div class="input-group">
                  <label for="{answer.id}_correct" class="small">Correct?</label>
                  <input type="checkbox" bind:checked={answer.correct} name="{answer.id}_correct" id="{answer.id}_correct">
                </div>
              </li>

            {/each}
          </ul>

          <button type="button" on:click={addAnswer.bind(null, question)}>
            <span class="icon"><Plus size="2rem" /></span>
            <span class="label">New answer</span>
          </button>

        </li>

      {/each}
    </ul>


    <button type="button" on:click={addQuestion}>
      <span class="icon"><Plus size="2rem" /></span>
      <span class="label">New question</span>
    </button>

  </fieldset>
</form>

<div class="input-group">
  <label for="output">Result</label>
  <textarea id="output" name="output" bind:value={serialized} rows="15"></textarea>
</div>

<a class="button download" href="{window.URL.createObjectURL(blob)}" download="{src.id}.quiz.ts">Download quiz file</a>

<style>
  fieldset {
      background-image: var(--main-bg-gradient);
      margin-bottom: 3rem;
      border-radius: .75rem;
      border-color: transparent;
  }

  legend {
      padding: 0 1rem;
  }

  .input-group {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: stretch;
      margin-bottom: 1rem;
  }

  label {
      display: block;
      font-size: .9rem;
      text-transform: uppercase;
      font-style: italic;
      text-align: center;
      color: var(--secondary-text-col);
  }

  label.small {
      font-size: .7rem;
  }

  input[type="text"],
  input[type="number"],
  textarea {
      background-color: var(--secondary-bg-col);
      color: var(--main-text-col);
      padding: .5rem 1rem;
      border: none;
      border-radius: .5rem;
  }

  input.primary {
      font-size: 1.2rem;
  }

  ul {
      list-style: none;
      padding: 0;
  }

  .question {
      border-bottom: 2px solid var(--secondary-text-col);
      margin-bottom: 2rem;
      padding-bottom: 2rem;
  }

  .question.collapsed > *:not(.collapsed-visible) {
      display: none;
  }

  .question:not(.collapsed) .collapsed-title {
      display: none;
  }

  .collapsed-visible {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
  }

  .collapsed-title {
      flex-grow: 1;
  }

  .answer {
      display: flex;
      flex-flow: row nowrap;
      justify-content: stretch;
      align-items: center;
      column-gap: 1rem;
  }

  .answer > *:first-child {
      flex-grow: 1;
  }

  button {
      width: 100%;
      font-size: 1rem;
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: var(--main-text-col);
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      opacity: .7;

      transition: all 100ms ease-out;
  }

  button:hover {
      opacity: 1;
  }

  .collapse-toggle {
      width: unset;
      flex-flow: row nowrap;
      column-gap: .5rem;
  }

  .icon-preview {
      align-self: center;
      margin-top: .5rem;
  }

  a.button {
      display: block;
      text-align: center;
      border: 2px solid var(--accent-col);
      border-radius: .7rem;
      padding: .5rem 1rem;

      transition: all 200ms ease-out;
  }

  a.button:hover {
      color: var(--main-text-col);
      border-color: transparent;
      background-color: var(--accent-col);
  }
</style>