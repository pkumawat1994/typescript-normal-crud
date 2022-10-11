import React, { useState } from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import { todoType } from "./components/interfaces";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [indx, setIndx] = useState<number>(0);
  const [updateView, setupdateView] = useState<boolean>(false);
  const [todoAr, setTodoAr] = useState<todoType[]>([]);

  //--------------------------SUBMIT HANDLE------------------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo !== "") {
      setTodoAr([...todoAr, { id: Date.now(), name: todo, isDone: false }]);
    } else {
      alert("Please fill Your Name");
    }
    setTodo("");
  };

  //---------------------------DELETE ELEMENT-------------------------

  const deleteHandle = (id: number) => {
    console.log("kjhjhk", id);
    setTodoAr(todoAr.filter((ele, i) => i !== id));
  };

  //-----------------------EDIT BUTTON LOAD STATE----------------------

  const editHandle = (obj: any, i: number) => {
    // console.log(4444, i);
    setupdateView(true);

    setIndx(i);
    setTodo(obj.name);
  };
  //----------------------UPDATE BUTTON----------------------------------
  const updateHandle = () => {
    const data = todoAr[indx];
    data.name = todo;
    setTodo("");
    setTodoAr(todoAr);
    setupdateView(false);
  };
  return (
    <>
      <div className="mainDiv">
        <Inputfield
          todo={todo}
          setTodo={setTodo}
          updateHandle={updateHandle}
          handleSubmit={handleSubmit}
          updateView={updateView}
        />
        {todoAr.length === 0 ? (
          <h4 className="loading">No data in Table </h4>
        ) : (
          <div className="table-wrapper">
            {/* <Table todoAr={todoAr} deleteHandle={deleteHandle} /> */}
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col"> EMPLOYEE CODE</th>
                  <th scope="col">NAME</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {todoAr.map((ele, i) => {
                  return (
                    <React.Fragment>
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.isDone}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={(e) => editHandle(ele, i)}
                          >
                            EDIT
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteHandle(i)}
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
          </div>
        )}
      </div>
    </>
  );
};

export default App;
