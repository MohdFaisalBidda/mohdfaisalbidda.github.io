"use client";

import { KeyboardEvent } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

function ToggleMode({ className, iconSize = "w-4 h-4" }: { className?: string, iconSize?: string }) {
    const { theme, handleTheme } = useTheme();

    const handleToggle = () => {
        handleTheme(theme === "dark" ? "light" : "dark");
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => { 
        if (event.key === "t" || event.key === "T") { 
            event.preventDefault(); 
            handleToggle();
        }
    };

    return (
        <span
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className={`cursor-pointer transition-colors dark:text-blue-400 text-primary ${className}`}
        >
            {theme === "dark" ? (
                <Sun className={iconSize} />
            ) : (
                <Moon className={iconSize} />
            )}
        </span>
    )
}

export default ToggleMode