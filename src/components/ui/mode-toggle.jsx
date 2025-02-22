import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "../theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="hover:bg-secondary/50 cursor-pointer hover:text-sky-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? (
                <Moon className="h-4 w-4" />
            ) : (
                <Sun className="h-4 w-4" />
            )}
        </Button>
    );
}