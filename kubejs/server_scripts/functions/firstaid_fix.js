console.info("Loaded health_check.js")

EntityEvents.death(event => {
	if (!event.entity.isPlayer()) return

	event.entity.runCommandSilent('/effect clear ' + event.entity)
})
