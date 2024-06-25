function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:rubber_hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.5, item)
		item.setMaxDamage(199.0)
	})
	event.modify('apocalypsenow:hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.1, item)
		item.setMaxDamage(345.0)
	})
	event.modify('apocalypsenow:improvised_hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(451.0)
	})
	event.modify('apocalypsenow:premium_hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.1, item)
		item.setMaxDamage(546.0)
	})
	event.modify('apocalypsenow:ballpeen_hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(546.0)
	})
	event.modify('apocalypsenow:meat_hammer', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 1.1, item)
		item.setMaxDamage(621.0)
	})
	event.modify('apocalypsenow:sledge_hammer', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(945.0)
	})

})