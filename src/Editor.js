import React, { Component } from 'react';

import { EditorState, RichUtils } from 'draft-js';

//Plugins imports
import Editor from 'draft-js-plugins-editor';

class MyEditor extends Component {
	constructor(props) {
		super(props)

		this.state = {
			editorState: EditorState.createEmpty()
		};
	}

	onChange = (editorState) => {
		this.setState({
			editorState
		});
	}

	render() {
		return (
			<Editor 
				editorState={this.state.editorState}
				onChange={this.onChange}
			/>
		)
	}
}

export default MyEditor;