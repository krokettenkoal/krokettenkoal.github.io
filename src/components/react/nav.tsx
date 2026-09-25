import {type HTMLAttributes, useState, useEffect, useCallback} from "react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {Icon} from '@iconify/react';

export type NavLink = {
    href: string;
    label: string;
    iconName: string;
    activePattern?: string;
}

type NavProps = HTMLAttributes<HTMLElement> & {
    items: NavLink[];
    initialPathname: string;
}

const navItemIsActive = (navItem: NavLink, currentPath: string): boolean => {
    if (navItem.activePattern) {
        const regex = new RegExp(navItem.activePattern);
        return regex.test(currentPath);
    }
    return currentPath === navItem.href;
}

export function Nav({items, initialPathname, className, ...restProps}: NavProps) {
    const [currentPath, setCurrentPath] = useState<string>(initialPathname);
    const handlePathChanged = useCallback((event: { to: URL }) => {
        setCurrentPath(event.to.pathname);
    }, []);

    useEffect(() => {
        document.addEventListener('astro:before-swap', handlePathChanged);
        return () => {
            document.removeEventListener('astro:before-swap', handlePathChanged);
        }
    }, [handlePathChanged]);

    return (
        <nav className={cn("transition-colors duration-300 p-1", className)} {...restProps}>
            <ul
                className="flex justify-center items-center gap-2"
            >
                {items.map(navLink => (
                    <li key={navLink.href}>
                        <a href={navLink.href}
                           className={cn(
                               buttonVariants({variant: 'link'}),
                               [
                                   'flex items-center gap-1 text-secondary-foreground transition-colors hover:no-underline hover:text-foreground',
                                   {'text-foreground font-semibold bg-secondary': navItemIsActive(navLink, currentPath)}
                               ]
                           )}
                        >
                            <Icon icon={navLink.iconName} className="size-4 lg:hidden"/>
                            <span className="hidden md:block">
                                {navLink.label}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}