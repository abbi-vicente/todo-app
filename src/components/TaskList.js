import Task from "./Task";
import {useParams} from "react-router";

const TaskList = (props) => {
	const {status} = useParams();

	let filter = status?.toLowerCase() === "done" ? true : false;
	let all = status?.toLowerCase() === "all";

	const tasks = props.tasks
		.filter((task) => task.done === filter || all)
		.map((task) => (
			<Task
				key={task.id}
				id={task.id}
				name={task.name}
				status={task.done}
				completeTask={props.completeTask}
				deleteTask={props.deleteTask}
			/>
		));

	return <div>{tasks}</div>;
};

export default TaskList;
