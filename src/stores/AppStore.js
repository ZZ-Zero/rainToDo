import Events from 'events'



let AppStore = Object.assign({}, Events.EventEmitter.prototype, {
	listStore: {
		items: [],
		userName: 'testName'
	},
	storageLoad: function() {
		this.listStore = JSON.parse(localStorage.rainToDo)
	},
	storageSave: function() {
		localStorage.rainToDo = JSON.stringify(this.listStore)
	},
	getAll: function() {
		return this.listStore.items
	},
	addNewItem: function() {
		let time = new Date(),
		inner = {
			id: time.getTime(),
			text: 'New items ' + this.getAll().length,
			check: false
		}
		this.listStore.items.unshift(inner)
	},
	removeItem: function(nth) {
		this.listStore.items.splice(nth,1)
	},
	changeText: function(nth,text) {
		this.listStore.items[nth].text = text
	},
	emitChange: function() {
		this.emit('change')
	},
	addChangeListener: function(callback) {
		this.on('change',callback)
	}
})

export default AppStore