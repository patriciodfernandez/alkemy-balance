import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOne } from "../../state/operation";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOne(id)).then((data) => {
      if (data.payload) {
        setConcept(data.payload.concept)
        setAmount(data.payload.amount)
        setDate(data.payload.date)
        setType(data.payload.type)

      }
    });
    navigate(`/operation/edit/${id}`);

    // eslint-disable-next-line
  }, [dispatch]);
  var oneOperation = useSelector((state) => state.operation);

  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

   
 
  const handleChangeConcept = (e) => {
    setConcept(e.target.value);
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const ObjectEdited = { concept, amount, date, type };

  const submitHandler = (e) => {
    e.preventDefault();

    return axios
      .put(`http://localhost:8080/api/operations/${id}`, ObjectEdited)
      .then((respuesta) => {
        console.log(respuesta);
       })
       
      .then(() => {
        swal("Producto editado!");

        navigate(`/`);
      });
  };
  return (
    <div>
      <div>
        {oneOperation.length ? (
          <div className="row no-gutters wrapper">
            <div className="col-10 col-lg-5">
              <form
                className="shadow-lg"
                onSubmit={submitHandler}
                encType="multipart/form-data"
              >
                <h1 className="mb-3">Editar Operación</h1>
                <div className="form-group">
                  <label>Concepto</label>
                  <textarea
                    value={concept}
                    className="form-control"
                    onChange={handleChangeConcept}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Monto </label>
                  <input
                    value={amount}
                    className="form-control"
                    onChange={handleChangeAmount}
                  />
                </div>

                <div className="form-group"></div>

                <div className="form-group">
                  <label>Fecha</label>
                  <input
                    value={date}
                    className="form-control"
                    onChange={handleChangeDate}
                  />
                </div>

                <div className="form-group">
                  <label>Tipo</label>
                  <input
                    value={type}
                    className="form-control"
                    onChange={handleChangeType}
                  />
                </div>

                <button type="submit" className="btn btn-block py-3">
                  CONFIRMAR
                </button>
              </form>
            </div>
          </div>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default Index;
