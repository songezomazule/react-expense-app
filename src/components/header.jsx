import React from "react";

export default function Header(props) {
  const { income, expense } = props;
  return (
    <div className="header">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <p>
          Balance: <span>R</span>
          <span className="span-3">{income - expense}</span>
        </p>
      </div>
    </div>
  );
}
