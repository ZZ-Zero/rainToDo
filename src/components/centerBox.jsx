import React from 'react';
import { render } from 'react-dom';

import MenuBox from './menu.jsx'
import ListBox from './list.jsx'
require('./centerBox.styl');

const CenterBox = (props) => {
	return(
		<div className="centerBox">
			<MenuBox />
			<ListBox />
		</div>
	)
}

render(<CenterBox />, document.getElementsByClassName('app')[0])