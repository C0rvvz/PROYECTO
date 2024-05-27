import React from 'react';
import { Table, Button } from 'reactstrap';
import '../assets/styles/components/Table.css';

const HeroTable = ({ data, handleMouseEnter, handleMouseLeave, hoverIndex, mostrarModalEditar, eliminar }) => {
  return (
    <Table striped bordered hover className="custom-table">
      <thead>
        <tr>
          <th>HeroeID</th>
          <th>Alias</th>
          <th>Poderes</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elemento, index) => (
        <tr>
            <td>{elemento.heroeid}</td>
            <td>{elemento.alias}</td>
            <td>{elemento.poder}</td>
            <td>
                <Button color="success" onClick={() => mostrarModalEditar(elemento)}>Editar</Button>{" "}
                <Button color="danger" onClick={() => eliminar(elemento)}>Eliminar</Button>
            </td>
        </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default HeroTable;
