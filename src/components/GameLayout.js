import styles from './GameLayout.module.css';
import { Field } from './Field/Field';
import { Information } from './Information/Information';
import { useDispatch } from 'react-redux';
import { actionReset } from '../action';
export const GameLayout = () => {
	const dispatch = useDispatch();
	const reset = () => {
		dispatch(actionReset());
	};
	return (
		<section className={styles.GameLayoutHeader}>
			<div>
				<Information></Information>
				<div className={styles.GameLayoutContainerField}>
					<Field></Field>
				</div>
				<button onClick={reset} className={styles.GameLayoutBtn}>
					Начать заново
				</button>
			</div>
		</section>
	);
};
