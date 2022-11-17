import React, { Component } from 'react';

class KeyEventTestComponent extends Component {
	KeyEventTest(event, e) {
		var val = e.target.value;
		console.log('event : '+event+", value: "+val);
	}

	render() {
		return (
			<>
				<h2>Key Event</h2>
				key down : <input type="text" onKeyDown={e => this.KeyEventTest("key down", e)}/><br/>
				key press : <input type="text" onKeyPress={e => this.KeyEventTest("key press", e)}/><br/>
				key up : <input type="text" onKeyUp={e => this.KeyEventTest("key up", e)}/>
			</>
		)
	}
}

export default KeyEventTestComponent;