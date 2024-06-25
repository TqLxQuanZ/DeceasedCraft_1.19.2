function replaceAttribute(attributeString, boost, item) { 
	let attribute = item.getAttributes(attributeString).get(0)
	item.removeAttribute(attributeString, attribute.id)
	item.addAttribute(attributeString, attribute.id, attribute.name, attribute.amount + boost, attribute.operation)
}

ItemEvents.modification(event => {
	event.modify('apocalypsenow:katana', item => { 
		replaceAttribute("generic.attack_damage", 1.3, item)
		replaceAttribute("generic.attack_speed", 1.3, item)
		item.setMaxDamage(2451.0)
	})

})