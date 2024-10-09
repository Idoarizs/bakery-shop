// Next Utilities
import Image from "next/image";

// Images
import { images } from "../../assets/index";

export default function NavigationBar() {
  return (
    <nav>
      <div className="list-items">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#catalog">Catalog</a>
      </div>
      <div className="icon">
        <Image src={images.icon} alt="bakery-shop" />
      </div>
      <div className="cta">
        <a href="#testimonial">Testimonial</a>
        <a href="#service">Service</a>

        <div className="btn">
          <a href="">Order Now</a>
        </div>
      </div>
    </nav>
  );
}
