import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      const res = await axios.get(
        "https://zerodha-clone-qwrf.onrender.com/allHoldings"
      );
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Error fetching holdings:", err);
    }
  };

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // ================= Portfolio Summary =================

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercentage =
    totalInvestment === 0
      ? 0
      : ((pnl / totalInvestment) * 100).toFixed(2);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&amp;L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;

              const profitLoss = curValue - stock.avg * stock.qty;

              const profClass = profitLoss >= 0 ? "profit" : "loss";

              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>₹ {stock.avg.toFixed(2)}</td>

                  <td>₹ {stock.price.toFixed(2)}</td>

                  <td>₹ {curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    ₹ {profitLoss.toFixed(2)}
                  </td>

                  <td className={profClass}>{stock.net}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= Portfolio Summary ================= */}

      <div className="row">
        <div className="col">
          <h5>₹ {totalInvestment.toFixed(2)}</h5>
          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>₹ {currentValue.toFixed(2)}</h5>
          <p>Current Value</p>
        </div>

        <div className="col">
          <h5 className={pnl >= 0 ? "profit" : "loss"}>
            ₹ {pnl.toFixed(2)} ({pnlPercentage}%)
          </h5>
          <p>P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;