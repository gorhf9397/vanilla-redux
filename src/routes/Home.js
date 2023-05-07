import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../Store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
};
/** redux state 로 부터 home(component)에 prop으로써 전달 */
const mapStateToProps = (state) => {
  return { toDos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
