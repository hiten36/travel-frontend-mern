import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <div className="footer w-full mt-3 bg-white pt-10">
                <div className="footer1 flex justify-between">
                    <div className="foot1">
                        <h3 className="text-2xl mb-6">Our Branches</h3>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>India</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>France</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>Russia</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>Japan</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>Canada</p>
                        </div>
                    </div>
                    <div className="foot1">
                        <h3 className="text-2xl mb-6">Quick Links</h3>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Home">Home</HashLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <NavLink to="track">Tracking</NavLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <NavLink to="/auth">Login/Signin</NavLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Package">Packages</HashLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Service">Services</HashLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Testimonial">Testimonials</HashLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Review">Reviews</HashLink>
                        </div>
                        <div className="flex mb-0 foot11">
                            <img className="mr-1" src="/images/arrow.png" alt="arrow" />
                            <HashLink smooth to="/#Contact">Contact Us</HashLink>
                        </div>
                    </div>
                    <div className="foot1">
                        <h3 className="text-2xl mb-6">Our Branches</h3>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/phone.png" alt="phone" />
                            <p>+123-456-789</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/phone.png" alt="phone" />
                            <p>+111-222-333</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/email.png" alt="email" />
                            <p>travel@company.com</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/locatio.png" alt="location" />
                            <p>Jaipur,India - 302020</p>
                        </div>
                    </div>
                    <div className="foot1">
                        <h3 className="text-2xl mb-6">Follow Us</h3>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/fb1.png" alt="fb" />
                            <p>Facebook</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/ig1.png" alt="ig" />
                            <p>Instagram</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/twitter1.png" alt="twitter" />
                            <p>Twitter</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/linkedin1.png" alt="ln" />
                            <p>Linkedin</p>
                        </div>
                        <div className="flex mb-2 foot11">
                            <img className="mr-1" src="/images/github1.png" alt="git" />
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
