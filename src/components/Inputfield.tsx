import React, { FormEvent } from "react";

interface props {
  todo: string;
  updateView: boolean;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  updateHandle: (e: React.FormEvent) => void;
}

const Inputfield = ({
  todo,
  setTodo,
  handleSubmit,
  updateView,
  updateHandle,
}: props) => {
  return (
    <>
      <h1>Form &nbsp;{todo}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enater name"
        />
        {updateView ? null : (
          <button className="btn-go" type="submit">
            GO
          </button>
        )}{" "}
      </form>
      {updateView ? (
        <button type="button" className="btn-up" onClick={updateHandle}>
          update
        </button>
      ) : null}
    </>
  );
};

export default Inputfield;
