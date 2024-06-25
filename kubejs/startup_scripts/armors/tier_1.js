function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:leather_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(55.0)
	})
	event.modify('minecraft:leather_chestplate', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('minecraft:leather_leggings', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(75.0)
	})
	event.modify('minecraft:leather_boots', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(65.0)
	})
	event.modify('apocalypsenow:police_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(125.0)
	})
	event.modify('apocalypsenow:police_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:police_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(185.0)
	})
	event.modify('apocalypsenow:police_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(155.0)
	})
	event.modify('apocalypsenow:fire_figther_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(145.0)
	})
	event.modify('apocalypsenow:fire_figther_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(220.0)
	})
	event.modify('apocalypsenow:fire_figther_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(205.0)
	})
	event.modify('apocalypsenow:fire_figther_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(175.0)
	})
	event.modify('apocalypsenow:nurse_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(65.0)
	})
	event.modify('apocalypsenow:nurse_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(90.0)
	})
	event.modify('apocalypsenow:nurse_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(85.0)
	})
	event.modify('apocalypsenow:nurse_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(75.0)
	})
	event.modify('apocalypsenow:desertghillie_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:desertghillie_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:desertghillie_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:desertghillie_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(135.0)
	})
	event.modify('apocalypsenow:snowghillie_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:snowghillie_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:snowghillie_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:snowghillie_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(135.0)
	})
	event.modify('apocalypsenow:ghilliesuit_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:ghilliesuit_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:ghilliesuit_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:ghilliesuit_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(135.0)
	})
	event.modify('apocalypsenow:anarchy_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(55.0)
	})
	event.modify('apocalypsenow:anarchy_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:anarchy_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(75.0)
	})
	event.modify('apocalypsenow:anarchy_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(65.0)
	})
	event.modify('apocalypsenow:forestguard_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(125.0)
	})
	event.modify('apocalypsenow:forestguard_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:forestguard_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(185.0)
	})
	event.modify('apocalypsenow:forestguard_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(155.0)
	})
	event.modify('apocalypsenow:hunting_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:hunting_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:life_jacket_bullet_helmet_chestplate', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:sheriff_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:cowboy_hat_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:old_west_hat_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:jasonmask_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:welding_mask_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(430.0)
	})
	event.modify('apocalypsenow:balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:white_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:red_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:blue_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:green_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:forest_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:snow_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:urbancamobalaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:desert_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:pink_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:visor_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('alexsmobs:frontier_cap', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(135.0)
	})
	event.modify('alexsmobs:fedora', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(110.0)
	})
	event.modify('alexsmobs:froststalker_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(99.0)
	})
	event.modify('alexsmobs:roadrunner_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(135.0)
	})
	event.modify('alexsmobs:crocodile_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(253.0)
	})
	event.modify('alexsmobs:moose_headgear', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(222.0)
	})
	event.modify('alexsmobs:sombrero', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(135.0)
	})

})