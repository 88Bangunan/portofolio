import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/Home/HomePage"
import AboutPage from "./pages/About/AboutPage"
import ProjectPage from "./pages/Project/ProjectPage"
import BlogPage from "./pages/Blog/BlogPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProjectDetailPage from "./pages/Project/ProjectDetailPage"
import AchievementDetailPage from "./pages/Achievement/AchievementDetailPage"
import AchievementPage from "./pages/Achievement/AchievementPage"

function App() {

  return (
    <Routes>
        <Route element={<MainLayout />}>

          {/* Static Routes */}
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/achievement" element={<AchievementPage />} />
          <Route path="*" element={<NotFoundPage  />}/>

          {/* Dynamic Routes */}
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/achievement/:slug" element={<AchievementDetailPage />}/>
        </Route>
    </Routes>
  )
}

export default App
