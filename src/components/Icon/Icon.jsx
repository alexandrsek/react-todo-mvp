import classNames from "classnames";
import React, { forwardRef } from "react";

export const Icon = forwardRef(({ icon, size, style, className, ...props }, ref) => {
	return (
		<span
			ref={ref}
			className={classNames("material-icons-round icon", className)}
			style={{ fontSize: size, lineHeight: size + "px", ...style }}
			{...props}
		>
			{icon}
		</span>
	);
});

export default Icon;
