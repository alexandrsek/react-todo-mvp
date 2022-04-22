import "./App.scss";
import Todo from "components/Todo/Todo.jsx";

function App() {
	return (
		<div className="todo-app">
			<div className="todo-app__content">
				<Todo />
			</div>
		</div>
	);
}

export default App;
