import React, { Component } from 'react';
import { render } from 'react-dom';
import AppStore from '../stores/AppStore';
import ButtonActions from '../actions/ButtonActions';
require('./menu.styl');

class MenuBox extends Component {
	constructor (props) {
		super(props)
		this.state = {
			viewRange : 'all',
			listArr : AppStore.getAll()
		}
	}

	viewClick (e) {

	}

	addList() {
		ButtonActions.addNewItem()
	}

	render () {
		return (
			<div className="menu">
				<span onClick={this.addList} className="add button"></span>
				<span className="active button check">Active</span>
				<span className="completed button check">Completed</span>
			</div>
		)
	}
}

export default MenuBox
