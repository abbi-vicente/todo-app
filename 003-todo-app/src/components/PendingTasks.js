import TaskList from "./TaskList";

// shows only pending tasks
const PendingTasks = (props) => {
	return (
		<div>
			<h1 className="Page-Status">Pending Tasks</h1>
			<TaskList
				tasks={props.tasks}
				completeTask={props.completeTask}
				editTask={props.handleEditClick}
				deleteTask={props.deleteTask}
			/>
		</div>
	);
};

export default PendingTasks;
