import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const BestDeals: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

<<<<<<< HEAD

  const productId = "21acca30-db38-4d71-8022-266ae7305f10"; 

=======
  const productId = "73046fd0-bf56-4e14-8b35-adf4067d023h"; 
>>>>>>> a9f5771 (adjusted responsiveness)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/readProduct/${productId}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const imageUrl = data.image;
        setImageUrl(imageUrl);
      } catch (error: any) {
        setError("Failed to load image");
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [productId]);
  const { t } = useTranslation();
  return (
<<<<<<< HEAD
    <section className="bg-primary text-white p-8 sm:p-16 md:pl-24 flex flex-col md:flex-row items-center justify-between sm:items-center justify-center gap-10 sm:gap-2 font-outfit text-lg md:text-xl sm:text-sm h-screen">
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl sm:text-xl md:text-2xl font-bold mb-4 md:mb-8">
          Best Samsung TV Deals
        </h2>
=======
    <section className="bg-primary text-white p-8 sm:p-16 md:pl-24 flex flex-col md:flex-row items-center justify-between sm:items-center justify-center md:gap-10 sm:gap-0 font-outfit text-lg md:text-xl sm:text-sm sm:h-auto md:h-screen">
      <div className="md:w-1/2 sm:mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold mb-4 md:mb-8">Best Samsung TV Deals</h2>
>>>>>>> a9f5771 (adjusted responsiveness)
        <p className="text-base sm:text-sm md:text-xl mb-4 md:mb-6">
          Discover the latest Samsung TV deals at unbeatable prices. Whether you
          are upgrading your home entertainment setup or looking for the perfect
          gift, we've got you covered.
        </p>
        <p className="text-base sm:text-sm md:text-xl font-semibold mb-4 md:mb-6">
          From &nbsp;&nbsp; 678,453 &nbsp;
          <span className="bg-sky-400 text-black p-1 px-3 text-xs sm:text-sm rounded-xl">
            Rwf
          </span>
        </p>
        <button className="bg-secondary px-4 py-2 sm:px-6 sm:py-2 rounded-lg text-base sm:text-sm">
          {t("Shop Now")}
        </button>
      </div>
      <div className="md:w-1/2">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <img
            src={imageUrl!}
            alt="Samsung TV"
            className="w-full h-60 sm:h-full object-contain rounded-lg"
          />
        )}
      </div>
    </section>
  );
};

export default BestDeals;
