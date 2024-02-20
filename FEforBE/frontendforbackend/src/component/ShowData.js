import axios from "axios";
import React, { useEffect, useState } from "react";
const url = "http://localhost:8080";
const ShowData = () => {
  const [state, setState] = useState([]);

  const fetchData = () => {
    axios
      .get(`${url}/person`)
      .then((data) => {
        setState(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // ------------------POST API CALL---------------
  const [postdata, setPostdata] = useState({
    name: "",
    age: "",
    address: "",
  });
  console.log("postdata", postdata);
  const getDetails = (value, key) => {
    // console.log("e", e.target.value);
    setPostdata({ ...postdata, [key]: value });
  };
  const SendData = () => {
    axios
      .post(`${url}/person`, postdata)
      .then((data) => {
        console.log("res", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -----------------DELETE
  const hadledelete = (id) => {
    console.log("delete function call");
    axios
      .delete(`${url}/person`, { data: { id: id } })
      .then((data) => {
        console.log("res", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">age</th>
              <th scope="col">address</th>
            </tr>
          </thead>
          <tbody>
            {state.map((d) => {
              return (
                <tr>
                  <th scope="row">{d.id}</th>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>@{d.address}</td>
                  <td onClick={() => hadledelete(d.id)}>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* ----------------------------------POST CALL FORM----------------- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <p>Name</p>
          <input
            type="text"
            aria-label="name"
            onChange={(e) => getDetails(e.target.value, "name")}
          />
        </div>
        <div>
          <p>age</p>
          <input
            type="num"
            aria-label="name"
            onChange={(e) => getDetails(e.target.value, "age")}
          />
        </div>
        <div>
          <p>add</p>
          <input
            type="text"
            onChange={(e) => getDetails(e.target.value, "address")}
          />
        </div>
        <button className="btn btn-success" onClick={() => SendData()}>
          POSTDATA
        </button>
      </div>
    </div>
  );
};

export default ShowData;
