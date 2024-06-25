function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:diamond_sword', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(1561.0)
	})
	event.modify('minecraft:netherite_sword', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(2031.0)
	})
	event.modify('immersiveengineering:sword_steel', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(641.0)
	})
	event.modify('create_sa:brass_sword', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(450.0)
	})
	event.modify('create_sa:copper_sword', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_shovel', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:rose_quartz_sword', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 2.2, item)
		item.setMaxDamage(1644.0)
	})
	event.modify('apocalypsenow:tactical_sword', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(2451.0)
	})
	event.modify('apocalypsenow:tactical_saber', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(1364.0)
	})

})