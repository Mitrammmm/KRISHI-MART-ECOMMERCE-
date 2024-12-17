import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    {/* <!-- Breadcrumb Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="#">Home</Link>
                    <span className="breadcrumb-item active">Contact</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}


    {/* <!-- Contact Start --> */}
    <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name"
                                required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="8" id="message" placeholder="Message"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                                Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="bg-light p-30 mb-30">
                    <iframe style={{width: '100%', height: '250px' , border:'0'}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1832.8795787069582!2d77.46518975!3d23.251849649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4203e1c28add%3A0xce85ece223ab006b!2sIndrapuri%20C%20sector%2C%20Sector%20C%2C%20Indrapuri%2C%20Bhopal%2C%20Madhya%20Pradesh%20462022!5e0!3m2!1sen!2sin!4v1717458867917!5m2!1sen!2sin"
                    frameBorder="0" allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="bg-light p-30 mb-3">
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Indrapuri , Bhopal</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>rkrishimartexample@gmail.com</p>
                    <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 8989XXXXXX</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}
    </>
  )
}

export default Contact