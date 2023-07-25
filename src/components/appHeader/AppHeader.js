//Global
import { Component } from "react";

//Component
import Modal from "../modal/Modal";

//Icon
import question from "../../icons/question.png";

//Styles
import "./appHeader.scss";

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalStatus: false,
    };
  }

  modalClassName = "modal";
  modalContentClassName = "modal__content";

  onChangeModalStatus = () => {
    this.setState({
      modalStatus: !this.state.modalStatus,
    });
  };

  render() {
    if (this.state.modalStatus) {
      this.modalClassName = "modal modal__opeend";
      this.modalContentClassName += "modal_content modal__content__opened";
      document.body.style.overflowY = "hidden";
      document.querySelectorAll(".item").forEach((item) => {
        item.style.position = "unset";
      });
    } else {
      this.modalClassName = "modal modal__closed";
      this.modalContentClassName = "modal__content modal__content__closed";
      document.body.style.overflowY = "auto";
      document.querySelectorAll(".item").forEach((item) => {
        setTimeout(() => {
          item.style.position = "relative";
        }, 300);
      });
    }

    return (
      <>
        <div className="header">
          <h1 className="text-header">Item List</h1>
          <button onClick={this.onChangeModalStatus} className="settings">
            <img data-question src={question} alt="settings" />
          </button>
          <Modal
            modalClassName={this.modalClassName}
            modalContentClassName={this.modalContentClassName}
            onChangeModalStatus={this.onChangeModalStatus}
            onToggleTheme={this.props.onToggleTheme}
          />
        </div>
        {this.props.todoList.length > 1 ? (
          <button onClick={this.props.onDeleteItems} className="remove-all">
            Remove all
          </button>
        ) : null}
      </>
    );
  }
}

export default AppHeader;
