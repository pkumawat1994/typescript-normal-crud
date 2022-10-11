import React from "react";
import { postprops } from "./interfaces";
const Table = ({ todoAr }: postprops) => {
  return (
    <>
      <h1>Table</h1>
      {console.log("fdgfgfg", todoAr)}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">CODE</th>
            <th scope="col">NAME</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {todoAr.map((ele, i) => {
            return (
              <React.Fragment>
                <tr>
                  <td>{i + 1}</td>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.isDone}</td>
                  <td>
                    <button className="btn btn-success">EDIT</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      //   onClick={() => deleteHandle(i)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
