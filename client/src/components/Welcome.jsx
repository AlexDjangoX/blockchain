/* eslint-disable no-constant-condition */

import EthereumCard from './welcome/EthereumCard';
import EthereumConnectWallet from './welcome/EthereumConnectWallet';
import EthereumForm from './welcome/EthereumForm';
import EthereumServices from './welcome/EthereumServices';

const Welcome = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col mf:flex-row  items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-col  mf:mr-10">
          <EthereumConnectWallet />
          <EthereumServices />
        </div>

        <div className="flex flex-col flex-1 items-center  w-full mf:mt-0 mt-10">
          <EthereumCard />
          <EthereumForm />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
