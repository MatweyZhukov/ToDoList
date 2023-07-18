//Component
import { Component } from "react";

//Icon
import add from "../../icons/add.png";

//Styles
import "./addForm.scss";

class AddForm extends Component {
  state = {
    name: "",
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitAdd = (e) => {
    e.preventDefault();

    const length = this.state.name.length;

    this.props.onAddItem(this.state.name, e.target);

    length <= 3
      ? this.setState({
          name: this.state.name,
        })
      : this.setState({
          name: "",
        });
  };

  render() {
    return (
      <form className="add" onSubmit={(e) => this.onSubmitAdd(e)}>
        <input
          maxLength={20}
          id="add"
          type="text"
          placeholder="Enter name..."
          value={this.state.name}
          name="name"
          onChange={this.onValueChange}
        />
        <button type="submit">
          <img className="add-icon" src={add} alt="add" />
        </button>
      </form>
    );
  }
}

export default AddForm;
