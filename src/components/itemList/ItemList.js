import ItemSingle from '../itemSingle/ItemSingle';

import './itemList.scss';

const ItemList = ({ data, onDeleteItem, onChangeName }) => {
	const elements = data.map(item => {
		const { id, ...itemProps } = item;

		return (
			<ItemSingle
				key={id}
				{...itemProps}
				onDeleteItem={(e) => onDeleteItem(id, e.target.closest('.item'))}
				onChangeName={(e) => onChangeName(id, e.currentTarget.value)} />
		);
	});

	if (data.length > 0) return (
		<>
			{elements}
		</>
	); else {
		return (
			<h1 className="empty">List is empty...</h1>
		)
	}
};

export default ItemList;