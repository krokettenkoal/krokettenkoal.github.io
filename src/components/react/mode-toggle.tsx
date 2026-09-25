import {Icon} from '@iconify/react';
import {Button} from '@/components/ui/button';

const toggleThemeState = () => {
    document.documentElement.classList.toggle('dark', !document.documentElement.classList.contains('dark'));
}

export function ModeToggle() {
    return (
        <Button variant="outline" size="icon" onClick={toggleThemeState}>
            <Icon icon="lucide:sun"
                  className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
            <Icon icon="lucide:moon"
                  className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}