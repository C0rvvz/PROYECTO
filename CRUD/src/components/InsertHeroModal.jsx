import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap';

const InsertHeroModal = ({ isOpen, toggle, insertar, form, handleChange }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>Insertar nuevo héroe</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>HeroeID:</Label>
          <Input type="text" name="heroeid" value={form.heroeid} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Personaje:</Label>
          <Input type="text" name="alias" value={form.alias} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Poder:</Label>
          <Input type="text" name="poder" value={form.poder} onChange={handleChange} />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={insertar}>Insertar</Button>
        <Button color="danger" onClick={toggle}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
};

export default InsertHeroModal;
