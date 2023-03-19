import './itemSingle.scss';

import remove from '../../icons/remove.png';

const ItemSingle = ({ name, onDeleteItem, onChangeName }) => {
	return (
		<li className="item">
			<input
				maxLength={20}
				minLength={4}
				className='value-in-item'
				placeholder='...'
				type="text"
				name='name'
				value={name}
				onChange={onChangeName} />
			<button
				data-delete
				onClick={onDeleteItem}>
				<img
					className='delete'
					src={remove} alt="remove" />
			</button>
		</li >
	);
};

export default ItemSingle;