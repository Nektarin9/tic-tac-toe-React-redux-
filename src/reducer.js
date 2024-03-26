export const defaultState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export function reducer(state = defaultState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'currentPlayer':
			return { ...state, currentPlayer: payload };
		case 'isGameEnded':
			return { ...state, isGameEnded: payload };
		case 'isDraw':
			return { ...state, isDraw: payload };
		case 'field':
			return { ...state, field: payload };
		case 'reset':
			return {
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		default:
			return state;
	}
}
