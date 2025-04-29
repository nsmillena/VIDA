import { Outlet } from 'react-router-dom';

function PublicLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-800">
            {/*Navbar */}
            <main className="flex-1">
                <Outlet />
            </main>
            {/*Adicionar Footer */}
        </div>
    );
}

export default PublicLayout;
