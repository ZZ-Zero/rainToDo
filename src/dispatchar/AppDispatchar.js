import AppStore from '../stores/AppStore'
import Flux from 'flux'

let AppDispatchar = new Flux.Dispatcher()

AppDispatchar.register((action) => {
	switch(action.actionType) {
		case 'ADD_NEW_ITEM' :
			AppStore.addNewItem()
			AppStore.emitChange()
			break
		case 'REMOVE_ITEM' :
			AppStore.removeItem(action.nth)
			AppStore.emitChange()
			break
		case 'CHANGE_TEXT' :
			AppStore.changeText(action.nth, action.text)
			AppStore.emitChange()
			break
		default :
			return
	}
})

export default AppDispatchar