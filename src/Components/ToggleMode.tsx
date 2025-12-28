import { KeyboardEvent } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Moon, Sun } from 'lucide-react';

function ToggleMode({ className, iconSize = "w-4 h-4" }: { className?: string, iconSize?: string }) {
    const { theme, handleTheme } = useTheme();
    const toggleDark = (val: string) => {
        handleTheme(val);
    };

    const handleToggle = (event: KeyboardEvent<HTMLSpanElement>) => { 
        if (event.key === "t" || event.key === "T") { 
            event.preventDefault(); 
            toggleDark(theme === "dark" ? "light" : "dark");
        }
    };

    return (
        <span
            onClick={() => toggleDark(theme === "dark" ? "light" : "dark")}
            onKeyDown={handleToggle}
            className={`cursor-pointer transition-colors dark:text-blue-400 text-primary, ${className}`}
        >
            {theme === "dark" ? (
                <Sun className={iconSize} onClick={() => toggleDark("light")} />
            ) : (
                <Moon className={iconSize} onClick={() => toggleDark("dark")} />
            )}
        </span>
    )
}

export default ToggleMode