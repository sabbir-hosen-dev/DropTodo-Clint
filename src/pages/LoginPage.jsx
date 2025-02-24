import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast'; // Import react-hot-toast

function LoginForm() {
    const [googleLoading, setGoogleLoading] = useState(false);
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            setGoogleLoading(true);
            await loginWithGoogle();
            toast.success('You have successfully logged in.', {
                position: 'top-center',
                duration: 4000,
                style: {
                    background: '#4CAF50',
                    color: '#fff',
                },
            });
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred during login. Please try again.', {
                position: 'top-center',
                duration: 4000,
                style: {
                    background: '#F44336',
                    color: '#fff',
                },
            });
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-md w-full p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    Welcome
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                    Sign in with Google to continue to the app
                </p>
                <Button
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    disabled={googleLoading}
                    type="button"
                    onClick={handleGoogleLogin}
                >
                    {googleLoading ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                        <>
                            <FcGoogle className="h-6 w-6" /> 
                            <span className="font-medium">Sign in with Google</span>
                        </>
                    )}
                </Button>
                
            </div>
        </div>
    );
}

export default LoginForm;
