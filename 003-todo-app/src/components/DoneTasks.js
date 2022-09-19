import TaskList from "./TaskList";

// shows only done tasks
const DoneTasks = (props) => {
	return (
		<div>
			<h1 className="Page-Status">Done Tasks</h1>
			<TaskList tasks={props.tasks} deleteTask={props.deleteTask} />
		</div>
	);
};

export default DoneTasks;
