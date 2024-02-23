import React from 'react'

const footer = () => {
  return (
    <div>
      <>
      
  
      <div className="footer-container">
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><a href="/">Electronics</a></li>
            <li><a href="/">Clothing</a></li>
            <li><a href="/">Home &amp; Kitchen</a></li>
            {/* Add more categories as needed */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Shipping Information</a></li>
            <li><a href="/">Returns &amp; Exchanges</a></li>
            {/* Add more customer service links as needed */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Instagram</a></li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
      </div>
 

      </>
    </div>
  )
}

export default footer
