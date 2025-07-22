import React from 'react';


function Pricing () {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-5'>Unbeatable Pricing</h1>
                    <p className='mb-3'>We pioneered the concept of discount broking the price transparency in India.Flat fees and no hidden charges.</p>
                    <div>
                        <a href=''style={{textDecoration:"none"}}>See Price</a>
                    </div>
                </div>
                
                 <div className='col-2'></div>
                  <div className='col-6 text-center mb-5'>
                    <div className='row'>
                        <div className='col p-3 border'>
                            <h1 className='mb-4'> ₹0</h1>
                            <p>Free equity delivery and <br></br>direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-4'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
     );
}

export default Pricing ;