import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section py-12 lg:py-20">
      <div className="site-container">
        <div className="row">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 ">
            <div className="map-area">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387198.04724410514!2d-74.60284524235009!3d40.69633363874366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686566930329!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border rounded-lg"
              ></iframe>
            </div>

            <div className="contact-area">
              <div className="form">
                <form>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="single-form-item">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="single-form-item">
                      <label htmlFor="phone">Phone no.*</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+91- 1234 5678 90"
                      />
                    </div>
                  </div>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="single-form-item">
                      <label htmlFor="city">City *</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Your city"
                      />
                    </div>
                    <div className="single-form-item">
                      <label htmlFor="name">Pin code*</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="123456"
                      />
                    </div>
                  </div>

                  <div className="single-form-item">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="single-form-item">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="single-form-item">
                    <input type="checkbox" id="agree" />{" "}
                    <label htmlFor="agree">
                      I agree with your <Link>Trams & Condetion</Link>
                    </label>
                  </div>

                  <div className="single-form-item">
                    <button className="site-btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
