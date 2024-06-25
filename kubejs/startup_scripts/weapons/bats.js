function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:spiked_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(150.0)
	})
	event.modify('apocalypsenow:wrapped_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:wired_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:saw_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(451.0)
	})
	event.modify('apocalypsenow:electrical_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(304.0)
	})
	event.modify('apocalypsenow:iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(560.0)
	})
	event.modify('apocalypsenow:spiked_iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(624.0)
	})
	event.modify('apocalypsenow:laminated_iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 0.9, item)
		replaceAttribute("generic.attack_speed", 1.6, item)
		item.setMaxDamage(739.0)
	})

})