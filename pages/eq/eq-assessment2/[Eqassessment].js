import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Eqassessment;

    const res = await fetch(`https://byldblogs.vercel.app/api/dtci-assessment/${caturl}`)
    const result = await res.json()
    return {
        props: {
            result
        },
    }
}

export default function result({ result }) {

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    if (!Object.keys(result).length) {
        return <div className='container'>
            <div className='row'>
                <div class="col-lg-12 contact-title">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/eq/eq-assessment2'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>Result | EQ+ Assessment</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
                <link rel="stylesheet" type="text/css" href="/assets/css/eq.css" />
            </Head>


            <section className='assesmentpart2 aalpading0 dtcibgc'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <button class="submit btnnewc" onClick={downloadAsPDF}> Download Your Report </button>
                        </div>
                        <div className='col-md-1'></div>
                        <div className='col-md-10'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var q1 = results.q1;
                                    var q2 = results.q2;
                                    var q3 = results.q3;
                                    var q4 = results.q4;
                                    var q5 = results.q5;
                                    var q6 = results.q6;
                                    var q7 = results.q7;
                                    var q8 = results.q8;
                                    var q9 = results.q9;
                                    var q10 = results.q10;
                                    var q11 = results.q11;
                                    var q12 = results.q12;
                                    var q13 = results.q13;
                                    var q14 = results.q14;
                                    var q15 = results.q15;
                                    var q16 = results.q16;
                                    var q17 = results.q17;
                                    var q18 = results.q18;
                                    var q19 = results.q19;
                                    var q20 = results.q20;

                                    var px = '%'
                                    var SelfAwareness = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5);
                                    var SelfManagement = parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10);
                                    var SocialAwareness = parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15);
                                    var RelationshipManagement = parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20);
                                    var overall = SelfAwareness + SelfManagement + SocialAwareness + RelationshipManagement;
                                    var overin10 = overall / 2

                                    var rusultbar = result + px




                                    return (

                                        <div className='demodonload dresult bgcwww' id='demo'>
                                            <div className='row'>
                                                <div className='col-sm-12 pad00 text-center'>
                                                    <div className='dtcilogol'>
                                                        <img src="/assets/img/byld-logo.svg" alt="" />
                                                    </div>
                                                </div>

                                                <div className='col-sm-6 pad00'>
                                                    <div className='dtcilogor'>

                                                    </div>
                                                </div>


                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12 pad00'>
                                                    <div className='sectd'>
                                                        <div className='imgbox'>
                                                            <img src="/assets/img/dt-11.jpg" alt="" />
                                                        </div>

                                                        <div className='dtciun'>
                                                            {/* <h2>E<span>Q+</span>Extended Report</h2>
                                                            <h2>Extended Report</h2> */}
                                                            <span className='lsbtn'>{results.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-9 pad00'>
                                                    <div className='byldlc ptt-100'>
                                                        <img className='ptt-50' src="/assets/img/byld-logo.svg" alt="" />
                                                    </div>
                                                    <div className='tblcon text-center'>
                                                        <span>Table of Contents</span>
                                                    </div>
                                                    <div className='ccmdc'>
                                                        <h4>My <span className='clred'>E</span><span className='clorg'>Q</span>+ Scores ............................................. 3</h4>
                                                        <h4>What the Scores Mean? ................................ 4</h4>
                                                        <h4>Highest and lowest Scores areas ................... 5</h4>
                                                        <h4>Strategies to improve <span className='clred'>E</span><span className='clorg'>Q</span>+ Action plan ........... 6</h4>
                                                    </div>

                                                    <div className='ccmdc ptt-30 pbb-60 pabb1'>
                                                        <h5>1. Improve <span className='clorg'>Self-Awareness</span></h5>
                                                        <h5>2. Improve <span className='clorg'>Self-Management</span></h5>
                                                        <h5>3. Improve <span className='clorg'>Social-Awareness</span></h5>
                                                        <h5>4. Improve <span className='clorg'>Relationship Management</span></h5>
                                                    </div>
                                                </div>
                                                <div className='col-sm-3 tmmcolor pad00'></div>
                                            </div>




                                            <div className='row hfor'>
                                                <div className='col-sm-12 pad00'>
                                                    <div className='byldlc cclmc'>
                                                        <img className='' src="/assets/img/byld-logo.svg" alt="" />
                                                    </div>
                                                    <div className='ccmdc ptt-40'>
                                                        <h4>My E<span className='clorg'>Q</span>+ Scores</h4>
                                                        <p>
                                                            Thank you for completing the <span className='clred'>E</span><span className='clorg'>Q</span>+ Self Appraisal. Please bring these scores to the learning program. This program will teach you about emotional intelligence (EQ), reveal what your current skill levels are, and tell you what you can do to improve.
                                                        </p>

                                                        <p>
                                                            <b>This section will:</b><br></br>Provide you with your overall EQ score and your scores for each of the four EQ skills. You can connect with us to revisit your assessment to get change in scores.
                                                        </p>
                                                    </div>
                                                    <div className='boximg ptt-20'>
                                                        <img src="/assets/img/dia.png" alt="" />
                                                    </div>

                                                    <div className='ccmdc ptt-50 ccmdc2'>
                                                        <h3 className='pbb-10'><span className='clorg'>Definitions</span></h3>
                                                        <h3>Self-awareness</h3>
                                                        <p>
                                                            Can I identify my own emotions and tendencies as they happen?
                                                        </p>
                                                        <h3>Self-management </h3>
                                                        <p>
                                                            Can I manage my emotions and behavior to a positive outcome?
                                                        </p>
                                                        <h3>Social awareness</h3>
                                                        <p>
                                                            Can I accurately identify your emotions or tendencies as I interact with you or a group?
                                                        </p>
                                                        <h3>Relationship management</h3>
                                                        <p>
                                                            Can I manage the interactions I have with others constructively and to a positive outcome?
                                                        </p>
                                                    </div>



                                                    <div className='ccmdc ptt-5 ccmdc2'>
                                                        <div className='byldlc cclmc'>
                                                            <img className='' src="/assets/img/byld-logo.svg" alt="" />
                                                        </div>
                                                        <h2 className='pbb-0'>What do the Score mean:</h2>
                                                        <table className='tblx1'>
                                                            <tr>
                                                                <td className='ajoot1'>
                                                                    Scores on the EQ+ Appraisal come from a "normed" sample. That means your scores are based on a comparison to the global population to discover where you fall in each skill area. Read the following descriptions to better understand what your scores mean about your current skill level.
                                                                </td>
                                                                <td width='100px' className='ajoot2 text-center'>{overin10}{px}</td>
                                                            </tr>
                                                        </table>

                                                    </div>

                                                    <div className='ccmdc ptt-10 ccmdc2'>
                                                        <table className='tblx1'>
                                                            <tr>
                                                                <th>EQ+ Dimension</th>
                                                                <th width="100px" className='text-center'>Score</th>
                                                            </tr>
                                                            <tr>
                                                                <td><b>Self-Awareness:</b> Your ability to accurately perceive your emotions and stay aware of them as they happen. This includes keeping on top of how you tend to respond to specific situations and certain people.</td>
                                                                <td className='text-center'>{SelfAwareness * 2}{px}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Self-Management: Your ability to use awareness of your emotions to stay flexible and positively direct your behavior. This means managing your emotional reactions to all situations and people.</td>
                                                                <td className='text-center'>{SelfManagement * 2}{px}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Social Awareness: Your ability to accurately pick up on emotions in other people and get what is really going on. This often means understanding what other people are thinking and feeling, even if you don't feel the same way.</td>
                                                                <td className='text-center'>{SocialAwareness * 2}{px}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Relationship Management: Your ability to use awareness of your emotions and the emotions of others to manage interactions successfully. Letting emotional awareness guide clear communication and effective handling of conflict.</td>
                                                                <td className='text-center'>{RelationshipManagement * 2}{px}</td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row tmmcolor mtt-10'>
                                                <div className='col-sm-12 pad00'>
                                                    <div className='tblccl'>
                                                        <table className='tblcx2'>
                                                            <tr>
                                                                <th width="80px">Score</th>
                                                                <th>Meaning</th>
                                                            </tr>

                                                            <tr>
                                                                <td className='text-center'>90%-100%</td>
                                                                <td>
                                                                    <h5>A STRENGTH TO CAPITALIZE ON</h5>
                                                                    <p>
                                                                        These scores are much higher than average and indicate a noteworthy strength. These 90-100 strengths probably come naturally to you or exist because you have worked hard to develop them. Seize every opportunity to use these emotionally intelligent behaviours to maximize your success. You are highly competent in this skill, so work to capitalize on it and achieve your potential.
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='text-center'>80%-89%</td>
                                                                <td>
                                                                    <h5>A STRENGTH TO BUILD ON</h5>
                                                                    <p>
                                                                        This score is above average. However, there are a few situations where you don't demonstrate emotionally intelligent behaviour. There are many things you've done well to 80-89 receive this score and a few that could be better with some practice. Study the behaviours for which you received this score and consider how you can polish your skills.
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='text-center'>70%-79%</td>
                                                                <td>
                                                                    <h5>WITH A LITTLE IMPROVEMENT, THIS COULD BE A STRENGTH</h5>
                                                                    <p>
                                                                        You are aware of some of the behaviours for which you received this score, and you are 70-79 doing well with them. Other emotionally intelligent behaviours in this group are holding you back. Lots of people start here and see a big improvement in their emotional intelligence once it's brought to their attention. Use this opportunity to discover the difference and improve in the areas where you don't do as well.
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='text-center'>60%-69%</td>
                                                                <td>
                                                                    <h5>SOMETHING YOU SHOULD WORK ON</h5>
                                                                    <p>
                                                                        This is an area where you sometimes demonstrate emotionally intelligent behaviour but not usually. You may be starting to let people down. Perhaps this is a skill area that doesn't always come naturally for you or that you don't make use of. With a little improvement in this skill, your credibility will go way up.
                                                                    </p>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td className='text-center'>59% and below</td>
                                                                <td>
                                                                    <h5>A CONCERN YOU MUST ADDRESS</h5>
                                                                    <p>
                                                                        This skill area is either a problem for you, you don't value it, or you didn't know it was 59 and below important. The bad news is your skills in this area are limiting your effectiveness. The good news is this discovery and choosing to do something about it will go a long way in improving your emotionally intelligent behaviour.
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className='row'>
                                                <div className='col-sm-12 pad00'>
                                                    <div className='ccmdc ptt-20 ccmdc2 ajcbg'>
                                                        <div className='byldlc cclmc marrcv'>
                                                            <img className='' src="/assets/img/byld-logo.svg" alt="" />
                                                        </div>
                                                        <div className='ajwh'>
                                                            <h4>My Highest and lowest Score Behaviors</h4>
                                                            <p>
                                                                Given below are the items that you chose as lowest (Claimed areas of Development) and highest <br></br>(Claimed areas of Strength)
                                                            </p>
                                                        </div>

                                                        <table className='tblx1'>
                                                            <tr>
                                                                <td width='200px' className='text-center'>Areas to Work on</td>
                                                                <td className='cckv'>
                                                                    {
                                                                        (() => {
                                                                            if (q1 <= 5)
                                                                                return <span>I can recognize my emotions as I experience them.</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q2 <= 5)
                                                                                return <span>I find it hard to name the emotion(s) as I am experiencing them.</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q3 <= 5)
                                                                                return <span>I know my strengths and weaknesses</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q4 <= 5)
                                                                                return <span>I am aware of time(s) and situations that trigger off reaction(s) in me.</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q5 <= 5)
                                                                                return <span>I ask for feedback from others on what I do well and what can I change</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q6 <= 5)
                                                                                return <span>I lose my temper when I feel frustrated</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q7 <= 5)
                                                                                return <span>I know how to calm myself, when I feel anxious or upset</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q8 <= 5)
                                                                                return <span>I find it difficult to engage, when I feel frustrated or unhappy</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q9 <= 5)
                                                                                return <span>I often feel, I don’t enjoy my work</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q10 <= 5)
                                                                                return <span>I find it hard to resist the impulse to respond when I feel strong emotions</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q11 <= 5)
                                                                                return <span>People have told me that I’m a good listener</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q12 <= 5)
                                                                                return <span>I ask people for feedback on what I do well, and how I can improve</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q13 <= 5)
                                                                                return <span>I use active listening skills when people speak to me</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q14 <= 5)
                                                                                return <span>I find it difficult to read other people’s emotions</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q15 <= 5)
                                                                                return <span>I find it hard to spot the mood in the room when things are not going well</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q16 <= 5)
                                                                                return <span>I find it hard to get people to share what their real motives are</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q17 <= 5)
                                                                                return <span>I avoid conflict and negotiations</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q18 <= 5)
                                                                                return <span>I set long-term goals and review my progress regularly</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q19 <= 5)
                                                                                return <span>I struggle to build rapport with others</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q20 <= 5)
                                                                                return <span>I find it hard to get everyone onboard with solutions that would satisfy all</span>
                                                                        })()
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-center'>Strength to build on</td>
                                                                <td className='cckv'>

                                                                    {
                                                                        (() => {
                                                                            if (q1 == 7 || q1 == 8)
                                                                                return <span>I can recognize my emotions as I experience them.</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q2 == 7 || q2 == 8)
                                                                                return <span>I find it hard to name the emotion(s) as I am experiencing them.</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q3 == 7 || q3 == 8)
                                                                                return <span>I know my strengths and weaknesses</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q4 == 7 || q4 == 8)
                                                                                return <span>I am aware of time(s) and situations that trigger off reaction(s) in me.</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q5 == 7 || q5 == 8)
                                                                                return <span>I ask for feedback from others on what I do well and what can I change</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q6 == 7 || q6 == 8)
                                                                                return <span>I lose my temper when I feel frustrated</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q7 == 7 || q7 == 8)
                                                                                return <span>I know how to calm myself, when I feel anxious or upset</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q8 == 7 || q8 == 8)
                                                                                return <span>I find it difficult to engage, when I feel frustrated or unhappy</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q9 == 7 || q9 == 8)
                                                                                return <span>I often feel, I don’t enjoy my work</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q10 == 7 || q10 == 8)
                                                                                return <span>I find it hard to resist the impulse to respond when I feel strong emotions</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q11 == 7 || q11 == 8)
                                                                                return <span>People have told me that I’m a good listener</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q12 == 7 || q12 == 8)
                                                                                return <span>I ask people for feedback on what I do well, and how I can improve</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q13 == 7 || q13 == 8)
                                                                                return <span>I use active listening skills when people speak to me</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q14 == 7 || q14 == 8)
                                                                                return <span>I find it difficult to read other people’s emotions</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q15 == 7 || q15 == 8)
                                                                                return <span>I find it hard to spot the mood in the room when things are not going well</span>
                                                                        })()
                                                                    }
                                                                    {
                                                                        (() => {
                                                                            if (q16 == 7 || q16 == 8)
                                                                                return <span>I find it hard to get people to share what their real motives are</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q17 == 7 || q17 == 8)
                                                                                return <span>I avoid conflict and negotiations</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q18 == 7 || q18 == 8)
                                                                                return <span>I set long-term goals and review my progress regularly</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q19 == 7 || q19 == 8)
                                                                                return <span>I struggle to build rapport with others</span>
                                                                        })()
                                                                    }

                                                                    {
                                                                        (() => {
                                                                            if (q20 == 7 || q20 == 8)
                                                                                return <span>I find it hard to get everyone onboard with solutions that would satisfy all</span>
                                                                        })()
                                                                    }

                                                                    {/* {
                                                                        (() => {
                                                                            if (q12 == 7 || q12 == 8)
                                                                                return <span>12</span>
                                                                        })()
                                                                    } */}


                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>


                                                    <div className='ccmdc ptt-10 ccmdc2'>
                                                    <div className='byldlc cclmc marrcv'>
                                                            <img className='' src="/assets/img/byld-logo.svg" alt="" />
                                                        </div>
                                                        <h2 className='pbb-10'>My 30 days Action Plan</h2>
                                                        <h3>Please check those behaviors</h3>
                                                        <p>
                                                            Strategies to improve EI: Please tick mark the actions you plan to take for the next 30 days to consciously work upon improving your EQ. Consider the score that is the lowest, as that will provide the fastest gains for you.
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <div className='rs-estimate ptt-20 ajp'>
                                                            <h4 className='tclbg'>Self-Awareness: Practice keeping a finger on the pulse of my emotions.</h4>
                                                            <ul className="estimate-info mtt-5">
                                                                <li>Watch for my “triggers”</li>
                                                                <li>Stay focused on emotional “data gathering” in my daily life </li>
                                                                <li>Record tendencies in my behavior as I see them</li>
                                                                <li>Track my tendencies in my head as I go through my day</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='rs-estimate ptt-20 ajp'>
                                                            <h4 className='tclbg'>Self-Management: Practice managing my emotions.</h4>
                                                            <ul className="estimate-info mtt-5">
                                                                <li>Tell myself that there are no bad guys, just a bad situation</li>
                                                                <li>Let others finish speaking during difficult conversations</li>
                                                                <li>Buy some time to think (ask for it)</li>
                                                                <li>Breathe and clear my mind</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='rs-estimate ptt-20 ajp'>
                                                            <h4 className='tclbg'>Social Awareness: Practice seeing the whole picture. </h4>
                                                            <ul className="estimate-info mtt-5">
                                                                <li>Don’t take notes at my next meeting</li>
                                                                <li>Look around at each person’s face once and then twice</li>
                                                                <li>Listen for the volume and tone of people’s voices</li>
                                                                <li>During a meeting, listen and ask questions</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className='rs-estimate ptt-20 ajp'>
                                                            <h4 className='tclbg'>Relationship Management: Meet my needs, their needs, and our needs.</h4>
                                                            <ul className="estimate-info mtt-5">
                                                                <li>Focus on improving a key relationship in my social network</li>
                                                                <li>Select 2-3 actions steps to take with one key person on my list</li>
                                                                <li>Schedule a lunch with one key person to discuss something important</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-sm-12'>
                                                    <div className='imgbox ajjcvb ptt-100'>
                                                        <img src="/assets/img/lasts.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>



                                            {/* <div className='cochingformat'>
                                                <div className='dlw'>
                                                    <h4 className='yresultc'><span>Y</span>OUR <span>R</span>EPORT</h4> <a onClick={downloadAsPDF}><i className="fa fa-download" aria-hidden="true"></i></a>
                                                </div>
                                                <p>Your survey responses provide a snapshot, or data from a point in time, about how you perceive your coaching. This is a unique opportunity to gain insights into how you see your effectiveness as a coach.</p>
                                            </div> */}



                                        </div>


                                    )



                                })


                            }



                        </div>
                    </div>
                </div> <br></br>
            </section>


        </>
    )
}



