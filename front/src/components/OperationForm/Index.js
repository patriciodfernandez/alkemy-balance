import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { operation } from "../../state/operation";
import swal from "sweetalert";

import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newOperation, setNewOperation] = useState({});
  if (user) {
    newOperation.userId = user.id;
  } 
  const handleChange = (e) => {
    setNewOperation({ ...newOperation, [e.target.name]: e.target.value });
  };

  const submitHandleer = (e) => {
    e.preventDefault();

    if (
      conceptValidate === "mostrar" &&
      dateValidate === "mostrar" &&
      amountValidate === "mostrar" 
    ) {
       dispatch(operation(newOperation)).then(() => {
        swal("¡Operación registrada exitosamente!");
        navigate("/");
      });
    }
  };

  const [conceptValidate, setConceptValidate] = useState("inicial");
  const [amountValidate, setAmountValidate] = useState("inicial");
  const [dateValidate, setDateValidate] = useState("inicial");
 
  const requeridoConcept = (e) => {
    let expresion = /[A-Za-z]/;

    if (newOperation.concept !== "" && expresion.test(newOperation.concept)) {
      setConceptValidate("mostrar");
    } else {
      // el input esta vacio
      setConceptValidate("nomostrar");
    }
  };
  const requeridoAmount = (e) => {
    let expresion = /[0-9]/;

    if (newOperation.amount !== "" && expresion.test(newOperation.amount)) {
      setAmountValidate("mostrar");
    } else {
      // el input esta vacio
      setAmountValidate("nomostrar");
    }
  };
  const requeridoDate = (e) => {
    let expresion = /[0-9]/;

    if (newOperation.date !== "" && expresion.test(newOperation.date)) {
      setDateValidate("mostrar");
    } else {
      // el input esta vacio
      setDateValidate("nomostrar");
    }
  };
  
  const [selectedOption, setSelectedOption] = useState("Tipo de operación");
 
  if (selectedOption !== "Tipo de operación") {
    newOperation.type = selectedOption;
  } 


   return (
    <div>
      <div className="row no-gutters wrapper">
        <div className="col-10 col-lg-5">
          <form
            className="shadow-lg"
            onSubmit={submitHandleer}
            encType="multipart/form-data"
          >
            <h1 className="mb-3">Operations</h1>

            <div className="form-group">
              <label> Concepto </label>
              <input
                type="Concept"
                id="Concept_field"
                className={` form-control ${
                  conceptValidate === "inicial"
                    ? ""
                    : conceptValidate === "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                `}
                name="concept"
                onChange={handleChange}
                onBlur={requeridoConcept}
              />
              <div className="valid-feedback">Todo bien continúe</div>
              <div className="invalid-feedback">
                Ingrese un concepto válido{" "}
              </div>
            </div>
            <div className="form-group">
              <label> Monto </label>
              <input
                type="Amount"
                id="Amount_field"
                className={` form-control ${
                  amountValidate === "inicial"
                    ? ""
                    : amountValidate === "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                `}
                name="amount"
                onChange={handleChange}
                onBlur={requeridoAmount}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">
                Entre un monto válido válido{" "}
              </div>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                id="date_field"
                className={` form-control ${
                  dateValidate === "inicial"
                    ? ""
                    : dateValidate === "mostrar"
                    ? "is-valid "
                    : "is-invalid"
                }             
                `}
                name="date"
                onChange={handleChange}
                onBlur={requeridoDate}
              />
              <div className="valid-feedback">Todo bien, continúe</div>
              <div className="invalid-feedback">Ingrese una fecha válida</div>
            </div>

            <div className="form-group">
              <label>Type</label>
              <select
                name="store"
                
                className="form-control"
                value={selectedOption}

                onChange={e => setSelectedOption(e.target.value)}>
              
                <option value="seleccione">Tipo de operación</option>;
                <option value="ingreso">Ingreso </option>
                <option value="egreso">Egreso </option>
              </select>
            </div>

            <button
              id="Operation_button"
              type="submit"
              className="btn btn-block py-3"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
