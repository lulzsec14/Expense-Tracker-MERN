import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  let newTransaction = {
    text,
    amount
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var et = document.getElementById('etracker');
    if (et.value === 'in') {
      newTransaction = {
        text,
        amount: +amount
      };
    } else {
      newTransaction = {
        text,
        amount: -amount
      };
    }

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input
            className="mb-3"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter category..."
          />
        </div>

        <div className="form-control">
          <label>Choose Type:</label>
          <select name="et" id="etracker" className="custom-select mb-3">
            <option value="in">Income</option>
            <option value="ex">Expense</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            className="mb-3"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
