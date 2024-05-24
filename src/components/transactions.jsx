import React, { useState } from "react";

export default function Transactions(props) {
  const { data } = props;

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div>
        {data.map((item, index) => {
          return (
            <div
              className="transaction-details"
              key={index}
              style={{
                borderRight:
                  item.type === "INCOME" ? "3px solid green" : "3px solid red",
              }}
            >
              <span className="trans-description">{item.description}</span>
              <span className="trans-amount">{item.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
