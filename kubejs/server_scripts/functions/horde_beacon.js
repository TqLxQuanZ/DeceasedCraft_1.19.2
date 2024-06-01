// priority: 0
console.info('Loaded horde_beacon.js')

ItemEvents.rightClicked(event => {
	if (event.player &&
		event.item.id == "contenttweaker:horde_beacon")
		{
			event.server.runCommandSilent('hordes start ' + event.player + ' 10000')
			event.item.count--;
		}
});