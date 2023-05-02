import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Home;
