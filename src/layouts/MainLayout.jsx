import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

function MainLayout() {
    return (
        <div className="bg-black">
            <header>
                <Navbar />
            </header>
            <main className="pt-30 px-5 md:w-6/7 mx-auto box-border">
                <Outlet />
            </main>
            <footer>
                <span>Footer</span>
            </footer>
        </div>
    )
}

export default MainLayout