"use client";

// React Hooks
import { useEffect, useState } from "react";

// Next Utilities
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock Data
import { constants } from "../../data/constants";

// Icons
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    if (id && !isNaN(parseInt(id))) {
      const foundProduct = constants.catalog.find(
        (prod) => prod.id === parseInt(id)
      );
      if (foundProduct) {
        setProduct(foundProduct);
        const foundDetail = constants.productDetails.find(
          (detail) => detail.id === foundProduct.productDetailId
        );
        setProductDetail(foundDetail);
      }
    }
  }, [id]);

  return (
    <div className="product-detail">
      {product && (
        <>
          <Image src={product.image} alt={product.title} />
          <div className="detail-content">
            <div className="description">
              <label>
                <strong>{productDetail.category}</strong>
              </label>
              <h1>{product.title}</h1>

              <div className="rating">
                {/* Full Stars */}
                {Array(Math.floor(productDetail.rating))
                  .fill()
                  .map((_, index) => (
                    <AiFillStar key={index} style={{ color: "black" }} />
                  ))}

                {/* Half Star (for ratings like 4.5, 4.8, etc.) */}
                {productDetail.rating % 1 !== 0 && (
                  <AiFillStar
                    key="half"
                    style={{ color: "black", clipPath: "inset(0 50% 0 0)" }}
                  />
                )}

                {/* Rating value displayed */}
                <p>
                  <strong>{productDetail.rating}</strong>
                </p>
              </div>

              <p>{productDetail.description}</p>
              <p>Stock: {productDetail.stock}</p>
              <p>Ingredients: {productDetail.ingredients.join(", ")}</p>
            </div>

            <div className="pricing">
              <h1>{product.price}</h1>
            </div>
            <div className="cta">
              {/* Buy */}
              <a href="#">Buy Now</a>

              {/* Favorite */}
              <a href="#">
                <AiOutlineHeart />
              </a>

              {/* Cart */}
              <a href="#">
                <HiOutlineShoppingCart />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
