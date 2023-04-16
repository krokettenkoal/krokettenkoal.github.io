<script lang="ts">
  export let color: string;
  export let textColor: string;

  function badgeStyle(): string {
    let s = '';

    if(color)
      s += `--badge-col:${color};`

    if(textColor)
      s += `--badge-text-col:${textColor};`

    return s;
  }
</script>

<div class="skill-badge" style="{badgeStyle()}">
  <slot name="icon" />

  <span class="label">
    <slot />
  </span>
</div>

<style>
  .skill-badge {
      --badge-col: var(--accent-col);
      --badge-text-col: var(--main-text-col);

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      column-gap: .5rem;
      background-color: var(--badge-col);
      color: var(--badge-text-col);
      font-size: 1.1rem;
      padding: .25rem 1.25rem;
      border-radius: 1.5rem;
  }

  .label {
      font-weight: bold;
  }
</style>