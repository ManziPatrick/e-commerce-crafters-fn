import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../Redux/productsPage/categorySlice";
import { RootState } from "../Redux/store";
import Navbar from "../Components/navBar";
import Search from "../Components/ProductsPage/searchProduct";
import { useSelectProductsQuery } from "../Redux/productsPage/productSlice";
import ProductCard from "../Components/ProductsPage/productCard";
import Pagination from "../Components/ProductsPage/pagination";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
import LoadingFrame from "../Constants/frameLoader";

interface Product {
  productId: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Products = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search);
  const activeCategory: string | null = useSelector(
    (state: RootState) => state.category.activeCategory
  );
  const { data: products, isLoading, isError } = useSelectProductsQuery({});
  // console.log(products)
  const productsPerPage = 9;
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const handleCategoryClick = (category: string) => {
    // console.log('event clicked')
    dispatch(setActiveCategory(category));
  };

  const filteredProducts = activeCategory
    ? products?.filter(
        (product: Product) =>
          product.category === activeCategory &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products?.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const categories = [
    {
      id: "001",
      label: "Electronics",
      value: "Electronics",
    },
    {
      id: "002",
      label: "Food",
      value: "Food",
    },
    {
      id: "003",
      label: "Fruits",
      value: "Fruits",
    },
    {
      id: "004",
      label: "Mechanism",
      value: "Mechanism",
    },
    {
      id: "005",
      label: "Sport Kit",
      value: "Sport Kit",
    },
    {
      id: "006",
      label: "Clothing",
      value: "Clothing",
    },
    {
      id: "007",
      label: "Books",
      value: "Books",
    },
    {
      id: "008",
      label: "Furniture",
      value: "Furniture",
    },
    {
      id: "009",
      label: "Toys",
      value: "Toys",
    },
    {
      id: "010",
      label: "Stationery",
      value: "Stationery",
    },
    {
      id: "011",
      label: "Cars",
      value: "Cars",
    },
    {
      id: "012",
      label: "Shoes",
      value: "Shoes",
    },
  ];
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-[20px] px-10 p-6 mb-20">
        <div className="flex flex-col-reverse gap-4 justify-between items-center md:flex-row">
          <div className="flex flex-row gap-[14px] items-center font-outfit">
            <span
              className="text-base text-gray-400 hover:text-primary cursor-pointer md:text-[18px]"
              onClick={() => dispatch(setActiveCategory(null))}
            >
              Products
            </span>
            <span className="text-black font-[800]">/</span>
            <span className="text-base text-black font-[800] md:text-[18px]">
              {activeCategory || "All Products"}
            </span>
          </div>
          <Search />
        </div>

        <div className="flex flex-col gap-[20px] md:flex-row">
          <div className="flex flex-col gap-[10px] w-full md:w-1/4">
            <h1 className="text-[16px] font-[700] md:text-lg">Categories</h1>
            <ul className="flex gap-4 flex-row overflow-auto md:flex-col custom-scrollbar">
              {categories.map((item) => {
                const isActive = activeCategory === item.value;
                return (
                  <li
                    key={item.id}
                    className={`text-[14px] font-outfit text-gray-500 ${
                      isActive ? "text-secondary" : "hover:text-primary"
                    } cursor-pointer md:text-lg`}
                    onClick={() => handleCategoryClick(item.value)}
                  >
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[30px] w-full ">
            {isLoading ? (
              Array.from({ length: 9 }).map((_, index) => (
                <LoadingFrame key={index} />
              ))
            ) : filteredProducts?.length === 0 ? (
              <div className=" flex justify-center items-center col-span-2 lg:col-span-3">
                <h2 className="text-lg font-poppins text-secondary md:text-xl lg:text-2xl">
                  No Products Available
                </h2>
              </div>
            ) : (
              <>
                {currentProducts?.map((product: Product, index: number) => {
                  return (
                    <ProductCard key={product.productId} product={product} />
                  );
                })}
              </>
            )}
          </div>
        </div>
        <Pagination
          totalProducts={filteredProducts?.length || 0}
          productsPerPage={productsPerPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
