import React from 'react';


function Team () {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className=" text-center"> People</h1>
      </div>
      <div className="row p-3 text-muted " style={{lineHeight:"1.8",fontSize:"1.2em"}}>
         <div className='col-6 p-3 text-center'>
            <img src="media/images/nithinKamath.jpg " style={{borderRadius:"100%",width:"50%"}}/>
            <h4 className='mt-5'>Nithin Kamath</h4>
            <h6>Founder,CEO</h6>
            </div>  
              <div className='col-6 p-3'>
               <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>
<p>Connect on<a href="" style={{textDecoration:"none"}}> Homepage</a> /<a href="" style={{textDecoration:"none"}}> TradingQnA </a>/ <a href="" style={{textDecoration:"none"}}> Twitter</a></p>
                </div> 

      </div>
      <div className='row between'>
        <div className='col four team-container text-center'>
           <img src="media/images/NikhilKamath.png" style={{borderRadius:"100%",width:"50%",height:"50%"}}/>
           <h5>Nikhil Kamath</h5>
           <p class='text-grey '>Co-Founder & CEO</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
           </div>
        </div>
        
        <div className='col four team-container text-center'>
           <img src="media/images/DrKailashNadh.png" style={{borderRadius:"100%",width:"50%",height:"50%"}}/>
           <h5>Dr.Kailash Nadh</h5>
           <p class='text-grey '>CTO</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
           </div>
        </div>
        <div className='col four team-container text-center'>
           <img src="media/images/VenuMadhav.png" style={{borderRadius:"100%",width:"50%"}}/>
           <h5>Venu Madhav</h5>
           <p class='text-grey '>COO</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
           </div>
        </div>
        <div className='row between'>
             <div className='col four team-container text-center'>
           <img src="media/images/HananDelvi.png" style={{borderRadius:"100%",width:"50%",height:"50%"}}/>
           <h5>Hanan Delvi</h5>
           <p class='text-grey '>CCO</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.</p>
           </div>
        </div>
         <div className='col four team-container text-center'>
           <img src="media/images/SeemaPatil.png" style={{borderRadius:"100%",width:"50%",height:"50%"}}/>
           <h5>Seema Patil</h5>
           <p class='text-grey '>Director</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.</p>
           </div>
        </div>
         <div className='col four team-container text-center'>
           <img src="media/images/KarthikRangappa.png" style={{borderRadius:"100%",width:"50%",height:"50%"}}/>
           <h5>Karthik Rangappa</h5>
           <p class='text-grey '>Chief of Education</p>
           <p class="text-grey show- bio">
            <a href="#">
                <i class="icon-angle-up"></i>
            </a>
           </p>
           <div className='team-featured-desc text-left'style={{display:"block;"}}>
            <p>Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.</p>
           </div>
        </div>
     </div>
     </div>
    </div>
    
     );
}

export default Team ;