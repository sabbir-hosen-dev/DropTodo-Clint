import { Link } from 'react-router';
import { ModeToggle } from './ui/mode-toggle';
import { Button } from '@/components/ui/button';
import { LoaderCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
    const { logout, user, loading } = useAuth();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
            {/* Left Side: Logo and App Name */}
            <Link to={'/'} className="no-underline">
                <div className="h-10 flex items-center gap-2">
                
                    <h1 className="text-xl font-bold text-foreground">DropTask</h1>
                </div>
            </Link>

            {/* Right Side: Theme Toggle and Logout Button */}
            <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <ModeToggle />

                {/* Logout Button (Conditional Rendering) */}
                {user && (
                    <Button
                        onClick={logout}
                        variant="ghost"
                        size="icon"
                        className="hover:text-sky-300 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                        ) : (
                            <LogOut className="h-4 w-4" />
                        )}
                    </Button>
                )}
            </div>
        </header>
    );
}