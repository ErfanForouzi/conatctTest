import { useState } from "react";
//form.css
import "./form.css"

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    userInfo: "user",
    gender: "female",
    rules: false,
  });
const [select,setSelect] = useState(false);

//selectHanler
const selectHandler = ()=>{
    setSelect(!select)
}

const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    if(name ==="rules"){
    setForm(form=>({...form,rules:!form.rules}))
    }else{

        setForm(form=>({...form,[name]:value}))
    }
}
const hadleSubmit = (e)=>{
e.preventDefault();
console.log(form);

}

  return (
  <>
      <form className={`container ${select && "selected"}`} onSubmit={hadleSubmit}>
      <h1>Form</h1>
      <div>
      <label htmlFor="email">Email:</label>
      <input
          type="text"
          name="email"
          value={form.email}
          id="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <select onChange={handleChange} value={form.userInfo} name="userInfo">
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="writer">writer</option>
        </select>
        <p style={{ color: "red" }}>
          {form.userInfo === "admin"
            ? "admin"
            : form.userInfo === "user"
            ? "user"
            : form.userInfo === "writer"
            ? "writer"
            : ""}
        </p>
      </div>
      <div>
        <input
        onChange={handleChange}
          type="radio"
          name="gender"
          value="male"
          id="male"
          checked={form.gender === "male"}
        />
        <label htmlFor="male">Male:</label>
        <input
        onChange={handleChange}
          type="radio"
          name="gender"
          value="female"
          id="female"
          checked={form.gender === "female"}
        />
        <label htmlFor="female">Female:</label>
        <input
        onChange={handleChange}
          type="radio"
          name="gender"
          value="other"
          id="other"
          checked={form.gender === "other"}
        />
        <label htmlFor="other">Other:</label>
        <p style={{ color: "green" }}>
          {form.gender === "male"
            ? "male"
            : form.gender === "female"
            ? "female"
            : form.gender === "other"
            ? "other"
            : ""}
        </p>
      </div>
      <div>
        <h4>Do you accept the role?</h4>
        <input
          checked={form.rules}
          type="checkbox"
          name="rules"
          onChange={handleChange}
        />
        <p style={{ color: form.rules ? "green" : "red" }}>
          {form.rules ? "قوانین رو میپذیرم" : "قوانین رو نمیپذیرم"}
        </p>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
    <div>
        <button type="button" onClick={selectHandler}>
            select
        </button>
    </div>
  </>
  );
};
export default Form;
