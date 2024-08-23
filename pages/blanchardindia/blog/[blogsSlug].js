import Link from "next/link"
import Head from "next/head"
import  moment from 'moment'

// export async function getStaticPaths() {
//     const res = await fetch('https://kenblanchardcompanies.in/kenblanchard/wp-json/wp/v2/posts?_embed&per_page=30')
//     const detailposts = await res.json()
//     const paths = detailposts.map((post) => ({
//       params: {
//            blogsSlug: post.slug,
//            leftsidebar: detailposts
//         },
//     }))
//     return { paths, fallback: false }
//   }

  

export async function getServerSideProps(context) {
   const post5 = await fetch('https://kbblogs.vercel.app/api/posts')
   const posts5 = await post5.json()

   const cat = await fetch('https://kbblogs.vercel.app/api/categories')
   const cats = await cat.json()


   const posturl = context.params.blogsSlug;
   const res = await fetch(`https://kbblogs.vercel.app/api/post/${posturl}`)
   const posts = await res.json()

   const getfeedback = await fetch(`https://kbblogs.vercel.app/api/posts/feed/${posturl}`)
   console.log(getfeedback)
   const postfeedback = await getfeedback.json()

   return {
       props: {
           posts,
           posts5,
           cats,
           postfeedback
       },
   }
}


const singleblog = ({ posts, posts5, cats, postfeedback }) => {

  return (
    <>
      <Head>
      <title>{posts.Title}</title>
      <meta name="description" content="Blanchard Research and Training LLP is the leading training provider in South Asia, with expertise in leadership development across hierarchies. Having a global establishment of over 35 years and operational in India since 2008 by Mr Yogesh Sood who is a veteran in business operations and leadership development."/>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={"https://blog.byldgroup.com/blanchardindia/"+posts.posturl} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@blanchard_india" />
      <meta name="twitter:creator" content="@blanchard_india" />
      <meta name="twitter:title" content={posts.Title} />
      <meta name="twitter:description" content="" />
      <meta name="twitter:image" content={posts.ImageURL} />
      <meta property="twitter:url" content={posts.posturl} />
    
      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="en-in" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Blanchard International" />
      <meta property="og:title" content={posts.Title} />
      <meta property="og:description" content="" />
      <meta property="og:image" name="image" content={posts.ImageURL} />
      <meta property="og:url" content={posts.posturl} />

      </Head>
     <div className="inner-banner inner-bg3">
        <div className="container">
            <div className="inner-title text-center">
                <h3>{posts.Title}</h3>
            </div>
        </div>
        <div className="inner-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    </div>

    <div className="blog-details-area pt-100 pb-70">
                       <div className="container">
                          <div className="row">
                             <div className="col-md-8">
                                <div className="blog-article">
                                   <div className="section-title">
                                      <h2>{posts.Title}</h2>
                                      <ul>
                                         <li><i className='bx bx-time'></i>{moment(posts.ModifiedDate).format('DD MMMM Y')}</li>
                                         <li>By <b> {posts.AuthorFullname}</b></li>
                                      </ul>
                                   </div>
                                   <div className="blog-article-img">
                                   <img src={posts.ImageURL} alt={posts.ImageAlt} />
                                   </div>
                                   <div className="article-content" dangerouslySetInnerHTML={{ __html: posts.Content }}></div>
                                   {/* <div className="row">
                                      <div className="col-lg-12">
                                         <div className="comments-wrap">
                                            <ul className="comment-form">
                                               <li>
                                                  <div className="top-content">
                                                     <img width={46} height={46} src={posts.ImageURL} alt={posts.ImageAlt}/>
                                                     <h3>{posts.Author}</h3>
                                                  </div>
                                                  <p>
                                                     {postdetail._embedded.author[0].description}
                                                  </p>
                                               </li>
                                            </ul>
                                         </div>
                                      </div>
                                   </div> */}
                                </div>
                             </div>
                             
                             <div className="col-sm-4">
            <div className="side-bar-area">
               <div className="side-bar-widget">
                  <h3 className="title">Recent Blogs</h3>
                  <div className="widget-popular-post">
                  {
                     posts5.slice(0,5).map((getpost)=>{             
                                 return(
                              <article className="item">
                                 <a href={`/blanchardindia/blog/${getpost.posturl}`} className="thumb">
                                    <span className="full-image cover bg1" role="img">
                                    <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                                    </span>
                                 </a>
                                 <div className="info">
                                    <p><i className='bx bx-time'></i>{moment(getpost.ModifiedDate).format('MMMM DD Y')}</p>
                                    <h4 className="title-text">
                                    <a href={`/blanchardindia/blog/${getpost.posturl}`}>{getpost.Title}</a>
                                    </h4>
                                 </div>
                              </article>
                              );                 
                           })
                        }
                  
                  </div>
               </div>
               <div className="side-bar-widget">
                  <h3 className="title">Categories</h3>
                 
                  <div className="side-bar-categories">
                       <ul>
                           {
                           cats.map((getats)=>{
                              return(
                                 <li><a href={`/blanchardindia/blog/category/${getats.Caturl}`}>{getats.Name}</a></li>
                              )
                           })
                           }
                        </ul>
                  </div> 
               </div>
               
               
         
               
               <div className="side-bar-widget">
                  <h3 className="title">Resources</h3>
                 
                  <div className="side-bar-categories">
                     <ul>
                         
                        <li>
                           <a href="https://blanchardinternational.co.in/ebooks">Ebooks</a>
                        </li>
                        <li>
                           <a href="https://blanchardinternational.co.in/elearning">Elearning</a>
                        </li>
                        <li>
                           <a href="https://blanchardinternational.co.in/podcast">Podcast</a>
                        </li>
                      
                     </ul>
                  </div> 
               </div>
               
               {/* <div className="side-bar-widget">
                  <h3 className="title">Popular Tags</h3>
                  <ul className="side-bar-widget-tag">
                     <li><a href="#">Vision,</a></li>
                  </ul>
               </div> */}

               <div className="side-bar-widget">
                  <h3 className="title">Follow Us On</h3>
                  <ul className="blog-social-link">
                     <li>
                        <a href="https://www.facebook.com/blanchardresearchandtrainingindia" target="_blank">
                           <i className='bx bxl-facebook'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.linkedin.com/company/blanchard-research-and-training-india/" target="_blank">
                           <i className='bx bxl-linkedin'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://twitter.com/blanchard_india" target="_blank">
                           <i className='bx bxl-twitter'></i>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.youtube.com/c/BlanchardinternationalIndia" target="_blank">
                           <i className='bx bxl-youtube'></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

                          </div>
                       </div>
                    </div>
    </>
  )
}

export default singleblog