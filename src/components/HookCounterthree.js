import React, { useState } from "react";

export default function HookCounterthree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
      </form>
      <h3>First Name - {name.firstName}</h3>
      <h3>Last Name - {name.lastName}</h3>
    </div>
  );
}
