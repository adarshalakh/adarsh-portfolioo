import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Projects } from '@/pages/Projects';
import { Experience } from '@/pages/Experience';
import { Certifications } from '@/pages/Certifications';
import { Contact } from '@/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
