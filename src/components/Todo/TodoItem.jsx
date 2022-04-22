import autosize from "autosize";
import classNames from "classnames";
import Checkbox from "components/Checkbox/Checkbox.jsx";
import Icon from "components/Icon/Icon.jsx";
import React, { memo, useEffect, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./TodoItem.scss";
import TodoItemDragHandler from "./TodoItemDragHandler.jsx";

export const TodoItem = memo(
	({ id, index, isDone, content, onChange, onDelete, onAppend, isMobile }) => {
		const textareaRef = useRef(null);

		// Autosize textarea by content
		useEffect(() => {
			const textareaElement = textareaRef.current;
			autosize(textareaElement);
			return () => autosize.destroy(textareaElement);
		}, []);

		const handleChange = (key, patch) => onChange(id, key, patch);
		const handleDelete = () => onDelete(id);

		// Append a new item on Enter
		const handleContentKeyDown = (e) => {
			if (e.key === "Enter" || e.keyCode === 13) {
				e.preventDefault();
				e.stopPropagation();
				onAppend(index);
			}
		};

		return (
			<Draggable draggableId={id} index={index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						className={classNames("todo-item", { "todo-item--dragging": snapshot.isDragging })}
						{...provided.draggableProps}
						{...(isMobile ? provided.dragHandleProps : {})}
					>
						<TodoItemDragHandler isMobile={isMobile} dragHandleProps={provided.dragHandleProps} />
						<div className="todo-item__block">
							{/* Checkbox */}
							<div className="todo-item__action">
								<Checkbox
									className="todo-item__checkbox"
									isActive={isDone}
									onClick={() => handleChange("isDone", (p) => !p)}
								/>
							</div>
							{/* Textarea */}
							<textarea
								ref={textareaRef}
								className={classNames("todo-item__content", { "todo-item__content--done": isDone })}
								onChange={(e) => handleChange("content", e.target.value)}
								onKeyDown={handleContentKeyDown}
								value={content}
								{...(isMobile ? provided.dragHandleProps : {})}
							></textarea>
							{/* Delete button */}
							<div className="todo-item__action todo-item__delete" onClick={handleDelete}>
								<Icon className="todo-item__delete-icon" icon="highlight_off" size={22} />
							</div>
						</div>
					</div>
				)}
			</Draggable>
		);
	}
);

TodoItem.defaultProps = {
	isDone: false,
	content: "",
	isMobile: false,
	onChange: () => null,
	onAppend: () => null,
	onDelete: () => null,
};

export default TodoItem;
