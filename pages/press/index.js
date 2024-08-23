import Head from 'next/head'
import moment from 'moment'

export async function getServerSideProps() {
  const res = await fetch('https://byldnewspr.vercel.app/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts
    },
  }
}

export default function Press({ posts }) {
  return (
    <>
      <Head>
        <title>News Feed</title>
    <link rel="canonical" href="https://byldgroup.com/press" />
        <meta name="description" content="" />
        <link rel="stylesheet" type="text/css" href="/assets/css/homemodule.css" />
      </Head>

      <div class="rs-breadcrumbs pressbgc">
        <div class="container">
          <div class="breadcrumb-container theme1 wow fadeInUp delay-0-2s animated animateUP">
            <ul>
              <li>
                <a href="/">
                  <span>Home</span>
                </a>
                <span class="separator">/</span>
              </li>
              <li>
                <a href="/press">
                  <span>News Feed</span>
                </a>
              </li>
            </ul>
          </div>

          <div className='row'>
            <div className='col-sm-8'>
              <div class="breadcrumbs-inner">
                <span class="watermark ">BYLD</span>
                <h1 class="page-title wow fadeInUp delay-0-2s animated animateUP">
                  News Feed
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rs-inner-blog ptt-40 pbb-50 positionrelative">
        <div className="container custom">
          <div className="row zindx">

            {
              posts.map((allpr) => {
                return (
                  <div className="col-sm-4 mbb-20">
                    <div className="blog-item">
                      <div className="blog-img">
                        <a target="_blank" href={allpr.PostNewURL}><img src={allpr.ImageURL} alt={allpr.ImageURL} /></a>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title"><a target="_blank" href={allpr.PostNewURL} className='eventsboxtitle'>{allpr.Title}</a></h3>
                        <div className="blog-meta">
                          <ul className="btm-cate">
                            <li className='pdate'>
                              <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> <span>Published: </span>{moment(allpr.ModifiedDate).format('MMMM DD Y')}
                              </div>
                              <div className="author">
                                <i className="fa fa-building-o"></i> <span>Published In:</span> {allpr.ImageAlt}
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="blog-button">
                          <a className="blog-btn" target="_blank" href={allpr.PostNewURL}>Continue Reading</a>
                          {/* {
                                        (()=>{
                                            if(sss)
                                            return<h1>hii</h1>
                                            else
                                            return<h4>sdfsdfsdf</h4>
                                        })()
                                    } */}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className='clearfix'></div>
          <div className='solutionarrowbox2'>
            <img src="/assets/img/homeb/bluearrow1.png" />
          </div>

        </div>
      </div>
    </>
  )
}
