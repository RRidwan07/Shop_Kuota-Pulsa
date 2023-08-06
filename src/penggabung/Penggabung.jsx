import Card from "../config/component/Card";
import '../index.css';
import {INDOSAT1, AXIS1, XL1, TELKOMSEL1, SMARTFREN1} from "../img/img-kuota/Image";

const Penggabung = () => {
    return(
    <div className="isi-content2" style={{backgroundColor: '#456'}}>
    <div className="isi-content" style={{marginLeft: '20px', display: 'grid', gridTemplateColumns: 'repeat(4, 2fr)', gap: '10px',}}>
      <Card img={INDOSAT1} title="Paket Data" title2="INDOSAT"/>
      <Card img={TELKOMSEL1} title="Paket Data" title2="TELKOMSEL"/>
      <Card img={AXIS1} title="Paket Data" title2="AXIS AXITA"/>
      <Card img={XL1} title="Paket Data" title2="XL"/>
      <Card img={SMARTFREN1} title="Paket Data" title2="SMARTFREN"/>
        </div>
    </div>
    );
}
export default Penggabung;