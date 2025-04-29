import { Outlet } from 'react-router-dom';

function PrivateLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/*Sidebar ou Menu lateral*/}
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default PrivateLayout;
