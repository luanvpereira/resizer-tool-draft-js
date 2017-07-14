import React, { Component } from 'react';
import './App.css';

import Editor from './Editor';

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="editor-title">Draft JS</h1>
				<div className="editor-container">
					<Editor />
				</div>
			</div>
		);
	}
}

export default App;
