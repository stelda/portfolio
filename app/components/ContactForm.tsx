import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <section id="contactForm" className={styles.ContactForm}>
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
        