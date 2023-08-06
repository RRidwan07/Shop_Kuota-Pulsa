import { useNavigate } from "react-router-dom";
import ButtonPenggabung from "../../penggabung/komponen/cardkomponen/ButtonPenggabung";

const Pembayaran = () => {
    const navigate = useNavigate()
    return(
        <div style={{margin: '50px 40px 0 40px', display: 'block', justifyContent: 'center', width: 'clamp (200px, 50%, 300px)'}}>
            <div className="card-status"  style={{backgroundColor: 'red', height: 'auto', width: 'maxContent', borderRadius: '20px' , margin: '0 0 20px 0'}}>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
            </div>
            <div className="card-rincian-transaksi"  style={{backgroundColor: 'blue', height: 'auto', width: 'maxContent', borderRadius: '20px', margin: '0 0 20px 0'}}>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
            </div>
            <div className="card-total-pembayaran" style={{backgroundColor: 'red', height: 'auto', width: 'maxContent', borderRadius: '20px', margin: '0 0 20px 0'}} >
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
            </div>
            <div className="card-informasi"  style={{backgroundColor: 'blue', height: 'auto', width: 'maxContent', borderRadius: '20px', margin: '0 0 20px 0'}}>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
                <div style={{padding: '0 50%'}}>content</div>
            </div>
            <footer style={{backgroundColor: 'red', borderRadius: '20px', height: 'auto', margin: '0 0 20px 0', width: '200px'}}>
                <div className="fot-div" style={{padding: '30px 0 0 20px'}}>Nama : <input type="text"  style={{borderRadius: '10px', margin: '0 0 0 0', border: '1px solid #b4b4b4'}}/></div>
                <div className="fot-div" style={{padding: '10px 0 0 20px'}}>Alamat:<input type="text" style={{borderRadius: '10px', margin: '0 0 0 0', border: '1px solid #b4b4b4'}}/></div> 
                <button onClick={() => navigate('/Telkomsel')} style={{padding: '0 10px', borderRadius: '9999px', margin: '10px 0 10px 100px', fontWeight: '700'}}>Kirim</button>         
            </footer>

            <div style={{height: '200px'}}>pppp</div>
            <ButtonPenggabung />
        </div>
    );
}
export default Pembayaran;