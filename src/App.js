
import Card from "./config/component/Card"
import {Indosat, XLaxita, Telkomsel, AxisAxita,Smartfren} from "./penggabung/HomeKuota";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./config/component/HomePage";
import Head from "./config/component/Head";
import Data from "./config/Data";



function App() {
  const {kuotaAxis, kuotaIndosat, kuotaTelkomsel, kuotaSmartfren, kuotaXl, pulsaAxis, pulsaIndosat, pulsaSmartfren, pulsaTelkomsel, pulsaXl } = Data
  return (
    <div>
          <HashRouter>
        <Head />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/Pembayaran" element={<Card />}/>
              <Route path="/Indosat" element={<Indosat pulsaIndosat={pulsaIndosat} kuotaIndosat={kuotaIndosat}/>}/>
              <Route path="/Telkomsel" element={<Telkomsel pulsaTelkomsel={pulsaTelkomsel} kuotaTelkomsel={kuotaTelkomsel}/>}/>
              <Route path="/XLaxita" element={<XLaxita pulsaXl={pulsaXl} kuotaXl={kuotaXl}/>}/>
              <Route path="/AxisAxita" element={<AxisAxita pulsaAxis={pulsaAxis} kuotaAxis={kuotaAxis}/>}/>
              <Route path="/Smartfren" element={<Smartfren pulsaSmartfren={pulsaSmartfren} kuotaSmartfren={kuotaSmartfren}/>}/> 
            </Routes>
          </HashRouter>
    </div>
  );
}

export default App;
