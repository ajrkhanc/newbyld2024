// import Head from 'next/head'
// import Link from 'next/link'
// import Slider from "react-slick";


// export default function Books(){

    


//     return(
//         <>
//           <Head>
//             <title>Books - BYLD Group</title>
//             <link rel="canonical" href="https://byldgroup.com/books" />
//             <meta name="description" content="Explore Our Library Crucial Conversations First Chapter Crucial Accountability First Chapter Influencer First Chapter The Power of Habit Book Online Management and Leadership Resources Measuring the Impact and ROI of Leadership Training 7 Ways Poor Leaders Are Costing Your Company Money 3 Fatal Mistakes Managers Make When Coaching Their Teams When It Comes to Customer… Continue reading Books"/> 
//           </Head>
            
//             <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-12">
//                            <div className="">
//                                <div className="sec-title3 mbb-35">
//                                     <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
//                                     <div className="heading-border-line center-style"></div>
//                                </div>                             
//                             </div>
//                         </div>
                        
//                         <div className="col-sm-3">
//                            <div className="innervideoshd">
//                                <a href='https://payments.byldgroup.com' target='_blank'>
//                                <img src='/assets/img/books/crucialconversations.svg' alt="books"/>
//                               <div className='book-details'>
//                               <div className='title'>Crucial Conversations First Chapter</div>
//                               </div>

//                               <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                               <div className='price'>Rs.419.00/-</div>
//                               <a href='https://payments.byldgroup.com' target='_blank' class="ebookbtn mt-0">Buy Now</a>
//                               </div>
//                                </a>
//                             </div>
//                         </div>

//                         <div className="col-sm-3">
//                            <div className="innervideoshd">
//                                <a href='https://payments.byldgroup.com' target='_blank'>
//                                <img src='/assets/img/books/crucialaccountability.svg' alt="books"/>

//                                <div className='book-details'>
//                               <div className='title'>Crucial Accountability First Chapter</div>
//                               </div>

//                               <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                               <div className='price'>Rs.642.00/-</div>
//                               <a href='https://payments.byldgroup.com' target='_blank' class="ebookbtn mt-0">Buy Now</a>
//                               </div>

                               
//                                </a>
//                             </div>
//                         </div>

//                         <div className="col-sm-3">
//                            <div className="innervideoshd">
//                                <a href='https://payments.byldgroup.com' target='_blank'>
//                                <img src='/assets/img/books/influencer.svg' alt="books"/>
//                                <div className='book-details'>
//                               <div className='title'>Influencer First Chapter</div>
//                               </div>

//                               <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                               <div className='price'>Rs.742.00/-</div>
//                               <a href='https://payments.byldgroup.com' target='_blank' class="ebookbtn mt-0">Buy Now</a>
//                               </div>

                            
//                                </a>
//                             </div>
//                         </div>
                      

//                     </div>
//                 </div>                
//             </div>


            
//         </>
//     )
// }



// import Head from 'next/head'
// import { useState, useEffect } from 'react';

// export default function Books() {
//     const [prices, setPrices] = useState({
//         crucialConversations: 419,
//         crucialAccountability: 642,
//         influencer: 742
//     });

//     return (
//         <>
//             <Head>
//                 <title>Books - BYLD Group</title>
//                 <link rel="canonical" href="https://byldgroup.com/books" />
//                 <meta name="description" content="Explore Our Library Crucial Conversations First Chapter Crucial Accountability First Chapter Influencer First Chapter The Power of Habit Book Online Management and Leadership Resources Measuring the Impact and ROI of Leadership Training 7 Ways Poor Leaders Are Costing Your Company Money 3 Fatal Mistakes Managers Make When Coaching Their Teams When It Comes to Customer… Continue reading Books"/> 
//             </Head>
            
//             <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-12">
//                             <div className="">
//                                 <div className="sec-title3 mbb-35">
//                                     <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
//                                     <div className="heading-border-line center-style"></div>
//                                 </div>                             
//                             </div>
//                         </div>
                        
//                         <div className="col-sm-3">
//                             <div className="innervideoshd">
//                                 <a href={`https://payments.byldgroup.com?amount=${prices.crucialConversations}`} target='_blank'>
//                                     <img src='/assets/img/books/crucialconversations.svg' alt="books"/>
//                                     <div className='book-details'>
//                                         <div className='title'>Crucial Conversations First Chapter</div>
//                                     </div>

//                                     <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                                         <div className='price'>Rs.{prices.crucialConversations}/-</div>
//                                         <a href={`https://payments.byldgroup.com?amount=${prices.crucialConversations}`} target='_blank' className="ebookbtn mt-0">Buy Now</a>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="col-sm-3">
//                             <div className="innervideoshd">
//                                 <a href={`https://payments.byldgroup.com?amount=${prices.crucialAccountability}`} target='_blank'>
//                                     <img src='/assets/img/books/crucialaccountability.svg' alt="books"/>
//                                     <div className='book-details'>
//                                         <div className='title'>Crucial Accountability First Chapter</div>
//                                     </div>

//                                     <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                                         <div className='price'>Rs.{prices.crucialAccountability}/-</div>
//                                         <a href={`https://payments.byldgroup.com?amount=${prices.crucialAccountability}`} target='_blank' className="ebookbtn mt-0">Buy Now</a>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>

//                         <div className="col-sm-3">
//                             <div className="innervideoshd">
//                                 <a href={`https://payments.byldgroup.com?amount=${prices.influencer}`} target='_blank'>
//                                     <img src='/assets/img/books/influencer.svg' alt="books"/>
//                                     <div className='book-details'>
//                                         <div className='title'>Influencer First Chapter</div>
//                                     </div>

//                                     <div className='d-flex justify-content-between align-items-center text-center p-3'>
//                                         <div className='price'>Rs.{prices.influencer}/-</div>
//                                         <a href={`https://payments.byldgroup.com?amount=${prices.influencer}`} target='_blank' className="ebookbtn mt-0">Buy Now</a>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>                
//             </div>
//         </>
//     );
// }





import { useState } from 'react';
import Head from 'next/head';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

export default function Books() {
    const [modal, setModal] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        gstNumber: 'null',
        entityName: 'null',
        address: 'null',
        panNumber: 'null',
        gst: 'no',  // default value
        company: ''
    });
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    const toggle = () => setModal(!modal);

    // Handle the Buy Now click and set the price dynamically
    const handleBuyNow = (price) => {
        setSelectedPrice(price);
        toggle();
    };

    // Handle form field changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Validate form fields
    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.contact) errors.contact = 'Phone is required';
        // if (!formData.gstNumber) errors.gstNumber = 'GST Number is required';
        // if (!formData.entityName) errors.entityName = 'Entity Name is required';
        // if (!formData.address) errors.address = 'Address is required';
        // if (!formData.panNumber) errors.panNumber = 'PAN Number is required';
        // if (!formData.company) errors.company = 'Company is required';
        return errors;
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        // Extract the amount value from the selected price, ensure it's a number and format it
        let amount = selectedPrice.replace('Rs.', '').replace('/-', '').trim();
        amount = amount ? parseFloat(amount).toFixed(2) : '1000.00'; // Default to '1000.00' if no amount is provided

        // Build the payment URL with query parameters
        const paymentUrl = `https://payments.byldgroup.com/Razorpay/EagleFlight?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&contact=${encodeURIComponent(formData.contact)}&GstNumber=${encodeURIComponent(formData.gstNumber)}&EntityName=${encodeURIComponent(formData.entityName)}&Amount=${amount}&Address=${encodeURIComponent(formData.address)}&PanNumber=${encodeURIComponent(formData.panNumber)}&gst=${encodeURIComponent(formData.gst)}&company=${encodeURIComponent(formData.company)}`;

        // Log the URL for debugging
        console.log('Payment URL:', paymentUrl);

        try {
            // Redirect to payment page
            window.open(paymentUrl, '_blank'); // Open in new tab
        } catch (error) {
            console.error('Error during payment initiation:', error);
            setSubmitError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Head>
                <title>Books - BYLD Group</title>
                <link rel="canonical" href="https://byldgroup.com/books" />
                <meta
                    name="description"
                    content="Explore Our Library Crucial Conversations First Chapter Crucial Accountability First Chapter Influencer First Chapter The Power of Habit Book Online Management and Leadership Resources Measuring the Impact and ROI of Leadership Training 7 Ways Poor Leaders Are Costing Your Company Money 3 Fatal Mistakes Managers Make When Coaching Their Teams When It Comes to Customer… Continue reading Books"
                />
            </Head>

            <div className="rs-about style2 clientcornnerlogo ptt-20 pbb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="">
                                <div className="sec-title3 mbb-35">
                                    <h4 className="countertoph2 text-center font30">Explore Our Library</h4>
                                    <div className="heading-border-line center-style"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="innervideoshd">
                                <img src="/assets/img/books/crucialconversations.svg" alt="books" />
                                <div className="book-details">
                                    <div className="title">Crucial Conversations First Chapter</div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center text-center p-3">
                                    <div className="price">Rs.419.00/-</div>
                                    <button className="ebookbtn mt-0" onClick={() => handleBuyNow('Rs.419.00/-')}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        

                        <div className="col-sm-3">
                            <div className="innervideoshd">
                                <img src="/assets/img/books/crucialaccountability.webp" alt="books" />
                                <div className="book-details">
                                    <div className="title">Crucial Accountability First Chapter</div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center text-center p-3">
                                    <div className="price">Rs.642.00/-</div>
                                    <button className="ebookbtn mt-0" onClick={() => handleBuyNow('Rs.642.00/-')}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="innervideoshd">
                                <img src="/assets/img/books/influencer.webp" alt="books" />
                                <div className="book-details">
                                    <div className="title">Influencer First Chapter</div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center text-center p-3">
                                    <div className="price">Rs.742.00/-</div>
                                    <button className="ebookbtn mt-0" onClick={() => handleBuyNow('Rs.742.00/-')}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for payment form */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>User Details</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleFormSubmit}>
                        <p>Please enter your billing details to make payment</p>

                        {submitError && <Alert color="danger">{submitError}</Alert>}

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <FormGroup>
                                    <Label for="Amount">Amount</Label>
                                    <Input type="text" id="Amount" name="Amount" value={selectedPrice || 'Rs.1000.00/-'} readOnly />
                                </FormGroup>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <FormGroup>
                                    <Label for="inpName">Name*</Label>
                                    <Input
                                        type="text"
                                        id="inpName"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    
                                    />
                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                </FormGroup>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <FormGroup>
                                    <Label for="inpEmail">Email*</Label>
                                    <Input
                                        type="email"
                                        id="inpEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </FormGroup>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <FormGroup>
                                    <Label for="inpMobile">Phone*</Label>
                                    <Input
                                        type="text"
                                        id="inpMobile"
                                        name="contact"
                                        placeholder="Enter Phone No."
                                        value={formData.contact}
                                        onChange={handleInputChange}
                                        pattern="^\d{10}$"  // Only allows 10-digit numbers
                                        title="Please enter a 10-digit phone number"
                                        required
                                    />
                                    {errors.contact && <div className="text-danger">{errors.contact}</div>}
                                </FormGroup>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <FormGroup>
                                    <Label for="inpCompany">Company Name</Label>
                                    <Input
                                        type="text"
                                        id="inpCompany"
                                        name="company"
                                        placeholder="Enter Company Name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        
                                    />
                                    {errors.company && <div className="text-danger">{errors.company}</div>}
                                </FormGroup>
                            </div>

                           

                            
                            

                          
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <Button color="primary" type="submit" className="btn btn-primary">
                                    Proceed to Pay
                                </Button>
                            </div>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}
