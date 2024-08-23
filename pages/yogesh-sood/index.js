import Head from 'next/head'


export async function getServerSideProps() {
    const res = await fetch('https://yogeshsood.vercel.app/api/posts')
    const posts = await res.json()
    

    return {
        props: {
            posts
        },
    }
}

export default function Books({ posts }) {
    return (
        <>
            <Head>
                <title>Yogesh Sood</title>
            </Head>
            <section class="about-section workshop-hero">
                <div class="">
                    <img class="yimg100" src="/assets/img/yogesh-sood/ys-sood.jpg" alt="books" />
                </div>
            </section>

            <section className='ysbg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9'>
                            <p><i>“The new norms of life are emerging at personal, team, organizational, and country levels. Darwin’s law will play out again. Only the ones able to adapt will survive. The race is on. Let us participate in the same.”
                                – Yogesh Sood (CMD, BYLD Group)</i></p>
                        </div>
                        <div className='col-sm-3'>
                            <div className='lbt'>
                                <a target="_blank" href="https://www.linkedin.com/in/yogesh-sood/?originalSubdomain=in"><i className="fa fa-linkedin"></i> Follow CMD Yogesh Sood</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='ptt-50 pbb-50'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='ysirl'>
                                <a href='/yogesh-sood'><img class="yimg100" src="/assets/img/yogesh-sood/yhsir.jpg" alt="yhsir" />
                                <p>Yogesh Sood</p>
                                </a>
                                <p>CHAIRMAN AND MANAGING DIRECTOR</p>
                                <p><a href='mailto:yogeshs@byldgroup.com'>yogeshs@byldgroup.com</a></p>
                            </div>

                        </div>
                        <div className='col-md-9'>
                            <div className='ysirr'>
                                <h3>Latest from the CEO</h3>

                                {
                                    posts.map((getpost) => {
                                        return (
                                            <div className='blocr'>
                                                <div className='bl1'>
                                                    <h4><a href={`/yogesh-sood/${getpost.posturl}`}>{getpost.Title}</a></h4>
                                                    <div dangerouslySetInnerHTML={{__html:getpost.Description}}></div>
                                                    <a href={`/yogesh-sood/${getpost.posturl}`} className='ybtnc'>Read More</a>
                                                </div>
                                                <div className='bl2'>
                                                <img src={getpost.ImageURL} alt={getpost.ImageAlt}/>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}