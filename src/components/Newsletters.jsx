import Newsletter3 from '../assets/images/Newsletters/DIAGRAMS/Newsletter3.png';

const Newsletter = () => {

      return (
    
        <div>
     <div className="mb-5">
 <div >
 
               <div className="row d-flex justify-content-center align-items-end mb-4" >
               <div className="col-sm-12 col-md-5 col-lg-5 justify-content-center align-items-center ">
               <div className="graphics-carousel-body justify-content-center align-items-center">
          <div className="graphics-carousel-title text-black">
            <h1 className='mb-2' style={{color:'#4a016c'}}>Characteristics of an Effective Newsletter</h1>
            
         <h5>Key elements that engage readers, convey important information, and promote brand identity.</h5>
         
       <p>These elements include a captivating subject line, a clear and concise header, engaging content with well-structured sections, visually appealing images, and compelling calls to action.</p>
        </div>
        </div>
      </div>
       <div className="col-sm-12 col-md-7 col-lg-7 justify-content-center align-items-center ">
 <img src={Newsletter3} alt=" diagram" className='w-100' />
       </div>
         </div>
         </div>
   
      </div>
    </div>
      
      );    

}

export default Newsletter;