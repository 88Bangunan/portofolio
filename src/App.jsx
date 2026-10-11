import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPage from "./pages/ProjectPage"
import BlogPage from "./pages/BlogPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage  />}/>
        </Route>
    </Routes>
  )
}

export default App
