import Header from './components/Header';
import { Outlet } from 'react-router';
function App() {
    return (
        <div className="max-w-[1500px] border-l border-r mx-auto ">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
