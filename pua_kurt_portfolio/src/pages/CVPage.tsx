import { CV_URL, CV_EMBED_URL } from '../data/contact';
import Button from '../components/Button';
import './CVPage.css';

const CVPage = () => {
  return (
    <div className="page cv-page">
      <header className="page-header">
        <span className="page-header__eyebrow">Resume</span>
        <h1 className="page-header__title">Curriculum Vitae</h1>
        <p className="page-header__subtitle">
          My latest CV — preview it below or open the full document in a new tab.
        </p>
      </header>

      <div className="cv-actions">
        <Button href={CV_URL}>Open full document</Button>
        <Button href={CV_URL} variant="secondary">
          Download / print
        </Button>
      </div>

      <section className="cv-viewer card">
        <iframe
          src={CV_EMBED_URL}
          title="Curriculum Vitae"
          className="cv-viewer__iframe"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </section>

      <p className="cv-fallback">
        If the preview doesn't load,{' '}
        <a href={CV_URL} target="_blank" rel="noopener noreferrer">
          open the CV directly on Google Drive
        </a>
        .
      </p>
    </div>
  );
};

export default CVPage;
