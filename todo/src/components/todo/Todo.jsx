
import { useDispatch, useSelector } from "react-redux";
import './Todoc.css'
import { useEffect, useRef, useState } from "react";
import { addTodo, deleteTodo, editTodo } from '../../redux/Counterslice';
import img1 from "../../assets/5974633.png";
import img2 from "../../assets/delete-icon-256x256-9x92mtma.png"
import img3 from "../../assets/8023699.png"
import svimg from "../../assets/save-icon-2048x2048-iovw4qr4.png"
const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState("");
  const [todoId, setTodoId] = useState(null);


  useEffect(() => {
    if (isEdit) {
      console.log(inputRef.current);
      inputRef.current.focus();

    }

  }, [isEdit]);


  const handlesave = (todoid) => {
    if (edit == " ") {
      alert("field cannot be empty")
    } else {
      dispatch(editTodo({ id: todoid, title: edit }));
      setIsEdit(false);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault()
    if (task == "") {
      alert("field cannot be empty")
    } else {
      dispatch(addTodo(task));
      setTask("")
    }

  };


  const handleEdit = (todoid,title) => {
    setIsEdit(true);
    setTodoId(todoid);
    setEdit(title)



  };
  return (
    <div className="main-div">
      <div className="div1">
        <h1 className="h1-txt">To </h1>
        <h1 className="h1-txt2">Do</h1>
      </div>

      <form className="inpt-btn-div" onSubmit={handlesubmit}>

        <input

          type="text"
          name="todoinpt"
          className="task-inpt"
          placeholder="enter task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button id="add">
          <img className="img1" src={img1} />
        </button>
      </form>
      <div className="todos">
      {todo.map((todos) => {
        return (
          <div key={todos.id} className="todiv2">

            <div className="todiv">

              <div className="lidiv">
                <li className="li">{todos.title}</li>
              </div>

              <div className="div2">

                <button className="edbtn" onClick={() => handleEdit(todos.id, todos.title)}>
                  <img className="img2" src={img3} />
                </button>
                <button className="dlbtn" onClick={() => dispatch(deleteTodo(todos.id))}>
                  <img className="img3" src={img2} />
                </button>
              </div>
            </div>
            {isEdit && todoId == todos.id && (
              <div className="divsvin">
              <form onSubmit={() => handlesave(todos.id)}>
                <input
                  ref={inputRef}
                  type="text"
                  defaultValue={todos.title}
                  onChange={(e) => setEdit(e.target.value)}
                  className="editinpt"
                />
                <button className="svbtn" ><img className="svimg" src={svimg} /></button>
              </form>
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
};




export default Todo;
