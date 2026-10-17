import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/About/AboutPage"
import ProjectPage from "./pages/Project/ProjectPage"
import BlogPage from "./pages/Blog/BlogPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProjectDetailPage from "./pages/Project/ProjectDetailPage"

function App() {

  return (
    <Routes>
        <Route element={<MainLayout />}>

          {/* Static Routes */}
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage  />}/>

          {/* Dynamic Routes */}
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Route>
    </Routes>
  )
}

export default App
