import React from "react";
import { useState } from "react";
import styles from "../css/parentInput.module.css";
import { db } from "../Firebase_Config";
import { addDoc, collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { useEffect } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState("");
  const [todoArray, setTodoArray] = useState(null)
  const collectionRef = collection(db, "todoArrays")
  const getTodos = async () => {
     const data = await getDocs(collectionRef)
    //  const mainData = data.map((item))
  }


  const addTodos = async (e, item) => {
    // e.preventDefault()
    // await setTodoArray((prev) => prev.push(item))
    // await addDoc(docRef, {
    //     todoArray
    // })
  }
  
  useEffect(() => {
     getTodos()
    }, [])

  return (
    <div>
      <form onSubmit={(e) => addTodos(e, todos)}>
        <label htmlFor="todo"></label>
        <input
          style={styles.input}
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          type="text"
          placeholder="type your todos here"
          id="todo"
        />
      </form>
    </div>
  );
};

export default TodoApp;
