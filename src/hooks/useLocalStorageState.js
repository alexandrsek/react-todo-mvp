import { useEffect } from "react";
import { useState } from "react";

// State with LocalStorage sync
export const useLocalStorageState = (defaultState, key) => {
	const [state, setState] = useState(() => {
		const localState = window.localStorage.getItem(key);
		return localState !== null ? JSON.parse(localState) : defaultState;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [state, key]);

	return [state, setState];
};
