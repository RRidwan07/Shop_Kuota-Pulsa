import { useState } from "react";
import ButtonPenggabung from "./cardkomponen/ButtonPenggabung";
import { ListGroup, Badge, InputGroup,Form } from "react-bootstrap";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Telkomsel = ({props, kuotaTelkomsel, pulsaTelkomsel}) => {
    const [modal, setModal] = useState(false)
    return (
        <>
        {/* ------------------------FOOTERS-------------------- */}
        <Modal
            size="lg"
            isOpen={modal}
            toggle={() => setModal(modal)}
            >
                <ModalHeader
                toggle={() => setModal(false)}
                >Metod pembayaran</ModalHeader>
                <ModalBody>
                    <div>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text>First and last name</InputGroup.Text>
                                    <Form.Control aria-label="First name" />
                                    <Form.Control aria-label="Last name" />
                                </InputGroup>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm">Nama Barang</InputGroup.Text>
                                    <Form.Control
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        />
                                </InputGroup>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm">Harga Barang</InputGroup.Text>
                                    <Form.Control
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        />
                                </InputGroup>
                                <button className="button-popup">Kirim</button>
                    </div>
                </ModalBody>
            </Modal>
        {/* -----------------------AKHIR FOOTER---------------- */}
        <div id="Kuota">
        <h1>Ini home Telkomsel</h1>
        <div style={{backgroundColor: 'silver'}}>
        <h2 style={{margin: '20px 0', padding: '10px 60px 10px 30px', backgroundColor: 'tomato', width: 'max-content', borderTopRightRadius: '999px', borderBottomRightRadius: '999px' }}> <b>Kuota</b> </h2>
        </div>
        {
            kuotaTelkomsel.map((kuotaTelkomsel) => {
                return(
                    <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <h3 className="fw-bold">{kuotaTelkomsel.title}</h3>
                            {kuotaTelkomsel.kuota}
                            </div>
                            <Badge bg="primary" pill>
                            {kuotaTelkomsel.nominal}
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })
        }
        <div style={{backgroundColor: 'silver'}}>
        <h2 
        style={{margin: '20px 0', padding: '10px 60px 10px 30px', backgroundColor: 'tomato', width: 'max-content', borderTopRightRadius: '999px', borderBottomRightRadius: '999px' }}>
        Pulsa </h2>
        </div>
        {
            pulsaTelkomsel.map((pulsaTelkomsel) => {
                return(
                    <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <h3 className="fw-bold">{pulsaTelkomsel.title}</h3>
                            {pulsaTelkomsel.pulsa}
                            </div>
                            <Badge bg="primary" pill>
                            {pulsaTelkomsel.nominal}
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })
        }
        <ButtonPenggabung />
        </div>
        </>
    )
}
export default Telkomsel;