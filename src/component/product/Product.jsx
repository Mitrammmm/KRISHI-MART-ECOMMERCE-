import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Seasonal Products</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/mango1.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Mango</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹80</h5><h6 className="text-muted ml-2"><del>₹100</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/lemon.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Lemon</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹10</h5><h6 className="text-muted ml-2"><del>₹15</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/watermelon.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">WaterMelon</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹30</h5><h6 className="text-muted ml-2"><del>₹33</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/papad.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Papad & Chips</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹109</h5><h6 className="text-muted ml-2"><del>₹149</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/mangopickels.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Mango Pickels</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹199</h5><h6 className="text-muted ml-2"><del>₹249</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/imli.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Amla & Imli</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹40</h5><h6 className="text-muted ml-2"><del>₹50</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star-half-alt text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/garlic.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">Garlic</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹50</h5><h6 className="text-muted ml-2"><del>₹80</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src="/images/sugarcane.jpg" alt=""/>
                        <div className="product-action">
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to="">SugarCane</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>₹78</h5><h6 className="text-muted ml-2"><del>₹100</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small className="far fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product