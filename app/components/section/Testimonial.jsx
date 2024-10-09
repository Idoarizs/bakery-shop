import { TestimonialCard } from "..";

// dummy data
import { constants } from "@/app/data/constants";

export default function Testimonial() {
  return (
    <section id="testimonial">
      <h1>
        Customer <span>Testimonial</span>
      </h1>
      <p>
        Our customers love the fresh, delicious flavors we bring to every bite!
        Here’s what some of them have to say about our bakery. From personalized
        cakes to our daily fresh bread, we strive to make every experience
        special. Read their stories and find out why they keep coming back for
        more!
      </p>

      <div className="card-list">
        {constants.testimonial.map((item) => (
          <TestimonialCard
            key={item.id}
            picture={item.picture}
            name={item.name}
            review={item.review}
          />
        ))}
      </div>
    </section>
  );
}
