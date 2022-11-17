import React, { Component } from 'react';

class SubmitTestComponent extends Component {
	SubmitTest(evt) {
		var inputValue = document.getElementById("inputId").value;
		console.log("inputValue : "+inputValue);
		evt.preventDefault();
	}

	render() {
		return (
			<>
				<h2>Submit Test</h2>
				<form onSubmit={this.SubmitTest}>
					<input type="text" name="inputName" id="inputId"/>
					<input type="submit" value="Submit"/>
				</form>
			</>
		)
	}
}

export default SubmitTestComponent;