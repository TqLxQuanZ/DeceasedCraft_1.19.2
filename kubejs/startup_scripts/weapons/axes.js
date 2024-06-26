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
	event.modify('apocalypsenow:crowbar', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(781.0)
	})
	event.modify('apocalypsenow:red_crowbar', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(781.0)
	})
	event.modify('apocalypsenow:road_sign', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(416.0)
	})
	event.modify('apocalypsenow:saw_pole', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(423.0)
	})
	event.modify('apocalypsenow:katana', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 2.0, item)
		item.setMaxDamage(2451.0)
	})
	event.modify('apocalypsenow:hookey_stick', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(256.0)
	})
	event.modify('apocalypsenow:golf_stick', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(488.0)
	})
	event.modify('apocalypsenow:dagger', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 2.8, item)
		item.setMaxDamage(789.0)
	})
	event.modify('apocalypsenow:karambit', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(484.0)
	})
	event.modify('apocalypsenow:woddenspear', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(42.0)
	})
	event.modify('apocalypsenow:gardening_spade', item => { 
		replaceAttribute("generic.attack_damage", 0.1, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(49.0)
	})
	event.modify('apocalypsenow:rolling_pin', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 2.0, item)
		item.setMaxDamage(124.0)
	})
	event.modify('apocalypsenow:knife_spear', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(89.0)
	})
	event.modify('apocalypsenow:tennis_racket', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 2.8, item)
		item.setMaxDamage(124.0)
	})
	event.modify('apocalypsenow:garden_fork', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(343.0)
	})
	event.modify('apocalypsenow:dumbbell', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(656.0)
	})
	event.modify('apocalypsenow:bayonet', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(451.0)
	})
	event.modify('apocalypsenow:razor', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 2.8, item)
		item.setMaxDamage(198.0)
	})
	event.modify('farmersdelight:skillet', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(730.0)
	})
	event.modify('quark:pickarang', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(800.0)
	})
	event.modify('quark:flamerang', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(1540.0)
	})
	event.modify('apocalypsenow:spear', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.5, item)
		item.setMaxDamage(489.0)
	})
	event.modify('apocalypsenow:guitar', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(78.0)
	})
	event.modify('apocalypsenow:bass', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(78.0)
	})
	event.modify('apocalypsenow:kitchen_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:scythe', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(623.0)
	})

})