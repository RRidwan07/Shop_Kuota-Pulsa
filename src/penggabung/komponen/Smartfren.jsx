import ButtonPenggabung from "./cardkomponen/ButtonPenggabung";
import {ListGroup , Badge, InputGroup, Form,} from "react-bootstrap"
import React, { useState } from "react"
import { ModalHeader, ModalBody, Modal} from "reactstrap"


const Smartfren = ({props, pulsaSmartfren, kuotaSmartfren}) => {
    const [modal, setModal] = useState(false)
    return(
        <>
        {/* ----------------------FOOTER POPUP------------------- */}
            <Modal 
            size="lg"
            isOpen={modal}
            toggle={() => setModal(modal)}>
                <ModalHeader toggle={() => setModal(false)}>Pembayaran</ModalHeader>
                <ModalBody>
                    <div>
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text>First and last name</InputGroup.Text>
                                    <Form.Control aria-label="First name" />
                                    <Form.Control aria-label="Last name" />
                                </InputGroup>
                                <Form.Group className="mb-3">
                                    <Form.Select size="sm">
                                    <option value='1'>Pilih Kategory</option>
                                    <option value='2'>Kuota</option>
                                    <option value='3'>Pulsa</option>
                                    </Form.Select>
                                </Form.Group>
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
            {/* -------------------AKHIR FOOTER POPUP -------------- */}
        <div id="Kuota">
            <h1>ini home smartfren</h1>
                <div style={{backgroundColor: 'silver'}}>
                <h2 style={{margin: '20px 0', padding: '10px 60px 10px 30px', backgroundColor: 'tomato', width: 'max-content', borderTopRightRadius: '999px', borderBottomRightRadius: '999px' }}> <b>Kuota</b> </h2>
                </div>
                {kuotaSmartfren.map((kuotaSmartfren) => {
                return(
                    <div>
                    <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <h3 className="fw-bold">{kuotaSmartfren.title}</h3>
                            {kuotaSmartfren.kuota}
                            </div>
                            <Badge bg="primary" pill>
                            {kuotaSmartfren.nominal}
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
            {pulsaSmartfren.map((pulsaSmartfren) => {
                return(
                    <div>
                    <ListGroup as="ul" style={{margin: '0 0 20px 0'}} onClick={() => setModal(true)}>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                            <h3 className="fw-bold">{pulsaSmartfren.title}</h3>
                            {pulsaSmartfren.pulsa}
                            </div>
                            <Badge bg="primary" pill>
                            {pulsaSmartfren.nominal}
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
export default Smartfren;