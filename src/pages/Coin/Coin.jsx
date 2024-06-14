import React, { useEffect, useState } from "react";
import "./Coin.css";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import LineChart from "../../components/LineChart/LineChart";
const Coin = () => {
  const { coinId } = useParams();
  const [coinDetail, setCoinDetail] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[interval,setInterval]=useState(7);

  const navigate = useNavigate();
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
    params: { vs_currency: 'inr', days: `${interval}`,interval:"daily" },
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-1drmX1ddkLXGZHuWgtHrnYps'
    }
  };

  const fetchHistoricalData = async()=>{
    axios.request(options)
      .then(response => {
        setHistoricalData(response.data);
        console.log(historicalData)
        console.log(interval);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const fetchCoinDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setCoinDetail(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching coin details");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinDetail();
    fetchHistoricalData();
  }, [coinId,interval]);
  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center" }}>{error}</div>;
  }
  return (
    <div className="coin-detail">
      <button className="back-btn"onClick={()=>navigate('/')}>Back</button>
      <div className="coin-detail-container">
        <div className="coin-detail-left-container">
          <div className="top-part">
            <div className="top-part-div">
            <img src={coinDetail.image.small} alt="" />
            <h1>{coinDetail.name}</h1>
            <p>{coinDetail.symbol}</p>
            </div>
            <h1 className="current-price">₹ {coinDetail.market_data.current_price.inr}</h1>
            <p className={coinDetail.market_data.price_change_percentage_24h_in_currency.inr < 0 ? 'red' : 'green'}id="price-change">{coinDetail.market_data.price_change_percentage_24h_in_currency.inr.toFixed(3)} %</p><span>24h</span>
          </div>
          <div className="middle-part">
            <div className="middle-part-row">
              <div className="middle-data">
                <p>24h Low</p>
                <p className="value">{coinDetail.market_data.low_24h.inr}</p>
              </div>
              <div className="middle-data">
                <p>24h High</p>
                <p className="value">{coinDetail.market_data.high_24h.inr}</p>
              </div>
            </div>
            <hr />
          <div className="middle-part-row">
              <p>Market Cap Rank</p>
              <div className="data-value">
                <p className="value"># {coinDetail.market_data.market_cap_rank}</p>
              </div>
            </div>
            <hr />
            <div className="middle-part-row">
              <p>Market Cap</p>
              <div className="data-value">
                <p className={coinDetail.market_data.market_cap_change_percentage_24h< 0 ? 'red' : 'green'}>{coinDetail.market_data.market_cap_change_percentage_24h.toFixed(2)} %</p>
                <p className="value">₹ {coinDetail.market_data.market_cap.inr}</p>
              </div>
            </div>
            <hr />
            <div className="middle-part-row">
              <p>Volume (24 h)</p>
              <div className="data-value">
                {/* <p className={coinDetail.market_data.market_cap_change_percentage_24h< 0 ? 'red' : 'green'}>{coinDetail.market_data.market_cap_change_percentage_24h.toFixed(2)} %</p> */}
                <p className="value">₹ {coinDetail.market_data.total_volume.inr}</p>
              </div>
            </div>
            <hr />
            <div className="middle-part-row">
              <p>Total Supply</p>
              <div className="data-value">
                <p className="value">{coinDetail.market_data.total_supply.toFixed(0)} {coinDetail.symbol}</p>
              </div>
            </div>
            <hr />
            
          </div>
        </div>
        <div className="coin-detail-right-container">
          <LineChart historicalData={historicalData}/>
          <div className="time-frame-buttons">
            <button onClick={()=>{setInterval(3)}}>3D</button>
            <button onClick={()=>{setInterval(7)}}>7D</button>
            <button onClick={()=>{setInterval(30)}}>30D</button>
            <button onClick={()=>{setInterval(60)}}>60D</button>
            <button onClick={()=>{setInterval(90)}}>90D</button>
            <button onClick={()=>{setInterval(180)}}>180D</button>
            <button onClick={()=>{setInterval(365)}}>365D</button>
          </div>
        </div>
      </div>
      </div>
          
  )
};

export default Coin;
