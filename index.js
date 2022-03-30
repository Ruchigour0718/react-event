import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you clicked on submit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
