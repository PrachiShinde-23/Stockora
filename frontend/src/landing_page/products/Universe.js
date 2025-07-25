import React from 'react';


function Universe() {
    return (
<div className='container mt-5'>
            <div className='row '>
                       <h1 className='text-center mb-5'>The Zerodha Universe</h1>     
                <p className='text-center mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/smallcaseLogo.png"/>
                  <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/streakLogo.png" style={{width:"50%"}} />
                  <p className='text-small text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                </div>
                
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/sensibullLogo.svg"/>
                  <p className='text-small text-muted' >Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
                  <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}/>
                  <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.

</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                  <img src="media/images/dittoLogo.png" style={{width:"40%"}}  />
                  <p className='text-small text-muted' >Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
                </div>

              <button className='p-3 btn btn-primary fs-5 mb-5'style={{width:"20%",margin:"0 auto"}}>Signup now</button>                    
                </div>
            </div>
      );
}

export default Universe;