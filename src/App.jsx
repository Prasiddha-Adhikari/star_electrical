import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='why-us' element={<WhyUs />} />
          <Route path='manufacturing' element={<Manufacturing />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='blog' element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path='contact-us' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;