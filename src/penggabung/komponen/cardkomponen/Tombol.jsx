import { useNavigate } from "react-router-dom"
// import {FiArrowLeft} from "react-icons/fi"

const Tombol = () => {
    const navigate = useNavigate()
    return(
        <div style={{height: '50px', backgroundColor: '#456'}}>
            <button onClick={() => navigate('/')} style={{height: '50px', width: '50px'}}>bacl</button>
        </div>
    )
}
export default Tombol;