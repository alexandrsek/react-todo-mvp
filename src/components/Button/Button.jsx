import classNames from "classnames";
import Icon from "components/Icon/Icon.jsx";
import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

export const Button = ({ children, className, variant, ...props }) => {
	return (
		<button className={classNames("button", `button--${variant}`, className)} {...props}>
			{children}
		</button>
	);
};

const ButtonLabel = ({ className, children, ...props }) => (
	<span className={classNames("button__label", className)} {...props}>
		{children}
	</span>
);

const ButtonIcon = ({ className, ...props }) => (
	<Icon className={classNames("button__icon", className)} {...props} />
);

Button.Label = ButtonLabel;
Button.Icon = ButtonIcon;

Button.propTypes = {
	variant: PropTypes.oneOf(["primary", "secondary"]),
};

Button.defaultProps = {
	variant: "primary",
};

export default Button;
