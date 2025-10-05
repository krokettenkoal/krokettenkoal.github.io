<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button';

	type Props = Omit<ButtonProps, 'onclick'> & {
		target: string;
	}

	const { target, children, ...restProps }: Props = $props();

	function scrollToTarget() {
		const elem = document.querySelector(target);
		if (!elem) {
			console.warn(`Element not found for selector: ${target}`);
			return;
		}

		elem.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Button onclick={scrollToTarget} {...restProps}>
	{@render children?.()}
</Button>