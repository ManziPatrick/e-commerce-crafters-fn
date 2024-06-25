import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Redux/store';
import { fetchImages } from '../Redux/features/ProductsImagesSlice';

const HeroSection: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { images, loading, error } = useSelector((state: RootState) => state.productsImages);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchImages());
    }, [dispatch]);

    useEffect(() => {
        if (images && images.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1000);

            return() => clearInterval(interval);
        }
    }, [images]);

    console.log("Images from state:", images);

    return (
        <section className="bg-[#03315D] text-white text-xl p-24 flex gap-40 space-x-40">
            <div>
                <h1 className="text-4xl font-bold mb-8">
                    <span className='text-orange-400'>CRAFTERS</span> ONLINE SHOP
                </h1>
                <p className="mb-8">Industry. Lorem Ipsum has been the industry's standard dummy text <br />
                    ever since the 1500s, when industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s, when</p>
                <button className="bg-orange-400 px-6 py-2 rounded-lg mr-16">Shop Now</button>
                <button className="bg-blue-900 px-6 py-2 rounded-lg">Contact Us</button>
            </div>
            <div className="">
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {!loading && !error && (!images || images.length === 0) && <div>No images found.</div>}

                {images && images.length > 0 && (
                    <img src={images[currentImageIndex]} alt="Home Images" className="w-full max-w-md mx-auto h-60" />
                )}
            </div>
        </section>
    );
};

export default HeroSection;
