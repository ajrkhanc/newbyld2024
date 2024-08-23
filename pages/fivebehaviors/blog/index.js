import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps() {
    const res = await fetch('https://fivebehaviorsblog.vercel.app/api/posts')
    const posts = await res.json()

    const cat = await fetch('https://fivebehaviorsblog.vercel.app/api/categories')
    const cats = await cat.json()

    return {
      props: {
        posts, 
        cats,    
      },
    }
  }

export default function Blog({posts, cats}){
    return(
        <>
        <Head>
            <title>Blog - Five Behaviors</title>
            <meta name="description" content=""/> 
        </Head>
        <div className="rs-inner-blog ptt-40 pbb-50">
                <div className="container-fluid">
                    <div className="row">                        
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                            {
                                        posts.map((getpost)=>{
                                            return(
                                <div className="col-md-12 mbb-20">                                    
                                                <div className="blog-item">
                                        <div className="blog-img">
                                            <a href={`/fivebehaviors/blog/${getpost.posturl}`}><img src={getpost.ImageURL} alt={getpost.ImageAlt}/></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><a href={`/fivebehaviors/blog/${getpost.posturl}`}>{getpost.Title}</a></h3>
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
                                                <a className="blog-btn" href={`/fivebehaviors/blog/${getpost.posturl}`}>Read More</a>
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
                                        <a href={`/fivebehaviors/blog/${getpost.posturl}`}>
                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt} />
                                        </a>
                                    </div>
                                    <div class="post-desc">
                                        <a href={`/fivebehaviors/blog/${getpost.posturl}`}>{getpost.Title}</a>
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
                                    <li><a href={`/fivebehaviors/blog/category/${getcats.Caturl}`}>{getcats.Name}</a></li>
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
        </>
    )
}