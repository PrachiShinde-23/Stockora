import React from 'react';

function Hero() {
    return ( 
      
      <section className='container-fluid'id="supportHero">
       
        <div className='p-3' id="supportWrapper">
           <h4>Support Portal</h4> 
           <a href=''>Track Tickets</a>  
        </div>
        <div className=' row p-3'>
            <div className=' col-6'>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg.how do I activate F&O why is my order getting rejected'/><br></br>
               <a href="" style={{textDecoration:"none"}}> Track account opening</a><br></br> <a href=''style={{textDecoration:"none"}}>Track segment activation</a><br></br> <a href=''style={{textDecoration:"none"}}>Intraday margins </a><br></br> <a href='' style={{textDecoration:"none"}}>Kite user manual</a><br></br>
            </div>
            <div className=' col-6 p-5'>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li> <a href=''>Current Takeovers and Delisting -January 2024</a> </li>
                     <li><a href=''>Latest Intraday leverages-MIS & CO</a>  </li>
                </ol>
                
            </div>
           
           
        </div>
      </section>
     );
}

export default Hero;