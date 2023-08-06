import ButtonPenggabung from "./cardkomponen/ButtonPenggabung";
// import CardProperder from "./cardkomponen/CardProperder";
import {ListGroup, Badge, InputGroup, Form} from "react-bootstrap"
import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader } from "reactstrap";


const Indosat = ({props, kuotaIndosat, pulsaIndosat}) => {
    const [modal, setModal] = useState(false)
    return(
        <>
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
        <div id="Kuota">
            <h1>ini home indosat</h1>
            <div style={{backgroundColor: 'silver'}}>
            <h2 
            style={{margin: '20px 0', padding: '10px 60px 10px 30px', backgroundColor: 'tomato', width: 'max-content', borderTopRightRadius: '999px', borderBottomRightRadius: '999px' }}>
            Kuota </h2>
            </div>
                {kuotaIndosat.map((kuotaIndosat) => {
                    return(
                        <div>
                        <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto">
                                <h3 className="fw-bold">{kuotaIndosat.title}</h3>
                                {kuotaIndosat.kuota}
                                </div>
                                <Badge bg="primary" pill>
                                {kuotaIndosat.nominal}
                                </Badge>
                            </ListGroup.Item>
                        </ListGroup>
                        </div>
                    )
                })}
            <div style={{backgroundColor: 'silver'}}>
            <h2 
            style={{margin: '20px 0', padding: '10px 60px 10px 30px', backgroundColor: 'tomato', width: 'max-content', borderTopRightRadius: '999px', borderBottomRightRadius: '999px' }}>
            Pulsa </h2>
            </div>
            {pulsaIndosat.map((pulsaIndosat) => {
                return(
                    <div>
                    <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <h3 className="fw-bold">{pulsaIndosat.title}</h3>
                            {pulsaIndosat.pulsa}
                            </div>
                            <Badge bg="primary" pill>
                            {pulsaIndosat.nominal}
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                )
            })}
            <ButtonPenggabung />
        </div>
        </>
    )
}
export default Indosat;