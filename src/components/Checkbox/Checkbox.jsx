import classNames from "classnames";
import Icon from "components/Icon/Icon.jsx";
import React from "react";
import "./Checkbox.scss";

export const Checkbox = ({ isActive, className, iconProps, ...props }) => {
	return (
		<div className={classNames("checkbox", { "checkbox--active": isActive }, className)} {...props}>
			<Icon
				className={classNames("checkbox__icon", { "checkbox__icon--active": isActive })}
				icon="done"
				size={20}
				{...iconProps}
			/>
		</div>
	);
};

Checkbox.defaultProps = {
	isActive: false,
	iconProps: {},
};

export default Checkbox;
