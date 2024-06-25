function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:stone_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:copper_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(131.0)
	})
	event.modify('minecraft:iron_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:brass_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(450.0)
	})
	event.modify('minecraft:diamond_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(1561.0)
	})
	event.modify('immersiveengineering:hoe_steel', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(641.0)
	})
	event.modify('minecraft:netherite_hoe', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(2031.0)
	})

})