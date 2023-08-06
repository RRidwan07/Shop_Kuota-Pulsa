
import {ListGroup, Badge} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardProperder = ({title, data, nominal}) => {
    const navigate = useNavigate()
    return(
        <div  style={{display: 'flex', margin: '0 0 10px 0', justifyContent: 'center'}}>
             <ListGroup as="ul"  style={{width: '100vh', cursor: 'progress'}}  onClick={() => navigate('/')}>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <h3 className="fw-bold">{title}</h3>
                    {data}
                    </div>
                    <Badge bg="primary" pill>
                    {nominal}
                    </Badge>
                </ListGroup.Item>
                </ListGroup>
                {/* <div style={{height: '80px', width: 'maksContentent', display: 'blok', border: '0.1px solid', borderRadius: '5px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0 0 20px'}}>
                        <h4>{title}</h4>
                        <p style={{margin: '0 20px 0 440px', backgroundColor: 'blue', borderRadius: '99999px', padding: '2px 5px'}}><b>{nominal}</b></p>
                    </div>
                        <p style={{margin: '0 0 0 20px'}}>{data}</p>
                </div> */}
        </div>
    )
}
export default CardProperder;