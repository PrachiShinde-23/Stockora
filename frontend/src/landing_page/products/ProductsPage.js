import React from 'react';
import Hero from './Hero';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Universe  from './Universe';
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <Leftsection imageURL="media/images/kite.png"productName="Kite"productDescripition="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."tryDemo=""learnMore=""googlePlay=""appStore=""/>
        <Rightsection imageURL="media/images/console.png" productName="Console" productDescripition="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=""/>
        <Leftsection imageURL="media/images/coin.png"productName="Coin"productDescripition="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."tryDemo=""learnMore=""googlePlay=""appStore=""/>
        <Rightsection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDescripition="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="" />
        <Leftsection imageURL="media/images/varsity.png"productName="Varsity mobile"productDescripition="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."tryDemo=""learnMore=""googlePlay=""appStore=""/>
        
<p className='text-center mb-5'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech </a>blog.</p>


        <Universe/>
        </>
     );
}

export default ProductsPage;