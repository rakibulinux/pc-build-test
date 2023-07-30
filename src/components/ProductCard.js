import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={"/product/" + product?.id}
      className="flex flex-col rounded-lg p-4 shadow-sm shadow-indigo-100"
    >
      <Image
        alt="Home"
        src={product?.image}
        className="h-56 w-full rounded-md object-cover"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="mt-2">
        <div>
          <h2 className="text-lg text-gray-800">{product?.productName}</h2>
        </div>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="flex flex-row gap-3 ">
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">Category: </span>
                {product?.category}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">Price: </span> $
                {product?.price}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">Status: </span> $
                {product?.status}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">Rating: </span>
                {product?.rating}
              </p>
            </div>
          </div>

          {/* <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-800">Rating: </span>
              {product?.rating}
            </p>
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
