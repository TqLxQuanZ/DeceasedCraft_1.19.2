function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:red_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 3.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:reiforced_red_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 3.0, item)
		item.setMaxDamage(250.0)
	})
	event.modify('apocalypsenow:blue_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 3.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:reiforced_blue_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 3.0, item)
		item.setMaxDamage(250.0)
	})

})