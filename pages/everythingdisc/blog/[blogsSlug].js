import Link from "next/link"
import Head from "next/head"
import moment from 'moment'

// export async function getServerSideProps() {
//     const res = await fetch('https://yoma-admin.herokuapp.com/api/posts')
//     const detailposts = await res.json()
//     const paths = detailposts.map((post) => ({
//       params: {
//            blogsSlug: post.posturl,
//            leftsidebar: detailposts
//         },
//     }))
//     return { paths, fallback: false }
//   }



export async function getServerSideProps(context) {
    const post5 = await fetch('https://everythingdiscblog.vercel.app/api/posts')
    const posts5 = await post5.json()

    const cat = await fetch('https://everythingdiscblog.vercel.app/api/categories')
    const cats = await cat.json()


    const posturl = context.params.blogsSlug;
    const res = await fetch(`https://everythingdiscblog.vercel.app/api/post/${posturl}`)
    const posts = await res.json()

    const getfeedback = await fetch(`https://everythingdiscblog.vercel.app/api/posts/feed/${posturl}`)
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


const submitFeedback = async (event) => {
    event.preventDefault();
    const url = window.location.href
    const findparams = url.split('/')
    // console.log(findparams[3])
    const name = event.target.name.value;
    const email = event.target.email.value;
    const feedback = event.target.comments.value;
    const posturl = findparams[3];
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://everythingdiscblog.vercel.app/api/feedback/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('feedback=' + feedback + '&name=' + name + '&email=' + email + '&postslug=' + posturl);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            document.getElementById("feebackform").reset()
            document.getElementById("response").innerHTML ="Feedback Submitted"

            setTimeout(function(){
                document.getElementById("response").innerHTML =""
            }, 3000)
        }
    }

    xhr.onerror = function () {
        console.log('error');
    }
};
export default function singleblog({ posts, posts5, cats, postfeedback }) {

    const registerUser = async event => {
        event.preventDefault()
        document.getElementById("submitbuttonform").value = "Submitting form...."
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            console.log(this.responseText);
        }
        xhttp.open("Post", 'https://ajrkhan.xyz/yomamultinational/wp-json/contact-form-7/v1/contact-forms/14/feedback');
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                if (xhttp.status == 200) {
                    document.getElementById("showlabel").innerHTML = "Thank you for submitting your details.";

                    document.getElementById("showlabel").style.display = "block";
                    window.setTimeout(function() {
                       window.location.href = "/thank-you-lp"
                    }, 3000);

                } else {
                    alert('There was a problem with the request.');
                }
            }
        };
        xhttp.send("your-email=" + event.target.fmail.value)

    }

    return (
        <>
            <Head>
                <title>{posts.Title}</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.png" />
                <link rel="canonical" href={"https://blog.byldgroup.com/everythingdisc/"+posts.posturl} />
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@YomaSolutions" />
                <meta name="twitter:creator" content="@YomaSolutions" />
                <meta name="twitter:title" content={posts.Title} />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content={posts.ImageURL} />
                <meta property="twitter:url" content={posts.posturl} />

                {/* Open Graph / Facebook */}
                <meta property="og:locale" content="en-in" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="YOMABusinessSolutions" />
                <meta property="og:title" content={posts.Title} />
                <meta property="og:description" content="" />
                <meta property="og:image" name="image" content={posts.ImageURL} />
                <meta property="og:url" content={posts.posturl} />

            </Head>
            
            <div class="rs-inner-blog pt-50 pb-50 md-pt-70 md-pb-70 singlepcss">
                <div class="container custom">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 order-last">
                            <div class="widget-area">
                            <div class="recent-posts mb-50">
                                <div class="widget-title">
                                    <h3 class="title">Recent Posts</h3>
                                </div>
                                {
                                posts5.slice(0, 5).map((getpost) => {
                                return (
                                <div class="recent-post-widget">
                                    <div class="post-img">
                                        <a href={`/everythingdisc/blog/${getpost.posturl}`}>
                                        <img src={getpost.ImageURL} alt={getpost.ImageAlt} />
                                        </a>
                                    </div>
                                    <div class="post-desc">
                                        <a href={`/everythingdisc/blog/${getpost.posturl}`}>{getpost.Title}</a>
                                        <span class="date-post"> <i class="fa fa-calendar"></i> {moment(getpost.ModifiedDate).format('DD MMMM Y')} </span>
                                    </div>
                                </div>
                                );
                                })
                                }
                            </div>
                            <div class="categories">
                                <div class="widget-title">
                                    <h3 class="title">Categories</h3>
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
                        <div class="col-lg-8 pr-35 md-pr-15 md-mt-50">
                            <div class="row">
                            <div class="col-lg-12">
                                <div class="blog-details">
                                    <div class="bs-img">
                                        <a><img src={posts.ImageURL} alt={posts.ImageAlt} /></a>
                                        <h3>{posts.Title}</h3>
                                    </div>
                                    <div class="blog-full">
                                        <ul class="single-post-meta">
                                        <li>
                                            <span class="p-date"><i class="fa fa-calendar-check-o"></i> {moment(posts.ModifiedDate).format('DD MMMM Y')}</span>
                                        </li>
                                        <li>
                                            <span class="p-date"> <i class="fa fa-user-o"></i> {posts.AuthorFullname}</span>
                                        </li>
                                        </ul>
                                        <div className="bloglinkh" dangerouslySetInnerHTML={{ __html: posts.Content }}></div>
                                        <div class="comment-note d-none">
                                        <div className="comments-wrap mt-55 wow fadeInUp delay-0-2s animated">
                                            <h3 className="comment-title mb-55">Comments</h3>
                                            {
                                            postfeedback.map((postfeedback)=>{
                                            return(
                                            <div className="comment-item">
                                                <div className="author-image">
                                                    <img src="/assets/img/icon/commentuser.png" alt="Author"/>
                                                </div>
                                                <div className="comment-details">
                                                    <div className="name-date">
                                                    <h5>{postfeedback.user}</h5>
                                                    <span className="date">{moment(postfeedback.PublishDate).format('DD MMMM Y')}</span>
                                                    </div>
                                                    <p>{postfeedback.comment}</p>
                                                    {/* <a href="#" className="reply">Reply Commets</a> */}
                                                </div>
                                            </div>
                                            )
                                            })
                                            }
                                        </div>
                                        <div id="form-messages"></div>
                                        <form id="feebackform" onSubmit={submitFeedback} className="comment-form">
                                            <h4>Share FeedBack</h4>
                                            <fieldset>
                                                <div class="row">
                                                    <div class="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required />
                                                    </div>
                                                    <div class="col-lg-6 mb-35 col-md-6 col-sm-6">
                                                    <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required />
                                                    </div>
                                                    <div class="col-lg-12 mb-30">
                                                    <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Write Message" required></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-0">
                                                    <input id="submitbuttonform" type="submit" className="theme-btn btnwidth" value="Submit Feedback" />
                                                </div>
                                            </fieldset>
                                        </form>
                                        <p class="feedbackcolor" id="response"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}
