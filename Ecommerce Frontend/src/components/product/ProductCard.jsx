import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  imageSrc,
  imageAlt,
  href,
  name,
  color,
  actual_price,
  discount_price,
}) => {
  return (
    <div className="group relative mx-2 hover:shadow-lg rounded">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="p-2 transition-transform group-hover:-translate-y-2 mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-700">
            <Link href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xs font-normal line-through text-gray-600">
            {actual_price}
          </p>
          <p className="text-sm font-medium text-gray-900">{discount_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
