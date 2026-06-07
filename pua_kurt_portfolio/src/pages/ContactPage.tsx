import { contactMethods, socialLinks } from '../data/contact';
import { asset } from '../utils/assets';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="page contact-page">
      <header className="page-header">
        <span className="page-header__eyebrow">Get in touch</span>
        <h1 className="page-header__title">Contact</h1>
        <p className="page-header__subtitle">
          Have a question, opportunity, or project in mind? I'd love to hear from you.
        </p>
      </header>

      <div className="contact-layout">
        <div className="contact-profile card">
          <img
            src={asset('/profile.jpg')}
            alt="Kurt Pua"
            className="contact-profile__photo"
          />
          <h2 className="contact-profile__name">Kurt Pua</h2>
          <p className="contact-profile__role">
            Computer Science student · University of the Philippines Manila
          </p>
        </div>

        <div className="contact-details">
          <section className="contact-group card">
            <h3 className="contact-group__title">Direct contact</h3>
            <ul className="contact-list">
              {contactMethods.map((method) => (
                <li key={method.id} className="contact-list__item">
                  <img
                    src={asset(method.icon)}
                    alt=""
                    className="contact-list__icon"
                  />
                  <div className="contact-list__info">
                    <span className="contact-list__label">{method.label}</span>
                    <a href={method.href} className="contact-list__value">
                      {method.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="contact-group card">
            <h3 className="contact-group__title">Social profiles</h3>
            <ul className="contact-list">
              {socialLinks.map((link) => (
                <li key={link.id} className="contact-list__item">
                  <img
                    src={asset(link.icon)}
                    alt=""
                    className="contact-list__icon"
                  />
                  <div className="contact-list__info">
                    <span className="contact-list__label">{link.label}</span>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-list__value"
                    >
                      {link.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
