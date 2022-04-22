import Icon from "components/Icon/Icon.jsx";
import React from "react";

export const TodoItemDragHandler = ({ isMobile, dragHandleProps }) => {
	if (isMobile) return null;

	return (
		<div className="todo-item__action todo-item__drag-handler" {...dragHandleProps} tabIndex="-1">
			<Icon icon="drag_indicator" />
		</div>
	);
};

export default TodoItemDragHandler;
