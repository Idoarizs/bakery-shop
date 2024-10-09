// Next Utilities
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, img, title, price }) {
  return (
    <Link href={`/products/${id}`} className="product-card">
      <div className="img-content">
        <Image src={img} alt={title} />
      </div>
      <div className="detail-content">
        <label>{title}</label>
        <h1>{price}</h1>
      </div>
    </Link>
  );
}
