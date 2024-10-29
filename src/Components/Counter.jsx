import { useEffect, useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [userInfo, setUserInfo] = useState("user");
  const [gender, setGender] = useState("female");
  const [role,setRole] = useState(false)

  console.log(role);
  const handleIncrement = () => {
    setCounter((pevCount) => pevCount + 1);
  };
  const handleIncrement3 = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    setUserInfo(e.target.value);
  };

  const checkBoxHandler = e=>{
    setRole(prevRole=>!prevRole)
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement3}>Increment3</button>
      <div>
        <select value={userInfo} onChange={handleSelect}>
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="writer">writer</option>
        </select>
        <p style={{ color: "red" }}>
          {userInfo === "admin"
            ? "admin"
            : userInfo === "user"
            ? "user"
            : userInfo === "writer"
            ? "writer"
            : ""}
        </p>
      </div>
      <div>
        <input
          onChange={(e) => setGender(e.target.value)}
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={gender ==="male"}

        />
        <label htmlFor="male">Male:</label>
        <input
          onChange={(e) => setGender(e.target.value)}
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={gender ==="female"}
        />
        <label htmlFor="female">Female:</label>
        <input
          onChange={(e) => setGender(e.target.value)}
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={gender ==="other"}

        />
        <label htmlFor="other">Other:</label>
        <p style={{ color: "green" }}>
          {gender === "male"
            ? "male"
            : gender === "female"
            ? "female"
            : gender === "other"
            ? "other"
            : ""}
        </p>
      </div>
      <div>
      <h4>
        Do you accept the role?
      </h4>
        <input checked={role} type="checkbox" onChange={checkBoxHandler} />
        <p style={{color:role?"green":"red"}}>
            {role ? "قوانین رو میپذیرم" : "قوانین رو نمیپذیرم"}
        </p>
      </div>
    </div>
  );
};
export default Counter;
