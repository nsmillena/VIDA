import { Outlet } from 'react-router-dom';

function PrivateLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default PrivateLayout;
