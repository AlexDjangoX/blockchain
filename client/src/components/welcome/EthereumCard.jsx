import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';

import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { shortenAddress } from '../../../utils/shortenAddress';

const EthereumCard = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="p-3 rounded-xl h-40  w-72 my-5 eth-card ">
      <div className="flex flex-col justify-between  w-full h-full">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
        </div>
        <div>
          <p className="text-white font-light text-sm">
            {shortenAddress(currentAccount)}
          </p>
          <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
        </div>
      </div>
    </div>
  );
};

export default EthereumCard;
