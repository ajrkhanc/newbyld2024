import Head from 'next/head'

export default function Books(){
    return(
        <>
        <Head>
            <title>Books - Crucial Life-Changing Skills</title>  
        <link rel="canonical" href="https://byldgroup.com/cruciallifechangingskills/books" />
        </Head>
        <section class="about-section workshop-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 contact-title"> 
                        <h1>Buy Our Books</h1>                       
                     </div>

                     <div class="col-md-4 workshop-col"> 
                       <div class="bookshd text-center">                            
                            <img class="center-image bookimgw mbb-30" src="/classets/img/cc1-first-chapter.jpg" alt="books" />
                            <h6 className='bookprice'>Rs: 625</h6>                           
                            <a class="booksbtn" href='#'> Buy Now </a>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="bookshd text-center">                            
                            <img class="center-image bookimgw mbb-30" src="/classets/img/cc2-first-chapter.jpg" alt="books" />          
                            <h6 className='bookprice'>Rs: 675</h6>                           
                            <a class="booksbtn" href='#'> Buy Now </a>
                       </div>
                    </div>

                    <div class="col-md-4 workshop-col"> 
                       <div class="bookshd text-center">                            
                            <img class="center-image bookimgw mbb-30" src="/classets/img/inf-firstchapter.jpg" alt="books" />          
                            <h6 className='bookprice'>Rs: 875</h6>                           
                            <a class="booksbtn" href='#'> Buy Now </a>
                       </div>
                    </div>

                </div>
            </div>
        </section>

        
   
    
        </>
    )
}
