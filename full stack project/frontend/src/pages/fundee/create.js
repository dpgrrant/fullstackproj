import React, { Fragment, useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [goal, setGoal] = useState("");


  const CreatePost = async e => {
    e.preventDefault();
    try {
      const body = { title,text,goal};
      await fetch("http://localhost:4000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        
      });
    } catch (err) {
      console.error(err.message);
    }
  };
 
 
    return (
      <form onSubmit={CreatePost}>
        <label>
          Title:
          <input type="text" value={title} name="title" onChange={e=>setTitle(e.target.value)}/>
        </label>
        <label>
          Text:
          <input type="text" value={text} name="text" onChange={e=>setText(e.target.value)} />
        </label>
        <label>
          Goal:
          <input type="text" value={goal} name="goal" onChange={e=>setGoal(e.target.value)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
}
 
export default Create;

