import React, { useContext } from 'react';
import { Loader } from '../';

import { TransactionContext } from '../../context/TransactionContext';

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const EthereumForm = () => {
  const { formData, handleChange, sendTransaction, isLoading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="p-5 mt-10 w-full flex flex-col  blue-glassmorphism">
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={handleChange}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        handleChange={handleChange}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        handleChange={handleChange}
      />

      <div className="h-[1px] w-full bg-gray-400 my-2" />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Send now
        </button>
      )}
    </div>
  );
};

export default EthereumForm;
