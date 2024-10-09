// UI Component
import { CustomerServiceCard } from "..";

// Data
import { constants } from "../../data/constants";

export default function Contact(  ) {
  return (
    <section id="contact">
      <div className="container">
        <div className="main-content">
          <div className="detail-contact">
            <h1>Contact Us</h1>
            <p>
              We’d love to hear from you! Whether you’re craving something
              sweet, have a special request for a custom cake, or just want to
              learn more about our bakery, we’re here for you. Don’t hesitate to
              reach out with any questions, feedback, or inquiries about orders,
              and we’ll get back to you as soon as possible. Your satisfaction
              is our top priority!
            </p>

            <p>bakeryshop@bakermail.id</p>
            <p>321-221-231</p>
            <a href="#">Customer Support</a>
          </div>

          <div className="customer-service">
            {constants.customerService.map((service) => (
              <CustomerServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="second-content">
          <div className="text">
            <h1>Get in Touch</h1>
            <p>You can reach us anytime!</p>
          </div>

          <div className="message-item">
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="name" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <input type="text" name="message" />
          </div>

          <div className="submit">
            <input type="submit" name="send" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="content">
          <p>© 2024 Bakery Shop. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
