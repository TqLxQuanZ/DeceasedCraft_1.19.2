JEIEvents.hideItems(event => {
	event.hide(/zombie_extreme:.*/)
	global.removal.forEach(itemName => {
		event.hide(itemName)
	})
})
