import React, { useEffect, useState } from "react";
import Header from "./components/header";
import InputTransaction from "./components/InputTransaction";
import Balances from "./components/balances";
import Transactions from "./components/transactions";

function App() {
  const [data, setData] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function addData(description, amount, type) {
    const newData = [...data, { description, amount: Number(amount), type }];
    setData(newData);
  }

  function calculateBalance() {
    let expAmont = 0;
    let incAmount = 0;

    data.map((item) => {
      item.type === "INCOME"
        ? (incAmount = incAmount + item.amount)
        : (expAmont = expAmont + item.amount);
    });
    setIncome(incAmount);
    setExpense(expAmont);
  }

  useEffect(() => calculateBalance(), [data]);

  return (
    <div className="mainContainer">
      <Header income={income} expense={expense} />
      <Balances income={income} expense={expense} />
      <InputTransaction addData={addData} />
      <Transactions data={data} />
    </div>
  );
}

export default App;
