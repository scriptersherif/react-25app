import React, { useState } from "react";
const Users = () => {
  const [work, setWork] = useState([
    {
      Name: "emin",
      job: "solartis",
    },
    {
      Name: "justin",
      job: "no",
    },
    {
      Name: "kim",
      job: "no",
    },
    {
      Name: "jonny",
      job: "solartis",
    },
  ]);
  const filter = work.filter((item) => item.job !== "no");
  console.log(filter);
  return (
    <div>
      {filter.map((item) => (
        <div>
          {item.Name}--{item.job}
        </div>
      ))}
    </div>
  );
};

export default Users;
