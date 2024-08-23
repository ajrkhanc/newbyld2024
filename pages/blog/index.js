import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps() {
    const res = await fetch('https://byldblogs.vercel.app/api/posts')
    const posts = await res.json()

    const cat = await fetch('https://byldblogs.vercel.app/api/categories')
    const cats = await cat.json()

    return {
      props: {
        posts, 
        cats,    
      },
    }
  }

export default function Blog({posts, cats}){

    const PopupRegisterd = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonformpopup").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/22/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel1popup").innerHTML = "Thank you for your details. Check your inbox for more details.";
  
                    document.getElementById("showlabel1popup").style.display = "block";
                    setTimeout(function () {
                    document.getElementById("popuphidec").style.display = "none";
                }, 3000);
  
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)
  
    }

    return(
        <>
        <Head>
            <title>Blog - BYLD Group</title>
            <meta name="description" content=""/> 
            <script type="text/javascript" src="https://code.jquery.com/jquery-1.8.2.js"></script>
            <script
            dangerouslySetInnerHTML={{
              __html: `
              $(function() {
               var overlay = $('<div id="overlay"></div>');
               overlay.delay();
               overlay.appendTo(document.body);
               $('.popup').delay(5000).fadeIn();
               $('.close').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
               $('.x').click(function() {
                 $('.popup').hide();
                 overlay.appendTo(document.body).remove();
                 return false;
               });
             });
          `,
            }}
          />
        </Head>
        <div className="rs-inner-blog ptt-40 pbb-50">
                <div className="container-fluid">
                    <div className="row">                        
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                            {
                                        posts.map((getpost)=>{
                                            return(
                                <div className="col-md-6 mbb-20">                                    
                                                <div className="blog-item">
                                        <div className="blog-img">
                                            <a href={getpost.posturl}><img src={getpost.ImageURL} alt={getpost.ImageAlt}/></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><a href={getpost.posturl}>{getpost.Title}</a></h3>
                                            <div className="blog-meta">
                                                <ul className="btm-cate">
                                                    <li>
                                                        <div className="blog-date">
                                                            <i className="fa fa-calendar-check-o"></i> {moment(getpost.ModifiedDate).format('MMMM DD Y')}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="author">
                                                            <i className="fa fa-user-o"></i> {getpost.AuthorFullname}  
                                                        </div>
                                                    </li> 
                                                </ul>
                                            </div>                                            
                                            <div className="blog-button">
                                                <a className="blog-btn" href={getpost.posturl}>Read More</a>
                                            </div>
                                        </div>
                                    </div>                                            
                                </div>
                                );
                            })
                        }
                                
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="widget-area">                                
                                <div className="recent-posts mbb-20">
                                    <div className="widget-title">
                                        <h3 className="title">Recent Posts</h3>
                                    </div>
                                    {
                                posts.slice(0, 5).map((getpost) => {
                                return (
                                <div class="recent-post-widget">
                                    <div class="post-img">
                                        <a href={`/${getpost.posturl}`}>
                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt} />
                                        </a>
                                    </div>
                                    <div class="post-desc">
                                        <a href={`/${getpost.posturl}`}>{getpost.Title}</a>
                                        <span class="date-post"> <i class="fa fa-calendar"></i> {moment(getpost.ModifiedDate).format('DD MMMM Y')} </span>
                                    </div>
                                </div>
                                );
                                })
                                }
                                </div>
                                <div className="categories">
                                    <div className="widget-title">
                                        <h3 className="title">Categories</h3>
                                    </div>
                                    <ul>
                                    {
                                    cats.map((getcats) => {
                                    return (
                                    <li><a href={`/blog/${getcats.Caturl}`}>{getcats.Name}</a></li>
                                    );
                                    })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div> 
                </div>
            </div>

            <div id="popuphidec" class='popup wow fadeInUp delay-0-2s animated animateUP'>
            <div class='cnt223'>
            <a href='' class='close popupclose'>X</a>
               <div className='popupinner'>
                  <div className='popupimg text-center'>
                     <img src="/assets/img/popupimg.png"/>
                     <h3>YOU CAN’T LEARN ANYTHING FROM A POP-UP.</h3>
                     <p>But you can learn a lot from insightful matters by our experts by getting those delivered to your inbox every month.</p>
                  </div>
                  <div className='popupform'>
                  <form id="contactForm" onSubmit={PopupRegisterd}>
                        <div className="row clearfix justify-content-center">                              
                              <div className="col-sm-12">
                                 <div className="form-group mb-0">                                                                                            
                                    <input type="email" id="EmailAddress" name="fmail" className="form-control popupsus" placeholder="Enter Your Email" required />
                                 </div>
                              </div>

                              <div className="col-sm-12">
                              <div className="form-group mb-0">
                                 <input id="submitbuttonformpopup" type="submit" className="theme-btn btnwidth fullbtn" value="SEND ME INSIGHTS"/>
                              </div>
                              <div className="clearfix"></div>
                              <p id="showlabel1popup" className="submitpopup" style={{ display: "none" }}></p>
                        </div>
                        
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
        </>
    )
}