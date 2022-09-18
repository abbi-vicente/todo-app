import {useState} from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AllTasks from "./components/AllTasks";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid";

const App = () => {
	const [title, setTitle] = useState("Task Manager");

	const [tasks, setTasks] = useState([
		{
			id: uuidv4(),
			name: "Fix Bed",
			done: false,
		},
		{
			id: uuidv4(),
			name: "Walk dog",
			done: false,
		},
		{
			id: uuidv4(),
			name: "Clean bathroom",
			done: false,
		},
		{
			id: uuidv4(),
			name: "Clean PC",
			done: false,
		},
	]);

	const completeTaskHandler = (id) => {
		let newState = [...tasks];

		//look for the index of the given ID
		const index = newState.findIndex((task) => task.id === id);

		//change the done from false to true
		newState[index].done = true;

		//set the State to the new value
		setTasks(newState);
	};

	const [name, setName] = useState("");

	const onChange = (e) => {
		setName(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const targetTask = tasks.filter((task) => task.name.toLowerCase().trim() === name.toLowerCase().trim());

		if (targetTask.length <= 0 && name.trim() !== "") {
			const updatedTasks = [...tasks, newTask];
			setTasks(updatedTasks);
			addTask({name});
		} else if (name.trim() == "") {
			alert("Please add a task.");
		} else {
			alert("It's already on your list.");
		}
		setName("");
	};

	//Add a Task
	const [newTask, setNewTask] = useState(false);

	const addTask = (task) => {
		const newTasks = {
			id: uuidv4(),
			done: false,
			...task,
		};

		setTasks([...tasks, newTasks]);
	};

	// delete task
	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const doneTasks = tasks.filter((tasks) => tasks.done);
	const notDone = tasks.filter((tasks) => !tasks.done);

	return (
		<div className="App">
			<div>
				<h1 className="App-Title">{title}</h1>
				<nav className="Header">
					<Link to="All">All Tasks</Link> |<Link to="Done">Done Tasks</Link> |<Link to="Pending">Pending Tasks </Link>
				</nav>
				<br />
				<form className="Add-Todo" onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Add a task"
						value={name}
						name="text"
						className="Input-Todo"
						onChange={onChange}
					/>
					<button className="Todo-Btn">Add</button>
				</form>
			</div>

			{/* Routes - Done Task, Pending Task, All Task */}
			<Routes>
				<Route
					path="/"
					element={
						<>
							<AllTasks tasks={notDone} completeTask={completeTaskHandler} deleteTask={deleteTask} />{" "}
							<AllTasks tasks={doneTasks} deleteTask={deleteTask} />
						</>
					}
				/>
				<Route
					path=":status"
					element={<TaskList tasks={tasks} completeTask={completeTaskHandler} deleteTask={deleteTask} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
