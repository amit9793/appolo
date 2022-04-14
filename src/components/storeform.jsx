import Forms from "./forms";
import { useState, useEffect } from "react";

const Storeform = () => {
  const [form, setForm] = useState([]);
  const [demo, setdemo] = useState("amit");

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch("  http://localhost:8000/data")
      .then((d) => d.json())
      .then((res) => {
        setForm(res);
      });
  };

  const getdata = (data) => {
    const payload = {
      name: data.username,
      age: data.age,
      address: data.address,
      department: data.department,
      salary: data.salary,
    };
    fetch("http://localhost:8000/data", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getTodo();
    });
  };

  var a = form[0].title;

  return (
    <>
      <Forms getdata={getdata} />
      <>{a}</>
    </>
  );
};

export default Storeform;
