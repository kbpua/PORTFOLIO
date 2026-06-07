import './Masthead.css';

const Masthead = () => {
  const dateline = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="masthead">
      <div className="masthead__rule masthead__rule--heavy" />
      <p className="masthead__dateline">
        {dateline} · Manila, PH · Portfolio Edition
      </p>
      <h1 className="masthead__title">The Kurt Pua Tribune</h1>
      <p className="masthead__tagline">
        All the code fit to ship · Computer Science · UP Manila
      </p>
      <div className="masthead__rule masthead__rule--double">
        <span />
        <span />
      </div>
    </header>
  );
};

export default Masthead;
