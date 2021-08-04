import React from "react";
import "./Home.css";
// Components
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg'
                    alt='amazon'
                />

                <div className='home__row'>
                    <Product
                        id='123'
                        title="Read The Lean Startup How Today' s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses by Eric Ries"
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={3}
                        price={19.99}
                    />
                    <Product
                        id='1234'
                        title='10th Gen Intel Core i3-1005G1 Processor at 1.2GHz Microsoft Windows 10 in S Mode Backlit Keyboard HD Audio with Stereo Speakers 802.11ac'
                        image='https://m.media-amazon.com/images/I/61TRyx8TzuL._AC_SX355_.jpg'
                        rating={8}
                        price={1000.0}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='12345'
                        title='Red dragon k552 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard with Red Switches for Windows Gaming PC(87 keys, Black)'
                        image='https://m.media-amazon.com/images/I/71cngLX2xuL._AC_SY450_.jpg'
                        rating={9}
                        price={200.5}
                    />
                    <Product
                        id='123456'
                        title='Video Game Chair'
                        image='https://m.media-amazon.com/images/I/81Vuse0XT1L._AC_UL320_.jpg'
                        rating={7}
                        price={(2, 200)}
                    />
                    <Product
                        id='1234567'
                        title='Apple Iphone 12 Pro Max, 128GB, Pacific Blue- Fully Unlocked'
                        image='https://m.media-amazon.com/images/I/71OO+WDhyFL._AC_SX522_.jpg'
                        rating={10}
                        price={3000.0}
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id='12345678'
                        title='JBL Xtreme Portable Wireless Bluetooth (Black)'
                        image='https://m.media-amazon.com/images/I/91HnLmz7bsL._AC_SX355_.jpg'
                        rating={8}
                        price={500.5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
