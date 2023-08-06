import { useState } from "react";

const CardPercobaan = () => {
    // const navigate = useNavigate()
    const [counter, setCounter] = useState(0)

    const AddPoint = () => {
        setCounter(counter + 1)
    }
    return(
        // <div>
        // <h1>haii ini card</h1>
        // <button onClick={() => navigate('/')}>Back</button>
        // </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'block'}}>
            <h1>hitungan</h1>
            <h2>{counter}</h2>
            <button onClick={AddPoint}>add point</button>
        </div>
        </div>
    );
}
export default CardPercobaan;