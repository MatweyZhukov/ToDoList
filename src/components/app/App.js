import { Component } from 'react';

import AddForm from '../addForm/AddFrom';
import ItemList from '../itemList/ItemList';
import AppHeader from '../appHeader/AppHeader';

import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem('data')) || [],
		};
		this.setId = Math.round(1 - 0.5 + Math.random() * 1000000);
	};

	componentDidMount() {
		document.querySelectorAll('.item').forEach(item => {
			item.style.cssText = `
				left: 0;
				opacity: 1;
				position: static;
			`;
		});
	};

	componentDidUpdate() {
		localStorage.setItem('data', JSON.stringify(this.state.data));
	};

	AddItem = name => {
		const newItem = {
			name,
			id: Math.round(1 - 0.5 + Math.random() * 1000000),
		};

		this.setState(({ data }) => {
			let newArr = [...data, newItem];

			if (name !== '' &&
				name.length > 3 &&
				name.length <= 20) {
				return {
					data: newArr
				};
			} else if (name === '' ||
				name.length <= 3) {
				document.querySelector('#add').classList.add('shake');

				setTimeout(() => {
					document.querySelector('#add').classList.remove('shake');
				}, 600);
			}
		});

		setTimeout(() => {
			document.querySelectorAll('.item').forEach(item => {
				item.style.cssText = `
					opacity: 1;
					left: 0;
				`;
			});
		});
	};

	DeleteItem = (id, target) => {
		target.style.cssText = `
			opacity: 0;
			left: 300px;
		`;

		setTimeout(() => {
			this.setState(({ data }) => {
				return {
					data: data.filter(item => item.id !== id)
				};
			});
		}, 250);
	};

	DeleteItems = () => {
		document.querySelectorAll('.item').forEach(item => {
			item.style.cssText = `
				opacity: 0;
				left: 300px;
			`;
		});

		setTimeout(() => {
			this.setState(() => {
				return {
					data: []
				};
			});
		}, 250);
	};

	ChangeName = (id, name) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (name.length > 3) {
					if (item.id === id) {
						return { ...item, name: name };
					}
				}

				return item;
			})
		}));
	};

	render() {
		const { data } = this.state;

		return (
			<main className="wrapper" >
				<AppHeader
					data={data}
					onDeleteItems={this.DeleteItems} />

				<ItemList
					data={data}
					onDeleteItem={this.DeleteItem}
					onChangeName={this.ChangeName} />

				<AddForm
					onAddItem={this.AddItem} />
			</main>
		);
	}
}

export default App;