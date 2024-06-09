import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  const navigate = useNavigate();
  
  const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets',
    params: { vs_currency: 'inr', per_page: '16' },
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-1drmX1ddkLXGZHuWgtHrnYps'
    }
  };

  useEffect(() => {
    axios.request(options)
      .then(response => {
        setCryptoData(response.data);
        setFilteredData(response.data); // Initially show all data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = cryptoData.filter(crypto =>
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. <br />Sign up to explore more</p>

        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder='Search crypto' 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-list">
        {filteredData.length > 0 ? (
          filteredData.map(crypto => (
              <div className="crypto-item" key={crypto.id}onClick={()=>navigate(`/coin/${crypto.id}`)}>
                <img src={crypto.image} alt={crypto.name} />
                <h2>{crypto.name}</h2>
                <h2 className="crypto-symbol">{crypto.symbol}</h2>
                <p>₹ {crypto.current_price}</p>
              </div>
          ))
        ) : (
          <p style={{display: "block", margin: "auto"}}>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
