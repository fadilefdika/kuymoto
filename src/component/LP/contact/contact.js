import './contact.css';
import react from 'react';

const Contact = () => {
  return (
    <react.Fragment>
      <div id="contact">
        <div className="contact">
          <h2 className="judul-contact">Contact</h2>
          <input src="text" className="i-1" placeholder="Masukkan nama"></input>
          <input src="text" className="i-2" placeholder="Masukkan email"></input>
          <textarea src="text" className="i-3" placeholder="Pesan"></textarea>

          <button className="contact-btn">Kirim</button>
        </div>

        <div className="info">
          <h4 className="info-1">Info</h4>
          <div className="info-2">
            <p className="info-3">
              Email : <span>kuymoto@gmail.io</span>
            </p>
            <p className="info-3">
              No Telp : <span>+6281348028366</span>
            </p>
            <p className="info-3">
              Alamat : <span>Jalan Mangga Dua nomor 12, Jakarta</span>
            </p>
            <p className="info-3">
              <span>09.00 - 15.00 WIB</span>
            </p>
          </div>
        </div>
      </div>
    </react.Fragment>
  );
};

export default Contact;
