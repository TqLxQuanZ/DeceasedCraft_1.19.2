// priority: 0
console.info('Loaded vehicle_spawns.js')

// Added this in case some server encounter issue where the command block didn't run in time to summon the car.
BlockEvents.leftClicked(event => {
    const { block } = event;
    if (block == "minecraft:command_block" && !event.player.isCreativeMode())
    {
        block.set('minecraft:air');
        event.server.runCommand(`summon car:car ${block.pos.x} ${block.pos.y} ${block.pos.z}`);
    }
	if (block == "minecraft:repeating_command_block" ||	block == "clickmachine:auto_clicker")
    {
        block.set('minecraft:air');
    }
});

BlockEvents.rightClicked('block.right_click', (event) => {
    const { block } = event;
    if (block == "minecraft:command_block" && !event.player.isCreativeMode())
    {
        block.set('minecraft:air');
        if (event.block.biomeId == "biomesoplenty:wasteland" || 
            event.block.biomeId == "biomesoplenty:wooded_wasteland")
        {
            event.server.runCommand(`summon simpleplanes:helicopter ${block.pos.x} ${block.pos.y} ${block.pos.z} {material:'biomesoplenty:stripped_dead_log',upgrades:{'simpleplanes:furnace_engine':{item:{Size:1,Items:[{Slot:0,id:'minecraft:coal_block',Count:18b}]}},'simpleplanes:shooter':{item:{Size:1,Items:[{Slot:0,id:'cgm:missile',Count:7b}]}},'simpleplanes:armor':{protection:0b},'simpleplanes:seats':{}}}`);
            return;
        }
        if (event.block.biomeId == "minecraft:deep_cold_ocean" || 
            event.block.biomeId == "minecraft:deep_frozen_ocean" || 
            event.block.biomeId == "minecraft:deep_lukewarm_ocean" || 
            event.block.biomeId == "minecraft:deep_ocean" ||
            event.block.biomeId == "minecraft:cold_ocean" || 
            event.block.biomeId == "minecraft:frozen_ocean" || 
            event.block.biomeId == "minecraft:lukewarm_ocean" || 
            event.block.biomeId == "minecraft:ocean")
        {
            event.server.runCommand(`summon immersivepetroleum:speedboat ${block.pos.x} ${block.pos.y} ${block.pos.z} {tank:{amount:4000,fluid:'immersivepetroleum:gasoline'}}`);
            return;
        }
        event.server.runCommand(`summon car:car ${block.pos.x} ${block.pos.y} ${block.pos.z}`);
		return
    }
	if (block == "minecraft:repeating_command_block" ||	block == "clickmachine:auto_clicker")
    {
        block.set('minecraft:air');
		return
    }
});
