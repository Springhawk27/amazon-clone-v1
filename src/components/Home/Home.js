import React from 'react';
import './Home.css'
import banner_image from '../../images/banner/amazon-banner.jpg'
import product_chair from '../../images/products/product_chair.jpg'
import product_printer from '../../images/products/product_printer.jpg'
import product_benq from '../../images/products/product_benq.jpg'
import product_headphone from '../../images/products/product_headphone.jpg'
import product_roku from '../../images/products/product_roku.jpg'
import product_logitech from '../../images/products/product_logitech.jpg'
import product_samsung from '../../images/products/product_samsung.jpg'

import Product from '../Product/Product';

const Home = () => {

    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="banner__image"
                    src={banner_image} alt="" />

                <div className="home__row">
                    <Product
                        id="a1b2c3d4e1"
                        title="Amazon Basics High-Back Bonded Leather Executive Office Computer Desk Chair - Black"
                        price={122.11}
                        img={product_chair}
                        rating={4}
                    ></Product>
                    <Product
                        id="a1b2c3d4e2"
                        title="Fujitsu ScanSnap iX1600 Versatile Cloud Enabled Document Scanner for Mac or PC, Black"
                        price={399.99}
                        img={product_printer}
                        rating={5}
                    ></Product>
                    <Product
                        id="a1b2c3d4e3"
                        title="BenQ 27 Inch IPS Monitor | 1080P | Proprietary Eye-Care Tech | Ultra-Slim Bezel | Adaptive Brightness for Image Quality | Speakers | GW2780,Black"
                        price={180.50}
                        img={product_benq}
                        rating={5}
                    ></Product>
                    <Product
                        id="a1b2c3d4e4"
                        title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black"
                        price={189.99}
                        img={product_headphone}
                        rating={4}
                    ></Product>


                </div>
                <div className="home__row">
                    <Product
                        id="a1b2c3d4e5"
                        title="Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable"
                        price={28.98}
                        img={product_roku}
                        rating={4}
                    ></Product>
                    <Product
                        id="a1b2c3d4e5"

                        title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black"
                        price={109.00}
                        img={product_logitech}
                        rating={4}
                    ></Product>

                </div>
                <div className="home__row">
                    <Product
                        id="a1b2c3d4e7"
                        title="SAMSUNG Odyssey G7 Series 32-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC32G75TQSNXZA)
                        "
                        price={749.99}
                        img={product_samsung}
                        rating={5}
                    ></Product>
                </div>
            </div>

        </div>
    );
};

export default Home;