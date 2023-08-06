
import Pembayaran from "./Pembayaran";
import Card from "./Card";
const HomePage = ()=> {
    return(
        <>
        <div className="container-HomePage" id="home">
            <div className="content-HomePage" style={{display: 'flex', alignItems: 'center'}}>
                <div className="content-event" style={{display: 'block', margin: '0 0 0 100px', width: '400px'}}>
                    <p style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}><strong> <b>Kuota internet</b> memiliki arti batasan pemakaian internet pada waktu tertentu. Kuota ini memiliki berbagai macam varian yang disesuaikan dengan nominal paket dan harga.Varian-varian kuota internet HP yang biasanya disediakan oleh provider diantaranya kuota utama, kuota reguler, kuota malam, kuota aplikasi, kuota bonus, dan masih banyak lagi</strong></p>
                    <button style={{padding: '0 5px', borderRadius: '9999px'}}>Kunjungi</button>
                </div>
            </div>
        </div>
        <Card />
        <Pembayaran />
        </>
    );
}
export default HomePage;