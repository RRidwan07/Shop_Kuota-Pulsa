import {useNavigate} from "react-router-dom";
import { INDOSAT1, AXIS1, XL1, TELKOMSEL1, SMARTFREN1} from "../../img/img-kuota/Image"
// import Telkomsel from "../../penggabung/komponen/Telkomsel";

const Card = () => {
    const navigate = useNavigate()
    return(
    <div className="isi-content2" style={{backgroundColor: '#456'}}>
    <div className="isi-content" style={{marginLeft: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 2fr)', gap: '10px',}}>
        <article className="card" style={{marginTop: '50px',}}>
        <div className="card-img" style={{}}>
        <img src={INDOSAT1} alt="" srcSet="" />
        </div>
        <div className="card_content">
          <h3
            className="card_title"
            style={{marginLeft: '50px', fontSize: '1.5em', fontWeight: '600'}}
          >
            Paket Data
          </h3>
          <span className="card_subtitle">INDOSAT</span>
          <p className="card_description">
            di jual kuota dengan harga yg terjangkau<br />
            <button onClick={() => navigate('/Indosat')} style={{marginLeft: '70px', marginTop: '20px', padding: '5px 15px 5px 15px', borderRadius: '99999px'}}>
              Pesan
            </button>
          </p>
        </div>
      </article>
      {/* CONTENT 2 */}
      <article className="card" style={{marginTop: '50px',}}>
        <div className="card-img" style={{}}>
        <img src={AXIS1} alt="" srcSet="" />
        </div>
        <div className="card_content">
          <h3
            className="card_title"
            style={{marginLeft: '50px', fontSize: '1.5em', fontWeight: '600'}}
          >
            Paket Data
          </h3>
          <span className="card_subtitle">AXIS</span>
          <p className="card_description">
            di jual kuota dengan harga yg terjangkau<br />
            <button onClick={() => navigate('/AxisAxita')} style={{marginLeft: '70px', marginTop: '20px', padding: '5px 15px 5px 15px', borderRadius: '99999px'}}>
              Pesan
            </button>
          </p>
        </div>
      </article>
      {/* CONTENT 3 */}
      <article className="card" style={{marginTop: '50px',}}>
        <div className="card-img" style={{}}>
        <img src={XL1} alt="" srcSet="" />
        </div>
        <div className="card_content">
          <h3
            className="card_title"
            style={{marginLeft: '50px', fontSize: '1.5em', fontWeight: '600'}}
          >
            Paket Data
          </h3>
          <span className="card_subtitle">XL </span>
          <p className="card_description">
            di jual kuota dengan harga yg terjangkau<br />
            <button onClick={() => navigate('/XLaxita')} style={{marginLeft: '70px', marginTop: '20px', padding: '5px 15px 5px 15px', borderRadius: '99999px'}}>
              Pesan
            </button>
          </p>
        </div>
      </article>
      {/* CONTENT 4 */}
      <article className="card" style={{marginTop: '50px',}}>
        <div className="card-img" style={{}}>
        <img src={TELKOMSEL1} alt="" srcSet="" />
        </div>
        <div className="card_content">
          <h3
            className="card_title"
            style={{marginLeft: '50px', fontSize: '1.5em', fontWeight: '600'}}
          >
            Paket Data
          </h3>
          <span className="card_subtitle">TELKOMSEL</span>
          <p className="card_description">
            di jual kuota dengan harga yg terjangkau<br />
            <button onClick={() => navigate('/Telkomsel')} style={{marginLeft: '70px', marginTop: '20px', padding: '5px 15px 5px 15px', borderRadius: '99999px'}}>
              Pesan
            </button>
          </p>
        </div>
      </article>
      {/* CONTENT 5 */}
      <article className="card" style={{marginTop: '50px',}}>
        <div className="card-img" style={{}}>
        <img src={SMARTFREN1} alt="" srcSet="" />
        </div>
        <div className="card_content">
          <h3
            className="card_title"
            style={{marginLeft: '50px', fontSize: '1.5em', fontWeight: '600'}}
          >
            Paket Data
          </h3>
          <span className="card_subtitle">SMARTFREN</span>
          <p className="card_description">
            di jual kuota dengan harga yg terjangkau<br />
            <button onClick={() => navigate('/Smartfren')} style={{marginLeft: '70px', marginTop: '20px', padding: '5px 15px 5px 15px', borderRadius: '99999px'}}>
              Pesan
            </button>
          </p>
        </div>
      </article>
        </div>
    </div>
    );
}
export default Card;


