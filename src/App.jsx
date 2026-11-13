import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import LearningLab from './pages/LearningLab.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Connect from './pages/Connect.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="learning-lab" element={<LearningLab />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:slug" element={<BlogPost />} />
        <Route path="connect" element={<Connect />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
