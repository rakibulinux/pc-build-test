import Image from "next/image";
import React from "react";
import Reviews from "./Reviews";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-10">
        <div className="overflow-hidden">
          <Image
            width={500}
            height={500}
            className="w-full h-full"
            src={product.image}
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="badge badge-secondary">{product.category}</div>
          <h2 className="text-4xl font-semibold">{product.productName}</h2>

          <div className="card-actions mt-2">
            <div className="badge badge-outline">
              Status: {product.status.toString()}
            </div>
            <div className="badge badge-outline">
              Rating: {product.averageRating}
            </div>
            <div className="badge badge-outline">Price: ${product.price}</div>
          </div>
          <p>{product.description}</p>
          <h2 className="font-medium text-lg">Key Features:</h2>
          <ul className="md:ml-5">
            <li className="list-disc">Brand: {product.keyFeatures?.brand}</li>
            <li className="list-disc">Model: {product.keyFeatures?.model}</li>
            <li className="list-disc">Socket: {product.keyFeatures?.socket}</li>
            <li className="list-disc">Cores: {product.keyFeatures?.cores}</li>
            <li className="list-disc">
              Threads: {product.keyFeatures?.threads}
            </li>
            <li className="list-disc">
              Base Clock: {product.keyFeatures?.baseClock}
            </li>
            <li className="list-disc">
              Max Boost Clock: {product.keyFeatures?.maxBoostClock}
            </li>
            <li className="list-disc">Cache: {product.keyFeatures?.cache}</li>
            <li className="list-disc">TDP: {product.keyFeatures?.tdp}</li>
            <li className="list-disc">
              Architecture: {product.keyFeatures?.architecture}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {product.reviews.map((review) => (
          <Reviews review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
