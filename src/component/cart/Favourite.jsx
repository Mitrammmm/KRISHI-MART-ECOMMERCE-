import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState({
    Fruits: [
      { name: 'WaterMelon', image: '/images/watermelon.jpg' },
      { name: 'Bananas', image: '/images/bananas.jpg' }
    ],
    Vegetables: [
      { name: 'Carrots', image: '/images/carrots.jpg' },
      { name: 'Broccoli', image: '/images/broccoli.jpg' }
    ],
    Dairy: [
      { name: 'Milk', image: '/images/milk.jpg' },
      { name: 'Cheese', image: '/images/cheese.jpg' }
    ],
    Grains: [
      { name: 'Rice', image: '/images/rice.jpg' },
      { name: 'Wheat', image: '/images/wheat.jpg' }
    ]
  });

  const removeFavorite = (category, item) => {
    setFavorites({
      ...favorites,
      [category]: favorites[category].filter(favorite => favorite.name !== item)
    });
  };

  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">Home</Link>
              <Link className="breadcrumb-item text-dark" to="/">Shop</Link>
              <span className="breadcrumb-item active">Favorites</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Favorites Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            {Object.keys(favorites).map(category => (
              <div key={category}>
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">{category}</span></h5>
                <table className="table table-light table-borderless table-hover text-center mb-0">
                  <thead className="thead-dark">
                    <tr>
                      <th>Item</th>
                      <th></th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {favorites[category].map(item => (
                      <tr key={item.name}>
                        <td className="align-middle">{item.name}</td>
                        <td className="align-middle">
                          <img src={item.image} alt={item.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
                        </td>
                        <td className="align-middle">
                          <button className="btn btn-sm btn-danger" onClick={() => removeFavorite(category, item.name)}>
                            <i className="fa fa-times"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Add New Favorite</span></h5>
            <form className="bg-light p-30 mb-5">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" className="form-control">
                  {Object.keys(favorites).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="item">Item</label>
                <input type="text" className="form-control" id="item" placeholder="Enter item name" />
              </div>
              <button type="submit" className="btn btn-primary">Add Favorite</button>
            </form>
          </div>
        </div>
      </div>
      {/* Favorites End */}
    </>
  );
};

export default Favorites;
