import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
    <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/fruits.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Fruits</h6>
                            <small className="text-body">12 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/vegetables.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Vegetables</h6>
                            <small className="text-body">10 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/dairy.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6> Dairy Products</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/nuts1.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Nuts and Seeds</h6>
                            <small className="text-body">16 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/grains.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Grains and Cereals</h6>
                            <small className="text-body">14 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/eggs.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Eggs</h6>
                            <small className="text-body">10 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/beverages.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Beverages</h6>
                            <small className="text-body">14 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/plants.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Plants</h6>
                            <small className="text-body">9 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/fiber.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Fibers and Textiles</h6>
                            <small className="text-body">18 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/lemon1.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Pickels</h6>
                            <small className="text-body">11 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/papad1.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Papad</h6>
                            <small className="text-body">13 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to="">
                    <div className="cat-item img-zoom d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img className="img-fluid" src="/images/flower1.jpg" alt=""/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>Flowers & Bookey</h6>
                            <small className="text-body">12 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category