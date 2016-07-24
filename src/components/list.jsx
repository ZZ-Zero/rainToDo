import React, { Component } from 'react';
import { render } from 'react-dom';
import AppStore from '../stores/AppStore';

require('./list.styl');

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: "",
			text: props.text ? props.text : '',
			check: props.check ? 'check' : ''
		}
	}

	checkClick() {
		this.setState({
			check: this.state.check ? '' : 'check'
		})
	}

	render() {
		return (
			<li>
				<span 
					className={`checkBox ${this.state.check}`}
					onClick={this.checkClick.bind(this)}
				>√</span>

				<span className={`text ${this.state.color}`} placeholder="请直接填写新任务" contentEditable="true" >
					{this.state.text}
				</span>

				<span className="deleteLi"></span>
			</li>
		)
	}

}

class ListBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items : AppStore.getAll()
		}
	}

	componentDidMount() {
	    AppStore.addChangeListener(this.listChange.bind(this))
	}

	listChange() {
		this.setState({
			items : AppStore.getAll()
		})
	}

	render() {
		return(
			<ol className="listBox">
				{this.state.items.map((item,nth) => {
						alert(nth)
						return <List key={nth} text={item} />
					})
				}
			</ol>
		)
	}
}

export default ListBox