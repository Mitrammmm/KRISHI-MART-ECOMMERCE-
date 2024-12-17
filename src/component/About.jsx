import React from "react";
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    
    <main className=" py-5 bg-dark text-white">
      <div className="container">
        <div className="about-content">
          <h1 className="text-center"  style={{ width: '100%', color: 'ghostwhite', fontSize:'50px'}} >Welcome to कृषि-Mart</h1>
          <hr style={{ width: '100%', borderColor: 'ghostwhite', borderWidth: '1px', borderStyle: 'solid',marginBottom:'17px' }} />
                    
          <p  style={{ width: '90%', color: 'ghostwhite', fontSize:'25px'}}>
          We are building a digital platform to bridge the gap between farmers and buyers, especially in countries like India. Our goal is to help farmers sell their produce directly to consumers, eliminating middlemen and boosting their income. 
          </p>

          <p style={{ width: '90%', color: 'ghostwhite', fontSize:'30px', textAlign:'left'}}>
          What We're Creating
          <hr style={{ width: '30%', borderColor: 'ghostwhite', borderWidth: '1px', borderStyle: 'solid', marginLeft: '0' }} />
          </p>
          <p  style={{ width: '90%', color: 'ghostwhite', fontSize:'25px'}}>
          Imagine a website or app, similar to Amazon or Flipkart, where you can order fresh fruits, 
          vegetables, and more directly from farmers. 
          The platform is user-friendly and designed to work on both smartphones and computers.
          </p>

          <p style={{ width: '90%', color: 'ghostwhite', fontSize:'30px', textAlign:'left'}}>
          How it Works
          <hr style={{ width: '30%', borderColor: 'ghostwhite', borderWidth: '1px', borderStyle: 'solid', marginLeft: '0' }} />
          </p>
          <p  style={{ width: '90%', color: 'ghostwhite', fontSize:'25px'}}>
          1)Farmers List Their Produce: At local centers or with the help of our field agents, farmers can list what they have for sale.
          <br></br>2)Buyers Place Orders: Consumers visit our platform, choose what they want, and place their orders.
          <br></br>3)We Handle Delivery: Our team collects the produce from the centers and ensures it’s delivered to the buyers.
          <br></br>4)Farmers Get Paid: Payments are made directly to farmers, boosting their income and cutting out the middlemen.
          </p>

          <p style={{ width: '90%', color: 'ghostwhite', fontSize:'30px', textAlign:'left'}}>
          Inspiration for the Solution:
          <hr style={{ width: '30%', borderColor: 'ghostwhite', borderWidth: '1px', borderStyle: 'solid', marginLeft: '0' }} />
          </p>
          <p  style={{ width: '90%', color: 'ghostwhite', fontSize:'25px'}}>
          We aim to empower farmers by giving them better access to markets and fair prices for their hard 
          work. By using technology, we’re creating a sustainable and profitable future for farmers and 
          providing consumers with fresh, high-quality produce straight from the source.<br></br><br></br>
          Join us in transforming the agricultural landscape and supporting our farmers!.



         
          </p>

        </div>
      </div>
    </main>

    </>
  );
}

export default About;
