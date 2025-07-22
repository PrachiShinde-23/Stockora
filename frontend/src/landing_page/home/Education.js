import React from 'react';
function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg'style={{width:"90%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mt-5'>Free and Open market education</h1>
                    <p className='mt-4'>Varsity,the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=''style={{textDecoration:"none"}}>Versity →</a>
                    <p className='mt-4'>Trading Q&A,the most active trading and investment community in India for all your market related queries.</p>
                    <a href=''style={{textDecoration:"none"}}>TradingQ&A →</a>
                </div>
            </div>
        </div>
     );
}

export default Education ;