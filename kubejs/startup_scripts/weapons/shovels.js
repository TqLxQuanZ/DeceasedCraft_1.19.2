function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:wooden_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.1, item)
		replaceAttribute("generic.attack_speed", 0.2, item)
		item.setMaxDamage(59.0)
	})
	event.modify('minecraft:stone_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:copper_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(164.0)
	})
	event.modify('create_sa:zinc_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 0.4, item)
		item.setMaxDamage(243.0)
	})
	event.modify('minecraft:iron_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 0.3, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:brass_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.35, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(450.0)
	})
	event.modify('immersiveengineering:shovel_steel', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(641.0)
	})
	event.modify('apocalypsenow:construction_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(798.0)
	})
	event.modify('apocalypsenow:snow_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(641.0)
	})
	event.modify('minecraft:diamond_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(1561.0)
	})
	event.modify('create_sa:blazing_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.45, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(450.0)
	})
	event.modify('minecraft:netherite_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(2031.0)
	})
	event.modify('create_sa:rose_quartz_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(1644.0)
	})
	event.modify('apocalypsenow:military_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 0.7, item)
		item.setMaxDamage(2451.0)
	})

})