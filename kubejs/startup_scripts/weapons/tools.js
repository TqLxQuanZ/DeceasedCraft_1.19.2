function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:sai', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 3.0, item)
		item.setMaxDamage(426.0)
	})
	event.modify('apocalypsenow:letter_opener', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 2.0, item)
		item.setMaxDamage(149.0)
	})
	event.modify('apocalypsenow:gardening_scissors', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 2.0, item)
		item.setMaxDamage(149.0)
	})
	event.modify('apocalypsenow:shiv', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(118.0)
	})
	event.modify('apocalypsenow:plunger', item => { 
		replaceAttribute("generic.attack_damage", 0.1, item)
		replaceAttribute("generic.attack_speed", 2.8, item)
		item.setMaxDamage(61.0)
	})
	event.modify('apocalypsenow:icepick', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(118.0)
	})
	event.modify('apocalypsenow:scalpel', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 2.4, item)
		item.setMaxDamage(160.0)
	})
	event.modify('apocalypsenow:pan', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(730.0)
	})

})