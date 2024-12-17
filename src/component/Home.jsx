import React from "react";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import Category from "./category/Category";

function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#header-carousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div
                  className="carousel-item position-relative active"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="/images/juicy.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate_animated animate_fadeInDown">
                        Juicy Mood
                      </h1>
                      <p className="mx-md-5 px-5 animate_animated animate_bounceIn">
                        In the golden sunlight's embrace,A sip of juice, a
                        moment of grace.Refreshing, sweet, it fills the air,With
                        flavors that banish every care.
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate_animated animate_fadeInUp"
                        to="/cart"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="/images/fruits.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate_animated animate_fadeInDown">
                        Fresh Fruits
                      </h1>
                      <p className="mx-md-5 px-5 animate_animated animate_bounceIn">
                        In baskets filled with treasures of the vine,Fruits of
                        summer, a gift divine.Berries plump, and grapes in
                        clusters sweet,A taste of heaven, with each juicy treat.
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate_animated animate_fadeInUp"
                        to="/cart"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "430px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="/images/bookey.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate_animated animate_fadeInDown">
                        Gift Time
                      </h1>
                      <p className="mx-md-5 px-5 animate_animated animate_bounceIn">
                        As flowers bloom, so does love's grace, A symbol of
                        beauty, in every space. With each petal, a whispered
                        prayer, For joy, for peace, for love to share.
                      </p>
                      <Link
                        className="btn btn-outline-light py-2 px-4 mt-3 animate_animated animate_fadeInUp"
                        to="/cart"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="product-offer mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="/images/freshFruits.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 20%</h6>
                <h3 className="text-white mb-3">On Fresh Fruits </h3>
                <Link to="/cart" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="product-offer mb-30" style={{ height: "200px" }}>
              <img className="img-fluid" src="/images/freshDairy.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Save 30%</h6>
                <h3 className="text-white mb-3">Dairy Products</h3>
                <Link to="/cart" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- Featured Start --> */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Qualitywise Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">On Time</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1> 
              <h5 className="font-weight-semi-bold m-0">Selling Price</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Featured End --> */}

      {/* <!-- Categories Start --> */}
      <Category />
      {/* <!-- Categories End --> */}

      {/* <!-- Products Start --> */}
      <Product />
      {/* <!-- Products End --> */}

      {/* <!-- Offer Start --> */}
      <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="/images/extraTomato.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Buy 5kg Tomato</h6>
                <h3 className="text-white mb-3">Get 2kg free</h3>
                <Link to="" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-offer mb-30" style={{ height: "300px" }}>
              <img className="img-fluid" src="/images/extrapickle.jpg" alt="" />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">Buy 3</h6>
                <h3 className="text-white mb-3">Pay for only 2</h3>
                <Link to="" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Offer End --> */}
    </>
  );
}

export default Home;
