import Modal from '../modal/Modal';

import question from '../../icons/question.png';

import './appHeader.scss'

const AppHeader = ({ onToggleTheme, data, onDeleteItems }) => {
	const onOpenModal = () => {
		document.querySelector('.modal').style.cssText = `
			opacity: 1; 
			pointer-events: all;
		`;
		document.querySelector('.modal__content').style.cssText = `
			transform: scale(1);
		`;
		document.body.style.cssText = `
			overflow-y: hidden;
		`;

		document.querySelectorAll('.item').forEach(item => {
			item.style.cssText = `
				position: unset;
				left: 0;
				opacity: 1;
			`;
		});
	};

	return (
		<>
			<div className='header'>
				<h1 className="text-header">Item List</h1>
				<button
					onClick={onOpenModal}
					className="settings">
					<img data-question
						src={question}
						alt="settings" />
				</button>
				<Modal onToggleTheme={onToggleTheme} />
			</div>
			{
				data.length > 1 ?
					<button
						onClick={onDeleteItems}
						className="remove-all">Remove all</button>
					: null
			}
		</>
	);
};

export default AppHeader;