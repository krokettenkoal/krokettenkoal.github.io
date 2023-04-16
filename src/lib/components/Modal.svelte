<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import Close from 'svelte-material-icons/Close.svelte';

    const dispatch = createEventDispatcher<{submit: {key: string, value: any}, cancel, close}>();

    let dialog: HTMLDialogElement;
    let isOpen = false;

    export function showModal(): void {
        dialog?.showModal();
        isOpen = true;
    }

    export function closeModal(value: any = undefined): void {
        if(value)
            dispatch('submit', value);
        else
            dispatch('cancel');

        dispatch('close');

        dialog?.close();
        isOpen = false;
    }

    function closeOnOutsideClick(ev: PointerEvent){
        const rect = dialog.getBoundingClientRect();

        if(ev.x < rect.x
            || ev.x > (rect.x + rect.width)
            || ev.y < rect.y
            || ev.y > (rect.y + rect.height)){
            //  Clicked outside dialog
            closeModal();
        }
    }
</script>

<dialog bind:this={dialog} data-open="{isOpen}" on:click={closeOnOutsideClick}>
    <div class="top">
        <span></span>
        <slot name="title"></slot>
        <button on:click|preventDefault={closeModal.bind(dialog, false)} class="icon" type="button">
            <Close/>
        </button>
    </div>

    <div class="content">
        <slot name="content"></slot>
    </div>

    <div class="bottom">
        <slot name="bottom"></slot>
    </div>
</dialog>

<style>
    dialog {
        min-width: 60vw;
        min-height: 40vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: stretch;
        border-radius: .7rem;
        box-shadow: 3px 5px 15px black;
        background: var(--main-bg-gradient);
        border: none;
        color: var(--main-text-col);
        box-sizing: border-box;
    }

    dialog[data-open="false"]{
        display: none;
    }

    dialog::backdrop {
        backdrop-filter: brightness(.1) blur(10px);
    }

    dialog:not([open]){
        display: none;
    }

    .top {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: stretch;
        flex-grow: 1;
    }

    .bottom :global(> *) {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
    }

    button.icon {
        background-color: transparent;
        border: none;
        color: var(--main-text-col);
        opacity: .8;
        font-size: 1.5rem;
        cursor: pointer;

        transition: opacity 200ms ease-out;
    }

    button.icon:hover {
        opacity: 1;
    }

    @media screen and (max-width: 1200px) {
        dialog {
            min-width: 85vw;
        }
    }

    @media screen and (max-width: 768px) {
        dialog {
            min-width: 98vw;
        }
    }
</style>