import { useState } from "react";

const Forms = ({ getdata }) => {
  const [form, setForm] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    getdata(form);
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          onChange={handlechange}
          name="username"
          placeholder="enter name"
        ></input>
        <input
          onChange={handlechange}
          name="age"
          placeholder="enter age"
        ></input>
        <input
          onChange={handlechange}
          name="address"
          placeholder="enter address"
        ></input>
        <input
          onChange={handlechange}
          name="department"
          placeholder="enter department"
        ></input>
        <input
          onChange={handlechange}
          name="salary"
          placeholder="enter salary"
        ></input>
        <input
          onChange={handlechange}
          name="marital state"
          placeholder="marital state"
        ></input>

        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default Forms;
