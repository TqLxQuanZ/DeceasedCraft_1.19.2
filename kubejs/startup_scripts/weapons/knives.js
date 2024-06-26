function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:bread_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(123.0)
	})
	event.modify('apocalypsenow:cutter_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.2, item)
		replaceAttribute("generic.attack_speed", 1.5, item)
		item.setMaxDamage(24.0)
	})
	event.modify('apocalypsenow:shiv', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(118.0)
	})
	event.modify('apocalypsenow:scalpel', item => { 
		replaceAttribute("generic.attack_damage", 0.3, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(160.0)
	})
	event.modify('apocalypsenow:switch_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(290.0)
	})
	event.modify('apocalypsenow:knife', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(345.0)
	})
	event.modify('apocalypsenow:chefs_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:kitchen_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.0, item)
		item.setMaxDamage(345.0)
	})
	event.modify('apocalypsenow:hunting_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(294.0)
	})
	event.modify('apocalypsenow:long_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:expedition_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.1, item)
		item.setMaxDamage(594.0)
	})
	event.modify('apocalypsenow:stilettoknife', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.5, item)
		item.setMaxDamage(456.0)
	})
	event.modify('apocalypsenow:mk_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(333.0)
	})
	event.modify('apocalypsenow:english_punch_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.4, item)
		replaceAttribute("generic.attack_speed", 1.8, item)
		item.setMaxDamage(242.0)
	})
	event.modify('apocalypsenow:combat_survival_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(452.0)
	})
	event.modify('apocalypsenow:combat_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(687.0)
	})
	event.modify('apocalypsenow:dagger', item => { 
		replaceAttribute("generic.attack_damage", 0.5, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(493.0)
	})
	event.modify('apocalypsenow:butterfly_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.6, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(584.0)
	})
	event.modify('apocalypsenow:military_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.8, item)
		replaceAttribute("generic.attack_speed", 1.2, item)
		item.setMaxDamage(764.0)
	})
	event.modify('apocalypsenow:tactical_knife', item => { 
		replaceAttribute("generic.attack_damage", 0.7, item)
		replaceAttribute("generic.attack_speed", 1.4, item)
		item.setMaxDamage(843.0)
	})

})