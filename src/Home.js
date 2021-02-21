import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                />

                <div className="home__row">
                    <Product
                        id="234"
                        title="mouse"
                        price="29.00"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-244337D24F250BSI._V533746475_.jpg"
                        rating={5}
                    />
                    <Product
                        id="23423"
                        title="Roku Express  HD Streaming Media Player with High Speed HDMI Cable and Simple Remote"
                        price="29.99"
                        image="https://images-na.ssl-images-amazon.com/images/I/41Y15o6btZL.jpg"
                        rating={5}
                    />
                </div>
                
                <div className="home__row">
                <Product
                id="31321"
                title="Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black (CMK16GX4M2B3200C16)"
                price="84.99"
                image="https://m.media-amazon.com/images/I/51kHiPeTSmL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="213123"
                title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)"
                price="58.49"
                image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />
                <Product
                id="12123"
                title="Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging (ST2000DM008)"
                price="52.99"
                image="https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
                />
                </div>

                <div className="home__row">
                <Product
                id="123123"
                title=""
                price=""
                image=""
                rating={5}
                />
                </div>



            </div>
        </div>
    )
}

export default Home
