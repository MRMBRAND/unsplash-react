import React from "react";
import PropTypes from "prop-types";

export default class DropDownSelector extends React.Component {
  static propTypes = {
    onSelectionChange: PropTypes.func
  };

  super(props) {
      this.handleDropDown = this.handleDropDown.bind(this);
    this.state = {
      header: "View All",
      openDropDown: false
    };
  }

  handleDropDown() {
    const next = !this.state.openDropDown;
    this.setState({
      openDropDown: next
    }); 
  }

  handleSelect(ref){
      this.setState({
          header: re,
      })
  }

  
  render() {
    return (
      <div
        class="dropdown"
        style={{ position: "relative", display: "inline " }}
      >
        <div
          style={{
            backgroundColor: "white",
            color: "red",
            padding: 10,
            fontSize: 16,
            border: "none",
            cursor: "pointer"
          }}
          onClick={this.handleDropDown}
          className="dropdown-btn"
        >
          {this.state.header}
        </div>
        <div
          stye={{
            display: "none",
            position: "absolute",
            backgroundColor: "grey",
            minWidth: 160,
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2",
            zIndex: 1
          }}
        >
          <p ref="all" onCLick={this.handleSelect(this.ref)}>View All</p>
          <p ref="portrait"onCLick={this.handleSelect(this.ref)}>Portrait</p>
          <p ref="landscape"onCLick={this.handleSelect(this.ref)}>Lanscape</p>
        </div>
      </div>
    );
  }
}
