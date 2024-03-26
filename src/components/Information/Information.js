import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsGameEnded, selectIsDraw } from '../selectors/index';

export const Information = () => {
	let status;
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw)

	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return (
		<InformationLayout
			isDraw={isDraw}
			status={status}
			currentPlayer={currentPlayer}
		></InformationLayout>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
