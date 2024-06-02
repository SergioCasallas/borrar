import React from "react";
import { Avatar } from "@nextui-org/avatar";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

import ModalComponent from "../components/modal";

const Income = () => {
  const header = ["fecha", "tipo", "valor", "description"];
  const body = [
    {
      id: "1",
      fecha: "fecha",
      tipo: "tipo",
      valor: "valor",
      description: "description",
    },
    {
      id: "2",
      fecha: "fecha",
      tipo: "tipo",
      valor: "valor",
      description: "description",
    },
    {
      id: "3",
      fecha: "fecha",
      tipo: "tipo",
      valor: "valor",
      description: "description",
    },
    {
      id: "4",
      fecha: "fecha",
      tipo: "tipo",
      valor: "valor",
      description: "description",
    },
  ];

  return (
    <div>
      Income
      <div className="flex flex-col justify-around">
        <div>
          <Avatar
            className="w-64 h-64 text-tiny mx-auto my-5"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <h1 className="text-center">
            <b>Capital Actual: </b>
            {""}
            $120.230.430
          </h1>
        </div>
        <h2 className="font-bold mx-auto">Nombre Usuario</h2>
        <ModalComponent
          action={() => {
            console.log(`asdfasd`);
          }}
          title="sergio"
        >
          <h1>asdfasdf</h1>
        </ModalComponent>
        {/* <Button className="mx-auto my-5" color="primary">
          Agregar
        </Button> */}
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          {header.map((item) => (
            <TableColumn key={item}>{item}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {body.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fecha}</TableCell>
              <TableCell>{item.tipo}</TableCell>
              <TableCell>{item.valor}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Income;
