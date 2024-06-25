import React from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col w-full gap-[10px] lift-on-hover transition-transform duration-300 cursor-pointer fade-in">
      <div className="w-full h-[30vh] rounded-[12px] ">
        <img
          src={product.image}
          className="w-full h-full object-cover rounded-t-[12px]"
          alt="product image"
        />
      </div>
      <div className="flex flex-col gap-[4px] pl-2 pb-2">
        <span className="text-gray-600 font-outfit">{product.category}</span>
        <div className="flex flex-row justify-between ">
          <div className="flex flex-col">
            <h1 className="font-outfit text-secondary font-[700]">
              {product.name}
            </h1>
            <div className="flex flex-row items-center gap-[10px]">
              <span className="font-outfit font-[600]"> {product.price}</span>
              <span className="p-1 px-3 text-[12px] font-[700] bg-gray-100 rounded-[12px]">
                Rwf
              </span>
            </div>
          </div>
          <div className="p-2 h-[30px] flex items-center bg-gray-100 rounded-[12px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5136 20.5H6.16579C3.09943 20.5 0.74703 19.3924 1.41522 14.9348L2.19325 8.89359C2.60515 6.66934 4.02392 5.81808 5.26877 5.81808H15.4473C16.7104 5.81808 18.0468 6.73341 18.5228 8.89359L19.3008 14.9348C19.8683 18.889 17.58 20.5 14.5136 20.5Z"
                stroke="#C9974C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.651 5.5984C14.651 3.21232 12.7167 1.27799 10.3306 1.27799C9.18162 1.27316 8.078 1.72619 7.26381 2.53695C6.44962 3.3477 5.99194 4.44939 5.99194 5.5984"
                stroke="#C9974C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.2963 10.1018H13.2505"
                stroke="#C9974C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.46544 10.1018H7.41968"
                stroke="#C9974C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
