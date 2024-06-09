import React, { useEffect, useState } from "react";
import "./Coin.css";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
const Coin = () => {
  const { coinId } = useParams();
  const [coinDetail, setCoinDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
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

    fetchCoinDetail();
  }, [coinId]);
  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center" }}>{error}</div>;
  }
  return (
    <div className="coin-detail">
      <button className="back-btn"onClick={()=>navigate('/')}>Back</button>
      {coinDetail ? (
        <div className="coin-detail-container">
          <img src={coinDetail.image.large} alt="" />
          <h2>{coinDetail.name}</h2>
          <div className="detail-container">
            <p className="head">Symbol : </p>
            <p className="value">{coinDetail.symbol}</p>
          </div>
          <div className="detail-container">
            <p className="head">Current Price : </p>
            <p className="value">₹{coinDetail.market_data.current_price.inr}</p>
          </div>
          <div className="detail-container">
            <p className="head">Market Price : </p>
            <p className="value">₹{coinDetail.market_data.market_cap.inr}</p>
          </div>
          <div className="low-high">
            <div className="detail-container">
              <p className="head">24h Low : </p>
              <p className="value" style={{ backgroundColor: "crimson" }}>
                ₹{coinDetail.market_data.low_24h.inr}
              </p>
            </div>
            <div className="detail-container">
              <p className="head">24h High : </p>
              <p className="value" style={{ backgroundColor: "green" }}>
                ₹{coinDetail.market_data.high_24h.inr}
              </p>
            </div>
          </div>
          <div className="detail-container"style={{marginTop:"40px"}}>
            <p className="head">Description </p>
            <p className="coin-desc">{coinDetail.description.en}</p>
          </div>
        </div>
      ) : (
        <div>No coin details found</div>
      )}
    </div>
  );
};

export default Coin;
