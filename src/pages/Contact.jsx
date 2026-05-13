function Contact() {
  return (
    <section className="page-section">
      <h1>Contact Us</h1>

      <div className="two-column">
        <div className="content-box">
          <h2>GC Church India</h2>
          <p><strong>Phone:</strong> +91 99696 67996, +91 93234 01587</p>
          <p><strong>WhatsApp:</strong> +91 99696 67996</p>
          <p><strong>Email:</strong> guideofchristchurch.india@gmail.com</p>
          <p><strong>Address:</strong> Chawl No. E/4, Room No.9, <br /> Ambedkar Nagar,
            M.L. Camp, Mumbai - 19</p>
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