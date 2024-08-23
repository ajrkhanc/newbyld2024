import Head from 'next/head'
import  moment from 'moment'

export async function getServerSideProps(context) {    
    const post5 = await fetch('https://everythingdiscblog.vercel.app/api/posts')
    const posts5 = await post5.json()

    const cat = await fetch('https://everythingdiscblog.vercel.app/api/categories')
    const cats = await cat.json()


    const caturl = context.params.blogCat;
    const res = await fetch(`https://everythingdiscblog.vercel.app/api/posts/category/${caturl}`)
    const posts = await res.json()


    return {
        props: {
            posts,
            posts5,
            cats
        },
    }
}

export default function Blog({posts, posts5, cats}){
    return(
        <>
        <Head>
            <title>Blog - Eaglesflightinidia</title>
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
                                <div className="col-md-6 mbb-20">                                    
                                                <div className="blog-item">
                                        <div className="blog-img">
                                            <a href={`../${getpost.posturl}`}><img src={getpost.ImageURL} alt={getpost.ImageAlt}/></a>
                                        </div>
                                        <div className="blog-content">
                                            <h3 className="blog-title"><a href={`../${getpost.posturl}`}>{getpost.Title}</a></h3>
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
                                                <a className="blog-btn" href={`../${getpost.posturl}`}>Read More</a>
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
                                posts5.slice(0, 5).map((getpost) => {
                                return (
                                <div class="recent-post-widget">
                                    <div class="post-img">
                                        <a href={`../${getpost.posturl}`}>
                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt} />
                                        </a>
                                    </div>
                                    <div class="post-desc">
                                        <a href={`../${getpost.posturl}`}>{getpost.Title}</a>
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
                                    <li><a href={`/everythingdisc/blog/category/${getcats.Caturl}`}>{getcats.Name}</a></li>
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