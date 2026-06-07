import type { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PaperBackground from './PaperBackground';
import ReadingProgress from './ReadingProgress';
import BackToTop from './BackToTop';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <PaperBackground />
      <ReadingProgress />
      <NavBar />
      <main className="layout__main">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
