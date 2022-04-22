import isFunction from "lodash/fp/isFunction";
import update from "lodash/fp/update";
import { trimCharacter } from "./string.js";

// Immutable update of nested object
export const patchObject = (path, patch, object) => {
	const updater = isFunction(patch) ? patch : () => patch;

	path = trimCharacter(path, "."); // Needed to prevent cases like "path.nested."

	if (path && path.length) {
		return update(path, updater, object);
	}

	return updater(object);
};
