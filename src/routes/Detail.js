import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Detail = ({ toDos }) => {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      {toDo?.text}
      Created at: {toDo?.id}
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
