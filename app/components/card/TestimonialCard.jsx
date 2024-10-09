import Image from "next/image";

export default function TestimonialCard({ picture, name, review }) {
  return (
    <div className="testimonial-card">
      <div className="picture">
        <img src={picture} alt={name} />
      </div>
      <div className="review">
        <label>{name}</label>
        <p>
          <q>{review}</q>
        </p>
      </div>
    </div>
  );
}
