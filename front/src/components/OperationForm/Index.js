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
    if(user){
        newOperation.userId = user.id
    }
  const handleChange = (e) => {
    setNewOperation({ ...newOperation, [e.target.name]: e.target.value });
  };

  const submitHandleer = (e) => {
    e.preventDefault();

    if (
      conceptValidate == "mostrar" &&
      dateValidate == "mostrar" &&
      amountValidate == "mostrar" &&
      typeValidate == "mostrar"
    ) {
      console.log("ENTRE AL IFFFF");
      dispatch(operation(newOperation)).then(() => {
        
          swal("¡Operación registrada exitosamente!");
          navigate("/");
       });
    }
  };

  const [conceptValidate, setConceptValidate] = useState("inicial");
  const [amountValidate, setAmountValidate] = useState("inicial");
  const [dateValidate, setDateValidate] = useState("inicial");
  const [typeValidate, setTypeValidate] = useState("inicial");


 
 const requeridoConcept= (e) => {
    let expresion =/[A-Za-z]/   ;

    if (newOperation.concept != "" && expresion.test(newOperation.concept)) {
        setConceptValidate("mostrar");
    } else {
      // el input esta vacio
      setConceptValidate("nomostrar");
    }
  };
 const requeridoAmount= (e) => {
    let expresion =/[A-Za-z]/   ;

    if (newOperation.amount != "" && expresion.test(newOperation.amount)) {
        setAmountValidate("mostrar");
    } else {
      // el input esta vacio
      setAmountValidate("nomostrar");
    }
  };
  const requeridoDate = (e) => {
    let expresion = /[A-Za-z]/;

    if (newOperation.date != "" && expresion.test(newOperation.date)) {
        setDateValidate("mostrar");
    } else {
      // el input esta vacio
      setDateValidate("nomostrar");
    }
  };
  const requeridoType = (e) => {
    let expresion = /[A-Za-z]/;

    if (newOperation.type != "" && expresion.test(newOperation.type)) {
        setTypeValidate("mostrar");
    } else {
      // el input esta vacio
      setTypeValidate("nomostrar");
    }
  };
 
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
          <label > Concepto </label>
          <input
            type="Concept"
            id="Concept_field"
            className={` form-control ${
              conceptValidate == "inicial"
                ? ""
                : conceptValidate == "mostrar"
                ? "is-valid "
                : "is-invalid"
            }             
                `}
            name="name"
            onChange={handleChange}
            onBlur={requeridoConcept}
          />
          <div className="valid-feedback">Todo bien continúe</div>
          <div className="invalid-feedback">Ingrese un concepto válido </div>
        </div>
        <div className="form-group">
          <label > Monto </label>
          <input
            type="Amount"
            id="Amount_field"
            className={` form-control ${
              amountValidate == "inicial"
                ? ""
                : amountValidate == "mostrar"
                ? "is-valid "
                : "is-invalid"
            }             
                `}
            name="lastName"
            onChange={handleChange}
            onBlur={requeridoAmount}
          />
          <div className="valid-feedback">Todo bien, continúe</div>
          <div className="invalid-feedback">Entre un monto válido válido </div>
        </div>

        <div className="form-group">
          <label >Date</label>
          <input
            type="date"
            id="date_field"
            className={` form-control ${
              dateValidate == "inicial"
                ? ""
                : dateValidate == "mostrar"
                ? "is-valid "
                : "is-invalid"
            }             
                `}
            name="email"
            onChange={handleChange}
            onBlur={requeridoDate}
          />
          <div className="valid-feedback">Todo bien, continúe</div>
          <div className="invalid-feedback">Ingrese una fecha válida</div>
        </div>

        <div className="form-group">
          <label >Type</label>
          <input
            type="type"
            id="type_field"
            className={` form-control ${
              typeValidate == "inicial"
                ? ""
                : typeValidate == "mostrar"
                ? "is-valid "
                : "is-invalid"
            }             
                `}
            name="password"
            onChange={handleChange}
            onBlur={requeridoType}
          />
          <div className="valid-feedback">Todo bien, continúe</div>
          <div className="invalid-feedback">Ingrese un tipo válido</div>
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
