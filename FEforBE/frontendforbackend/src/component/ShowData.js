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
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">age</th>
            <th scope="col">name</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
