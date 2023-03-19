import { Component } from 'react';

import './addForm.scss';

import add from '../../icons/add.png';

class AddForm extends Component {
	state = {
		name: ''
	};

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmitAdd = (e) => {
		e.preventDefault();
		const length = document.querySelector('#add').value.length;

		this.props.onAddItem(this.state.name);

		length <= 3 ?
			this.setState({
				name: this.state.name
			}) :
			this.setState({
				name: ''
			});
	};


	render() {
		return (
			<form
				className="add"
				onSubmit={this.onSubmitAdd}>
				<input
					maxLength={20}
					id="add"
					type="text"
					placeholder="Enter name..."
					value={this.state.name}
					name='name'
					onChange={this.onValueChange} />
				<button>
					<img
						className='add-icon'
						src={add}
						alt="add" />
				</button>
			</form>
		);
	};
};

export default AddForm;