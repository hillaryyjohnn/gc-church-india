function Contact() {
  return (
    <section className="page-section">
      <h1>Contact Us</h1>

      <div className="two-column">
        <div className="content-box">
          <h2>GC Church India</h2>
          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
          <p><strong>WhatsApp:</strong> +91 XXXXX XXXXX</p>
          <p><strong>Email:</strong> gcchurchindia@gmail.com</p>
          <p><strong>Address:</strong> India</p>
        </div>

        <div className="content-box">
          <h2>Send Prayer Request</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message / Prayer Request"></textarea>
            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;