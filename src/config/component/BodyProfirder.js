import { Route } from "react-router-dom"
import { Telkomsel, Indosat, XLaxita, AxisAxita, Smartfren } from "../../penggabung/HomeKuota"

const BodyProfirder = ({kuotaAxis, kuotaIndosat, kuotaSmartfren, kuotaTelkomsel, kuotaXl, pulsaAxis,pulsaIndosat, pulsaSmartfren, pulsaTelkomsel, pulsaXl}) => {
    return(
        <>
             <Route path="/Indosat" element={<Indosat pulsaIndosat={pulsaIndosat} kuotaIndosat={kuotaIndosat}/>}/>
            <Route path="/Telkomsel" element={<Telkomsel pulsaTelkomsel={pulsaTelkomsel} kuotaTelkomsel={kuotaTelkomsel}/>}/>
             <Route path="/XLaxita" element={<XLaxita pulsaXl={pulsaXl} kuotaXl={kuotaXl}/>}/>
              <Route path="/AxisAxita" element={<AxisAxita pulsaAxis={pulsaAxis} kuotaAxis={kuotaAxis}/>}/>
              <Route path="/Smartfren" element={<Smartfren pulsaSmartfren={pulsaSmartfren} kuotaSmartfren={kuotaSmartfren}/>}/> 
        </>
    )
}
export default BodyProfirder