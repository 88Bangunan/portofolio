import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MainLayout() {
    return (
        <div className="bg-black font-primary">
            <header>
                <Navbar />
            </header>
            <main className="pt-30 px-5 md:w-6/7 mx-auto box-border">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MainLayout