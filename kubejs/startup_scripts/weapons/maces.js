function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:mace', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(645.0)
	})
	event.modify('apocalypsenow:tatical_mace', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(1364.0)
	})
	event.modify('apocalypsenow:electrical_tactical_mace', item => { 
		replaceAttribute("generic.attack_damage", 1.1, item)
		replaceAttribute("generic.attack_speed", 2.0, item)
		item.setMaxDamage(1450.0)
	})
	event.modify('apocalypsenow:club', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:electric_club', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(285.0)
	})
	event.modify('apocalypsenow:pipe', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(820.0)
	})
	event.modify('apocalypsenow:pipe_wrench', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(820.0)
	})

})