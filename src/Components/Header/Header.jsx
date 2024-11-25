import React, { useEffect, useState } from 'react';

function Header() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProductData(data.slice(0, 6));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
}

export default Header;
