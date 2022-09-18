const Task = (props) => {
	const isDone = props.status;

	return (
		<>
			<div className="Task">
				<h2>{props.name}</h2>

				{isDone ? (
					<p className="Done-Status">Yay you are done! 🥳</p>
				) : (
					<button className="Done-Btn" onClick={() => props.completeTask(props.id)}>
						I am done
					</button>
				)}

				<button className="Delete-Btn" onClick={() => props.deleteTask(props.id)}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Task;
