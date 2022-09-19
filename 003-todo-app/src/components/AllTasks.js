import Task from "./Task";

// shows all (done and pending tasks)
const AllTasks = (props) => {
	const tasks = props.tasks.map((task) => {
		return (
			<Task
				key={task.id}
				id={task.id}
				name={task.name}
				status={task.done}
				completeTask={props.completeTask}
				deleteTask={props.deleteTask}
			/>
		);
	});

	return <div>{tasks}</div>;
};

export default AllTasks;
