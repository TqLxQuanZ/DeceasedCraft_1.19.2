function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:machete', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 0.7, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:cleaver', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 0.7, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:black_cleaver', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(313.0)
	})
	event.modify('apocalypsenow:serrated_machete', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 0.6, item)
		item.setMaxDamage(321.0)
	})
	event.modify('apocalypsenow:hawkbill_machete', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(321.0)
	})
	event.modify('apocalypsenow:heavy_machete', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 0.5, item)
		item.setMaxDamage(796.0)
	})
	event.modify('apocalypsenow:taiga_1_survival_machete', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 0.8, item)
		item.setMaxDamage(864.0)
	})
	event.modify('apocalypsenow:bowie_machete', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(864.0)
	})
	event.modify('apocalypsenow:tactical_machete', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(1821.0)
	})
	event.modify('apocalypsenow:kukri_machete', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(1510.0)
	})

})