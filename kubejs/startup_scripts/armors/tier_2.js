function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('minecraft:chainmail_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('minecraft:chainmail_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('minecraft:chainmail_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('minecraft:chainmail_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('minecraft:iron_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('minecraft:iron_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('minecraft:iron_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('minecraft:iron_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:construction_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:construction_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(255.0)
	})
	event.modify('apocalypsenow:construction_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:construction_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(210.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:red_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:red_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:red_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:red_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:black_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:black_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:black_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:black_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:blue_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:blue_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:blue_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:blue_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:red_fighting_helmet', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:red_fighting_chestplate', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:red_fighting_leggings', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:blue_fighting_helmet', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:blue_fighting_chestplate', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:blue_fighting_leggings', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:hazmat_suit_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(250.0)
	})
	event.modify('apocalypsenow:hazmat_suit_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:hazmat_suit_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:hazmat_suit_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:army_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:army_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:army_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:army_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(165.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(225.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('create_sa:copper_exoskeleton_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(280.0)
	})
	event.modify('create_sa:andesite_exoskeleton_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(280.0)
	})
	event.modify('apocalypsenow:red_bikers_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:black_bikers_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:green_bikers_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:pink_bikers_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:bikers_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:baseball_helmet_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:hockey_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:black_motorcycle_helmet_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:red_motorcycle_helmet_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:bluemotorcyclehelmet_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(195.0)
	})
	event.modify('apocalypsenow:gasmask_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(150.0)
	})
	event.modify('apocalypsenow:officer_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(231.0)
	})
	event.modify('create_sa:copper_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(280.0)
	})
	event.modify('create_sa:andesite_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(280.0)
	})

})