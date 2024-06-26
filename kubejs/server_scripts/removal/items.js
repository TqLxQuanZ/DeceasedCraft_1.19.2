ServerEvents.recipes(event => {
	global.removal.forEach(itemName => {
		event.remove(itemName)
	})
})