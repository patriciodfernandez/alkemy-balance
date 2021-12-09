import React from "react";
import { operations } from "../state/operation";
import { useNavigate } from "react-router-dom";
import { getOne } from "../state/operation";
import { deleteProduct } from "../state/operation";



import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(operations());
  }, [dispatch]);
  const user = useSelector((state) => state.user);

  // Todos las operaciones de la tablaschema
  var arrayOperations = useSelector((state) => state.operation);

  // Todos las operaciones del usuario
  var arrayOpUser = arrayOperations?.filter((op) => {
    return op.userId === user?.id;
  });
  console.log("arrayOpUser,",arrayOpUser)
  // ultimas 10 operaciones
  var arrayOpUserLast10 = arrayOpUser.slice(-10);

  // Todos los ingresos
  var arrayIngresos = arrayOpUser.filter((op) => {
    return op.type === "ingreso";
  });
  var arraytotalIngresos = [];
  arrayIngresos.forEach((op) => arraytotalIngresos.push(op.amount));

  var totalIngresos = 0;

  for (let i of arraytotalIngresos) {
    totalIngresos += i;
  }

  // Todos los Egresos
  const arrayEgresos = arrayOpUser.filter((op) => {
    return op.type === "egreso";
  });
  const arraytotalEgresos = [];
  arrayEgresos.forEach((op) => arraytotalEgresos.push(op.amount));

  var totalEgresos = 0;

  for (let i of arraytotalEgresos) {
    totalEgresos += i;
  }

  // suma final
  const totalFinal = totalIngresos - totalEgresos;

  const seleccionarOperation = (id) => {
    dispatch(getOne(id)).then(navigate(`/operation/edit/${id}`));
  };
  const borrarOperation = (id) => {
    dispatch(deleteProduct
      (id)).then(navigate(`/`));
  };
  
 
  return (
    <div>
      {user.id ? (
        <div>
          <div className="display-4 m-5">
            <div className="text-center">
              {" "}
              Bienvenido a tu balance {`¡${user.name}!`}
              <br /> tu cuenta es la nº {`${user.id}!`}
            </div>
          </div>
          <div className="row no-gutters m-1">
            <Table responsive size="sm" bordered hover>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {arrayOpUserLast10.map((op) => {
                  return (
                    <tr
                      key={op.id}
                      style={{
                        backgroundColor:
                          op.type === "ingreso" ? "#65f078" : "#fd8484",
                      }}
                    >
                      <td>{op.concept}</td>
                      <td>{op.amount}</td>
                      <td>{op.date}</td>
                      <td>{op.type}</td>
                      <td>
                        <button
                          onClick={() => seleccionarOperation(op.id)}
                          className="btn btn-sm text-light bg-secondary mx-2"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => borrarOperation(op.id)}
                          className="btn btn-sm text-light bg-danger  mx-2"
                        >
                          Borrar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>

               <thead>
                <tr>
                  <th> Saldo TOTAL </th>

                  <th>
                    {" "}
                    <h3>{totalFinal}</h3>
                  </th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      ) : (
        <div className="display-4 m-5">
          <div className="text-center">
            {" "}
            Bienvenido a tu balance, por favor ingresa o registra una nueva
            cuenta.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
