//Global
import { Component } from "react";
import { v4 as uuid } from "uuid";

//Components
import AddForm from "../addForm/AddFrom";
import ItemList from "../itemList/ItemList";
import AppHeader from "../appHeader/AppHeader";

//Styles
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JSON.parse(localStorage.getItem("data")) || [],
    };
  }

  componentDidMount() {
    document.querySelectorAll(".item").forEach((item) => {
      item.style.cssText = `
			left: 0;
			opacity: 1;
			position: static;
		`;
    });
  }

  componentDidUpdate() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }

  AddItem = (name, target) => {
    const id = uuid();

    const newItem = {
      name,
      id,
    };

    this.setState(({ data }) => {
      let newArr = [...data, newItem];

      if (name !== "" && name.length > 3 && name.length <= 20) {
        return {
          data: newArr,
        };
      }

      if (name === "" || name.length <= 3) {
        target.classList.add("shake");

        setTimeout(() => {
          target.classList.remove("shake");
        }, 600);
      }
    });

    setTimeout(() => {
      document.querySelectorAll(".item").forEach((item) => {
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
          data: data.filter((item) => item.id !== id),
        };
      });
    }, 250);
  };

  DeleteItems = () => {
    document.querySelectorAll(".item").forEach((item) => {
      item.style.cssText = `
			opacity: 0;
			left: 300px;
		`;
    });

    setTimeout(() => {
      this.setState(() => {
        return {
          data: [],
        };
      });
    }, 250);
  };

  ChangeName = (id, name) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (name.length > 3) {
          if (item.id === id) {
            return { ...item, name: name };
          }
        }
        return item;
      }),
    }));
  };

  render() {
    return (
      <main className="wrapper">
        <AppHeader data={this.state.data} onDeleteItems={this.DeleteItems} />

        <ItemList
          data={this.state.data}
          onDeleteItem={this.DeleteItem}
          onChangeName={this.ChangeName}
        />

        <AddForm onAddItem={this.AddItem} />
      </main>
    );
  }
}

export default App;
