import React from "react";

export default function Balances(props) {
  const {income, expense} = props;

  return (
    <div className="income-expense">
      <div className="inc-exp">
        <p>Income</p>
        <br />
        <p className="doller">
          <span className="span-4">R</span>
          <span className="span-1">{income}</span>
        </p>
      </div>
      <div className="inc-exp">
        <p>Expense</p>
        <br />
        <p className="doller">
          <span className="span-4">R</span>
          <span className="span-2">{expense}</span>
        </p>
      </div>
    </div>
  );
}
