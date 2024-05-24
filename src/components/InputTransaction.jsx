import React, { useState } from "react";

export default function InputTransaction(props) {
  const { addData } = props;

  const [addDescription, setAddDescription] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [type, setType] = useState("INCOME");

  return (
    <div className="form">
      <div className="inp-one">
        <input
          value={addDescription}
          onChange={(e) => setAddDescription(e.target.value)}
          type="text"
          placeholder="Details"
        />
        <input
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="radio-input">
        <input
          type="radio"
          id="income"
          name="type"
          value="INCOME"
          checked={type === "INCOME"}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <label htmlFor="income">Income</label>
        <input
          type="radio"
          id="expense"
          name="type"
          value="EXPENSE"
          checked={type === "EXPENSE"}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <label htmlFor="expense">Expense</label>
      </div>
      <div className="btn-1">
        <button
          onClick={() => {
            addData(addDescription, addAmount, type);
            setAddDescription("");
            setAddAmount("");
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
