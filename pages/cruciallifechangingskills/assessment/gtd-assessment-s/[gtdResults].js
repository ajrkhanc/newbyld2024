import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'



export async function getServerSideProps(context) {
    const caturl = context.params.gtdResults;

    const res = await fetch(`https://clblogs.vercel.app/api/muser/${caturl}`)
    const result = await res.json()



    return {
        props: {
            result
        },
    }
}

export default function Home({ result }) {


    //   const q1 = i1;
    //   const q2 = i2;
    //   const q3 = i3;
    //   const q4 = i4;
    //   const q5 = i5;
    //   const q6 = i6;
    //   const q7 = i7;
    //   const q8 = i8;
    //   const q9 = i9;
    //   const q10 = i10;
    //   const q11 = i11;
    //   const q12 = i12;
    //   const q13 = i13;
    //   const q14 = i14;
    //   const q15 = i15;
    //   const q16 = i16;
    //   const q17 = i17;
    //   const q18 = i18;
    //   const q19 = i19;
    //   const q20 = i20;

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    return (
        <>

            <Head>
                <title>GTD Assessment Result | Crucial Learning</title>
                <meta name="description" content="The GTD Assessment is a twenty-question quiz that helps reveal some of your tendencies with managing workflow. See what you know and what you need to improve on." />
            </Head>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <button class="submit btnnewc" onClick={downloadAsPDF}> Download Result </button>
                    </div>
                    {
                        result.slice(0, 1).map((results) => {
                            var px = '%'
                            var overall = parseInt(results.q1) + parseInt(results.q2) +
                                parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) +
                                parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) +
                                parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) +
                                parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12) +
                                parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15) +
                                parseInt(results.q16) + parseInt(results.q17) + parseInt(results.q18) +
                                parseInt(results.q19) + parseInt(results.q20)

                            var overallresult = overall + px
                            var overallbar = overall


                            var Capture = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) +
                                parseInt(results.q4)
                            var capturresult = 5 * Capture + px
                            var capturbar = 5 * Capture

                            var Clarify = parseInt(results.q5) + parseInt(results.q6) +
                                parseInt(results.q7) + parseInt(results.q8)
                            var Clarifyresult = 5 * Clarify + px
                            var Clarifybar = 5 * Clarify

                            var Organize = parseInt(results.q9) +
                                parseInt(results.q10) + parseInt(results.q11) + parseInt(results.q12)
                            var Organizeresul = 5 * Organize + px
                            var Organizebar = 5 * Organize

                            var ReflectEngage = parseInt(results.q13) + parseInt(results.q14) + parseInt(results.q15) +
                                parseInt(results.q16)
                            var ReflectEngageresult = 5 * ReflectEngage + px
                            var ReflectEngagebar = 5 * ReflectEngage

                            var RenewThroughReview = parseInt(results.q17) + parseInt(results.q18) +
                                parseInt(results.q19) + parseInt(results.q20)
                            var RenewThroughReviewresult = 5 * RenewThroughReview + px
                            var RenewThroughReviewbar = 5 * RenewThroughReview


                            return (

                                <div class="recent-post-widget paddi20" id='demo'>
                                    <div className='namecenter text-center'><h3 className='ptop'>Hi {results.name}</h3></div>

                                    <div class="component-wrapper assessment" id="gtd-results">
                                        <div class="component-content">
                                            <div class="assessment-left">

                                                <div class="assessment-result-block">
                                                    <div className='displayassesmetc'>
                                                        <div className='assesmetrr'><h3 className='ptop'>Your Results</h3></div>

                                                        <div className='assesmetrr overloaded'>
                                                            <div className='overloadedcolor sameheighthw'></div>
                                                            <span>Overloaded</span>
                                                        </div>
                                                        <div className='assesmetrr struggling'>
                                                            <div className='strugglingcolor sameheighthw'></div>
                                                            <span>Struggling</span>
                                                        </div>
                                                        <div className='assesmetrr managing'>
                                                            <div className='managingcolor sameheighthw'></div>
                                                            <span>Managing</span>
                                                        </div>
                                                        <div className='assesmetrr doingwell'>
                                                            <div className='doingwellcolor sameheighthw'></div>
                                                            <span>Doing Well</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <p>Our research found that individuals with strong GTD habits are 18 times less likely to say they feel overwhelmed because of tasks that are looming and might crash, and 14 times less likely to say they worry a lot about whether they've completely everything they need to do. Being more productive in the GTD way doesn't mean more stress, it means less stress.</p>
                                            </div>
                                            <div class="assessment-right">



                                                <div class="assessment-result-block">
                                                    <h3>Overall Score</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (overallbar <= 30)
                                                                    return <div class="result-bar bgred" style={{ width: overallresult }}></div>
                                                                if (overallbar <= 55)
                                                                    return <div class="result-bar yellobg" style={{ width: overallresult }}></div>

                                                                if (overallbar <= 80)
                                                                    return <div class="result-bar orangebg" style={{ width: overallresult }}></div>
                                                                else (overallbar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: overallresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="assessment-result-block">
                                                    <h3>Capture</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (capturbar <= 25)
                                                                    return <div class="result-bar bgred" style={{ width: capturresult }}></div>
                                                                if (capturbar <= 50)
                                                                    return <div class="result-bar yellobg" style={{ width: capturresult }}></div>

                                                                if (capturbar <= 75)
                                                                    return <div class="result-bar orangebg" style={{ width: capturresult }}></div>
                                                                else (capturbar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: capturresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (() => {
                                                            if (capturbar <= 25)
                                                                return <p>A low score means you’re experiencing mental overload. Your current system isn’t robust enough to keep track of everything coming at you. As a result, too many of your to-dos fall through the cracks, causing you worry and stress. Improvement will require you to stop relying on your memory. Instead, select a small number of capture tools where you record and collect all of your incoming tasks.</p>
                                                            if (capturbar <= 50)
                                                                return <p>A struggling score reflects that you are overwhelmed with your work. It means your system is not robust enough to keep track of everything that comes at you. Thus, you are finding it difficult to tick your to-dos, making you worry and more stressed. There is always a scope for improvement. So, go for a capture tool where you can record all of your incoming tasks.</p>

                                                            if (capturbar <= 75)
                                                                return <p>A moderate score means you can catch and document your tasks, to-dos, and commitments. As a result, you don’t tend to lose track of things, but you worry that you might have. You need to make use of a few capture tools where you record all of your incoming tasks.</p>
                                                            else (capturbar <= 100)
                                                            return <p>A high score means you are good at catching and documenting your tasks, to-dos, and commitments. As a result, you don’t lose track of things or worry that you might have. Your success stems from disciplined use of a few capture tools where you record all of your incoming tasks.</p>
                                                        })()
                                                    }

                                                </div>

                                                <div class="assessment-result-block">
                                                    <h3>Clarify</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (Clarifybar <= 25)
                                                                    return <div class="result-bar bgred" style={{ width: Clarifyresult }}></div>
                                                                if (Clarifybar <= 50)
                                                                    return <div class="result-bar yellobg" style={{ width: Clarifyresult }}></div>

                                                                if (Clarifybar <= 75)
                                                                    return <div class="result-bar orangebg" style={{ width: Clarifyresult }}></div>
                                                                else (Clarifybar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: Clarifyresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (() => {
                                                            if (Clarifybar <= 25)
                                                                return <p>A low score means you’re feeling buried under a mountain of tasks and to-dos. Your current system for handling your email inbox isn’t good enough to keep you on top of your work. As a result, your time is spent putting out fires, and you’re rarely able to relax. Improvement will require you to stop using your email inbox as a storage bin. Instead, review new items every day, and determine the next action to take.</p>
                                                            if (Clarifybar <= 50)
                                                                return <p>Your score suggests that you are tussling with a plethora of tasks and to-dos. Your current system of handling your email inbox isn't good enough to systemize and prioritise your work. As a result, your time is wasted on surprises at work, and you are constantly on your toes. You need to be diligent with your email inbox and ensure that new items are reviewed daily, and your next action is planned for the same.
                                                                </p>

                                                            if (Clarifybar <= 75)
                                                                return <p>A moderate score means you are able to empty your email/ inbox generally. As a result, you can keep track of tasks and generally feel on top of your work. You should review your email/inbox every day and determine clear next actions for each task.</p>
                                                            else (Clarifybar <= 100)
                                                            return <p>A high score means you are good at emptying your email and inbox. As a result, you keep current on tasks, and feel on top of your work. Your success stems from reviewing your email/inbox every day, and determining clear next actions for each task.</p>
                                                        })()
                                                    }

                                                </div>

                                                <div class="assessment-result-block">
                                                    <h3>Organize</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (Organizebar <= 25)
                                                                    return <div class="result-bar bgred" style={{ width: Organizeresul }}></div>
                                                                if (Organizebar <= 50)
                                                                    return <div class="result-bar yellobg" style={{ width: Organizeresul }}></div>

                                                                if (Organizebar <= 75)
                                                                    return <div class="result-bar orangebg" style={{ width: Organizeresul }}></div>
                                                                else (Organizebar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: Organizeresul }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (() => {
                                                            if (Organizebar <= 25)
                                                                return <p>A low score means you struggle to keep track of all the assignments and to-dos you are juggling. Your current system for organizing tasks doesn’t do enough to remind you at the right times and places. As a result, you experience anxiety and drop the ball more often than you should. Improvement will require you to change the way you use task lists and calendars.</p>
                                                            if (Organizebar <= 50)
                                                                return <p className='oryellopb'>Your score suggests that you are struggling to keep track of your tasks and assignments. Your current system is not well-equipped to remind you of your tasks in a timely manner. As a result, you are anxious and tend to have mishaps at times. You should improve your use of task lists and calendars.</p>

                                                            if (Organizebar <= 75)
                                                                return <p>A moderate score means you can organise and track all of your assignments and to-dos but maybe not effectively in a high-pressure work environment. As a result, you might find a few surprises. You need to be able to make smart use of task lists and your calendar to perform better.</p>
                                                            else (Organizebar <= 100)
                                                            return <p>A high score means you are good at organizing and tracking all of your assignments and to-dos. As a result, you always know where you stand; no surprises. Your success stems from your smart use of task lists and your calendar.</p>
                                                        })()
                                                    }

                                                </div>

                                                <div class="assessment-result-block">
                                                    <h3>Reflect & Engage</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (ReflectEngagebar <= 25)
                                                                    return <div class="result-bar bgred" style={{ width: ReflectEngageresult }}></div>
                                                                if (ReflectEngagebar <= 50)
                                                                    return <div class="result-bar yellobg" style={{ width: ReflectEngageresult }}></div>

                                                                if (ReflectEngagebar <= 75)
                                                                    return <div class="result-bar orangebg" style={{ width: ReflectEngageresult }}></div>
                                                                else (ReflectEngagebar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: ReflectEngageresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (() => {
                                                            if (ReflectEngagebar <= 25)
                                                                return <p>A low score means you’re frequently distracted, instead of being truly present and focused. Your current system for evaluating tasks doesn’t give you confidence in your priorities. As a result, your attention is divided between what you’re currently doing and what you think you should be doing. Improvement will require you to take the time to check your lists and calendar before taking action.</p>
                                                            if (ReflectEngagebar <= 50)
                                                                return <p>A struggling score here means that you are constantly distracted instead of being truly present and focused. Consequently, your attention is split between what you are currently doing and what you think you should be doing. Take a look at your checklists and calendars before taking any action.</p>

                                                            if (ReflectEngagebar <= 75)
                                                                return <p>A moderate score means you are capable of setting priorities and using them to guide your actions in a normal scenario. As a result, you feel confident that you are working on the right task most of the time. In fact, you are able to identify and prioritise in most situations. You can improve by checking your lists and calendar as you prioritise your tasks.</p>
                                                            else (ReflectEngagebar <= 100)
                                                            return <p>A high score means you are good at setting priorities and using them to guide your actions. As a result, you feel confident you are working on the right the task at any given time. Even more important, you feel good about the tasks you are not doing in the moment. Your success stems from checking your lists and calendar as you prioritize your tasks.</p>
                                                        })()
                                                    }

                                                </div>



                                                <div class="assessment-result-block">
                                                    <h3>Renew Through Review</h3>
                                                    <div class="result-bar-wrapper">

                                                        {
                                                            (() => {
                                                                if (RenewThroughReviewbar <= 25)
                                                                    return <div class="result-bar bgred" style={{ width: RenewThroughReviewresult }}></div>
                                                                if (RenewThroughReviewbar <= 50)
                                                                    return <div class="result-bar yellobg" style={{ width: RenewThroughReviewresult }}></div>

                                                                if (RenewThroughReviewbar <= 75)
                                                                    return <div class="result-bar orangebg" style={{ width: RenewThroughReviewresult }}></div>
                                                                else (RenewThroughReviewbar <= 100)
                                                                return <div class="result-bar greenbg" style={{ width: RenewThroughReviewresult }}></div>
                                                            })()
                                                        }


                                                    </div>
                                                    <div class="result-bar-labels">
                                                        <div className='row'>
                                                            <div className='col'>Overloaded</div>
                                                            <div className='col'>Struggling</div>
                                                            <div className='col'>Managing</div>
                                                            <div className='col'>Doing Well</div>
                                                        </div>
                                                    </div>
                                                    {
                                                        (() => {
                                                            if (RenewThroughReviewbar <= 25)
                                                                return <p>A low score means you’re experiencing disconnects between your daily life and what you truly care about. Your current system for staying aligned isn’t tracking with your values. As a result, you disappoint yourself and others. Improvement will require you to stop, take stock, and realign on a regular basis.</p>
                                                            if (RenewThroughReviewbar <= 50)
                                                                return <p>Your score reflects that you are finding it difficult to stay connected with your daily life and your passion for work. Your current system is unable to keep you fully aligned with your long-term goals. You will need to work on your ability to stop, take stock and realign on a daily basis.</p>

                                                            if (RenewThroughReviewbar <= 75)
                                                                return <p>A moderate score means you are capable of managing your actions with your long-term goals, priorities, and values. However, you can improve by taking the time to step back, reflect, and align your actions with your journey.</p>
                                                            else (RenewThroughReviewbar <= 100)
                                                            return <p>A high score means you are good at aligning your actions with your long-term goals, priorities, and values. As a result, you feel on track, on target, and accomplished. Your success comes from taking the time to step back, reflect, and align your actions with your personal journey.</p>
                                                        })()
                                                    }

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>



        </>
    )
}



