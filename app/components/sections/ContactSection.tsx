import { contactDetails, type PortfolioContent } from "../../data/content";

export function ContactSection({ content }: { content: PortfolioContent }) {
  return (
    <section className="contact section-shell" id="contact">
      <p className="kicker">{content.contactKicker}</p>
      <h2>{content.contactTitle}</h2>
      <div className="contact-bottom">
        <p>{content.contactText}</p>
        <div className="contact-actions">
          {/* Gmail's compose page rather than mailto:, which does nothing when no mail app is set up. */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactDetails.email)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.email}<span aria-hidden="true">↗</span>
          </a>
          <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">{content.linkedin}<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
