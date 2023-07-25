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
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
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
    localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
  }

  AddItem = (name, target) => {
    const id = uuid();

    this.setState(({ todoList }) => {
      let newArr = [...todoList, { name, id }];

      if (name !== "" && name.length > 3 && name.length <= 20) {
        return {
          todoList: newArr,
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
      this.setState(({ todoList }) => {
        return {
          todoList: todoList.filter((item) => item.id !== id),
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
          todoList: [],
        };
      });
    }, 250);
  };

  ChangeName = (id, name) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((item) => {
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
        <AppHeader
          todoList={this.state.todoList}
          onDeleteItems={this.DeleteItems}
        />

        <ItemList
          todoList={this.state.todoList}
          onDeleteItem={this.DeleteItem}
          onChangeName={this.ChangeName}
        />

        <AddForm onAddItem={this.AddItem} />
      </main>
    );
  }
}

export default App;
