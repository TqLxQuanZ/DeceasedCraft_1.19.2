// priority: 0
console.info('Loaded gasmask_logics.js')

PlayerEvents.loggedIn(event => {
	TickEquipment(event);
})

EntityEvents.death(event => {
	if (event.entity.isPlayer())
	{
		event.entity.player.data.resetFlag = true;
	}
})

PlayerEvents.tick(event => {
	if (event.player.data.resetFlag == true && event.player.isAlive())
	{
		event.player.data.resetFlag = false;
		TickEquipment(event);
	}
});

ItemEvents.rightClicked(event => {
	if (event.item.id == "apocalypsenow:breathingfiltermodule")
	{
		if (event.player.headArmorItem.id == "apocalypsenow:gasmask_helmet" ||
			event.player.headArmorItem.id == "apocalypsenow:pkm_4gasmask_helmet" ||
			event.player.headArmorItem.id == "apocalypsenow:pbf_hamstergasmask_helmet" ||
			event.player.headArmorItem.id == "apocalypsenow:soldier_helmet")
		{
			event.player.headArmorItem.nbt.Damage = 0;
			event.item.count--;
		}
	}
})

function TickEquipment(event)
{
	event.server.scheduleInTicks(100, event, (callback) => {
		if (event.entity.block.biomeId == "biomesoplenty:wasteland" || 
			event.entity.block.biomeId == "biomesoplenty:wooded_wasteland")
		{
			if (event.player.headArmorItem.id == "apocalypsenow:gasmask_helmet" ||
				event.player.headArmorItem.id == "apocalypsenow:pkm_4gasmask_helmet" ||
				event.player.headArmorItem.id == "apocalypsenow:pbf_hamstergasmask_helmet" ||
				event.player.headArmorItem.id == "apocalypsenow:soldier_helmet")
			{
				event.player.damageEquipment(EquipmentSlot.HEAD, 1);
			}
		}
		callback.reschedule();
	})
}
