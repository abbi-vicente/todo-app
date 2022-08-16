import React from "react";

const Task = (props) => {
	const isDone = props.status;

	return (
		<>
			<div className="Task">
				<h2>{props.name}</h2>

				{isDone ? (
					<p className="done-status">Yay you are done! 🥳</p>
				) : (
					<button className="done-btn" onClick={() => props.completeTask(props.id)}>
						I am done
					</button>
				)}

				<button className="delete-btn" onClick={() => props.deleteTask(props.id)}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Task;
