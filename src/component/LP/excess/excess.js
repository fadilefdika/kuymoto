import react from 'react';
import './excess.css';
import { FaCamera } from 'react-icons/fa';
import { FaPalette } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';

const Excess = () => {
  return (
    <div className="keunggulan ">
      <div className="cameraI icon">
        <FaCamera />
        <p>Barang pasti original</p>
      </div>
      <div className="palette icon">
        <FaPalette />
        <p>Berbagai varian warna</p>
      </div>
      <div className="bill icon">
        <FaMoneyBill />
        <p>Harga paling murah</p>
      </div>
      <div className="billW icon">
        <FaMoneyBillWave />
        <p>Dapatkan cashback dengan </p>
        <p>pembelian diatas Rp 10.000.000,00</p>
      </div>
    </div>
  );
};

export default Excess;
