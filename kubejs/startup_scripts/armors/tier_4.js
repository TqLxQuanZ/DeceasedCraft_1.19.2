function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:netherite_helmet', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(407.0)
	})
	event.modify('minecraft:netherite_chestplate', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(592.0)
	})
	event.modify('minecraft:netherite_leggings', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(555.0)
	})
	event.modify('minecraft:netherite_boots', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(481.0)
	})
	event.modify('apocalypsenow:swat_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:swat_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:swat_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:swat_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:juggernaut_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:juggernaut_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:juggernaut_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:juggernaut_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:swatriotcontrol_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:swatriotcontrol_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:swatriotcontrol_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:swatriotcontrol_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:spec_ops_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:spec_ops_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:spec_ops_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:spec_ops_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:jet_pilot_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:jet_pilot_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:jet_pilot_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:jet_pilot_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:bombsquad_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:bombsquad_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:bombsquad_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:bombsquad_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:soldier_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('apocalypsenow:soldier_chestplate', item => { 
		replaceAttribute("generic.armor", 9.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(792.0)
	})
	event.modify('apocalypsenow:soldier_leggings', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(755.0)
	})
	event.modify('apocalypsenow:soldier_boots', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(681.0)
	})
	event.modify('apocalypsenow:pbf_hamstergasmask_helmet', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(600.0)
	})
	event.modify('apocalypsenow:pkm_4gasmask_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(500.0)
	})

})