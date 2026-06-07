import './PaperBackground.css';

const watermarkWords = Array.from({ length: 12 }, () => 'Tribune');

const PaperBackground = () => {
  return (
    <div className="paper-bg" aria-hidden="true">
      <div className="paper-bg__shimmer" />
      <div className="paper-bg__grain" />
      <div className="paper-bg__rules" />
      <div className="paper-bg__watermark">
        {watermarkWords.map((word, index) => (
          <span key={index}>{word}</span>
        ))}
      </div>
    </div>
  );
};

export default PaperBackground;
