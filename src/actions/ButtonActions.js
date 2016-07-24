import AppDispatchar from '../dispatchar/AppDispatchar'

class ButtonActions {
	static addNewItem() {
		AppDispatchar.dispatch({
			actionType: 'ADD_NEW_ITEM'
		})
	}
	static removeItem(nth) {
		AppDispatchar.dispatch({
			actionType: 'REMOVE_ITEM',
			nth: nth
		})
	}
	static changeText(nth,text) {
		AppDispatchar.dispatch({
			actionType: 'CHANGE_TEXT',
			nth: nth,
			text: text
		})
	}
}

export default ButtonActions