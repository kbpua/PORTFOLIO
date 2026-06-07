import { AVAILABILITY, PROFILE_IMAGE, contactMethods, socialLinks } from '../data/contact';
import { asset } from '../utils/assets';
import ContactIcon from '../components/icons/ContactIcon';
import Reveal from '../components/motion/Reveal';
import SectionHeader from '../components/motion/SectionHeader';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section contact-section">
      <SectionHeader
        eyebrow="Get in touch"
        title="Contact"
        subtitle="Have a question, opportunity, or project in mind? I'd love to hear from you."
      />

      <Reveal className="contact-layout">
        <div className="contact-profile">
          <img
            src={asset(PROFILE_IMAGE)}
            alt="Kurt Pua"
            className="contact-profile__photo"
          />
          <h3 className="contact-profile__name">Kurt Pua</h3>
          <p className="contact-profile__role">{AVAILABILITY}</p>
        </div>

        <div className="contact-details">
          <section className="contact-group">
            <h3 className="contact-group__title">Direct contact</h3>
            <ul className="contact-list">
              {contactMethods.map((method) => (
                <li key={method.id} className="contact-list__item">
                  <ContactIcon
                    id={method.icon}
                    className="contact-list__icon"
                    size={40}
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

          <section className="contact-group">
            <h3 className="contact-group__title">Social profiles</h3>
            <ul className="contact-list">
              {socialLinks.map((link) => (
                <li key={link.id} className="contact-list__item">
                  <ContactIcon
                    id={link.icon}
                    className="contact-list__icon"
                    size={40}
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
      </Reveal>
    </section>
  );
};

export default ContactSection;
