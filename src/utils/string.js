export const trimCharacter = (string, character) => {
	if (string.charAt(0) === character) string = string.slice(1, string.length); // left side
	if (string.charAt(string.length - 1) === character) string = string.slice(0, string.length - 1); // right side
	return string;
};

export const removeLineBreaks = (string) => {
	return string.replace(/[\r\n]/gm, " ");
};
