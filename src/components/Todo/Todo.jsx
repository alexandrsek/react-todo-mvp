import { arrayMoveImmutable } from "array-move";
import Button from "components/Button/Button.jsx";
import exampleTodos from "data/todos.json";
import { useLocalStorageState } from "hooks/useLocalStorageState.js";
import { useMobileDetection } from "hooks/useMobileDetection.js";
import React, { useCallback } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { patchObject } from "utils/data.js";
import "./Todo.scss";
import TodoItem from "./TodoItem.jsx";
import { createTodo } from "./utils.js";

export const Todo = () => {
	const [todos, setTodos] = useLocalStorageState(exampleTodos, "todos");
	const isMobile = useMobileDetection();

	// Reorder todos
	const handleDrag = useCallback(
		(dragEvent) => {
			setTodos((todos) => {
				const from = dragEvent?.source?.index;
				const to = dragEvent?.destination?.index;
				if (to !== undefined) return arrayMoveImmutable(todos, from, to);
				return todos;
			});
		},
		[setTodos]
	);

	// Append todo
	const handleAppend = useCallback(
		(index) => {
			const todo = createTodo();
			setTodos((todos) => {
				return index >= 0
					? [...todos.slice(0, index + 1), todo, ...todos.slice(index + 1)]
					: [...todos, todo];
			});
		},
		[setTodos]
	);

	// Delete todo
	const handleDelete = useCallback(
		(id) => {
			setTodos((todos) => todos.filter((todo) => todo.id !== id));
		},
		[setTodos]
	);

	// Updates todo properties
	const handleTodoChange = useCallback(
		(id, key, patch) => {
			setTodos((todos) =>
				todos.map((todo) => (todo.id === id ? patchObject(key, patch, todo) : todo))
			);
		},
		[setTodos]
	);

	return (
		<div className="todo-list">
			<div className="todo-list__title title mb-3">My todo list</div>
			<DragDropContext onDragEnd={handleDrag}>
				<Droppable droppableId="todo-list">
					{(provided, snapshot) => (
						<div
							className="todo-list__droppable"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{todos.map((todo, index) => (
								<TodoItem
									id={todo.id}
									index={index}
									isMobile={isMobile}
									isDone={todo.isDone}
									content={todo.content}
									onChange={handleTodoChange}
									onDelete={handleDelete}
									onAppend={handleAppend}
									key={todo.id}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<Button className="mt-3" onClick={() => handleAppend()}>
					<Button.Label className="me-1">Create todo</Button.Label>
					<Button.Icon icon="add" size={20} />
				</Button>
			</DragDropContext>
		</div>
	);
};

export default Todo;
