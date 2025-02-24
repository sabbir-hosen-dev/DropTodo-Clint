import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className='w-full h-[70vh] flex justify-center items-center'> <img className='w-[100px]' src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif" alt="" /></div>; // You can replace this with a proper loading spinner
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <> {children} </>;
}
