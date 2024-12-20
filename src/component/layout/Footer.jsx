import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h3 className="text-secondary text-uppercase mb-4"><u>कृषि-Mart</u></h3>
                <p className="mb-4">Empowering Health with Nature enhancing wellness by using natural products, harnessing the power of nature for a healthier life.</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Indrapuri , Bhopal</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>krishimartexample@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 8989XXXXX</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i> Fresh Fruits</Link>
                            <Link className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Vegetables</Link>
                            <Link className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Dairy Products</Link>
                            <Link className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Flowers and Bookey</Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-secondary mb-2" to="/"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                            <Link className="text-secondary mb-2" to="/about"><i className="fa fa-angle-right mr-2"></i>About</Link>
                            <Link className="text-secondary mb-2" to="/cart"><i className="fa fa-angle-right mr-2"></i>Cart</Link>
                            {/* <Link className="text-secondary mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Checkout</Link> */}
                            <Link className="text-secondary" to="/contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <Link className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-primary btn-square mr-2" to="#"><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-primary btn-square" to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row border-top mx-xl-5 py-4">
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <Link className="text-primary" to="#">कृषि-MART</Link>. 
                </p>
            </div>
            {/* brands images */}
            <div className="col-md-6 px-xl-0 text-center text-md-right">   
                <img className="img-fluid" src="/images/payments.png" alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <Link to="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></Link>
    </>
  )
}

export default Footer