function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:stone_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.2, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(161.0)
	})
	event.modify('create_sa:copper_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 0.2, item)
		item.setMaxDamage(161.0)
	})
	event.modify('minecraft:iron_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 0.2, item)
		item.setMaxDamage(250.0)
	})
	event.modify('apocalypsenow:hand_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 0.2, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:survival_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 0.4, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:tourist_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(392.0)
	})
	event.modify('apocalypsenow:ice_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(392.0)
	})
	event.modify('apocalypsenow:gardening_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(392.0)
	})
	event.modify('apocalypsenow:construction_axe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:fire_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:emergency_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:wooden_fire_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:lumber_jack_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:red_lumberjack_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('immersiveengineering:axe_steel', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(894.0)
	})
	event.modify('minecraft:diamond_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(1241.0)
	})
	event.modify('create_sa:rose_quartz_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(1462.0)
	})
	event.modify('minecraft:netherite_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.3, item)
		replaceAttribute("generic.attack_speed", 0.4, item)
		item.setMaxDamage(2031.0)
	})
	event.modify('apocalypsenow:combat_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.4, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(2651.0)
	})
	event.modify('apocalypsenow:electrical_combat_axe', item => { 
		replaceAttribute("generic.attack_damage", 1.5, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(2885.0)
	})

})