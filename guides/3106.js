// Killing Grounds
//
// hecho por HSDN / Kuroine

module.exports = (dispatch, handlers, guide, lang) => {

	return {
		"nd-3106-1000": [
			{ type: "stop_timers" },
			{ type: "despawn_all" }
		],

		"qb-3106-1000-32061001": [{ type: "text", sub_type: "message", message: "Debuff (Close)", message_ES: "Debuff (Cercano)" }],
		"qb-3106-1000-32061002": [{ type: "text", sub_type: "message", message: "Debuff (Furthest)", message_ES: "Debuff (Más lejos)" }],

		"s-3106-1000-106-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Girar (Empujar)" }],
		"s-3106-1000-108-0": [{ type: "text", sub_type: "message", message: "Knockback Spin", message_ES: "Girar (Empujar)" }],		
		"s-3106-1000-109-0": [{ type: "text", sub_type: "message", message: "Jump (Knockdown)", message_ES: "Salto (Derribar)" }],
		"s-3106-1000-201-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3106-1000-202-0": [{ type: "text", sub_type: "message", message: "Front AoE", message_ES: "Ataque Frontal AoE" }],
		"s-3106-1000-203-0": [{ type: "text", sub_type: "message", message: "Front AoE + Wave", message_ES: "Ataque Frontal AoE + Ola" }],
		"s-3106-1000-205-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-206-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-207-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-209-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_ES: "Derribar" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-210-0": [
			{ type: "text", sub_type: "message", message: "Stomp (Knockdown)", message_ES: "Derribar" },
			{ type: "spawn", func: "circle", args: [true, 553, 0, 0, 10, 400, 0, 2500] }
		],
		"s-3106-1000-211-0": [{ type: "text", sub_type: "message", message: "Push", message_ES: "Empujar" }],
		"s-3106-1000-216-0": [{ type: "text", sub_type: "message", message: "Somersault", message_ES: "Salto Mortal" }],
		"s-3106-1000-508-0": [
			{ type: "text", sub_type: "message", message: "Outward Waves (Out > In)", message_ES: "Donas hacia afuera (Salir > Entrar)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3106-1000-509-0": [
			{ type: "text", sub_type: "message", message: "Inward Waves (In > Out)", message_ES: "Donas hacia adentro (Entrar > Salir)" },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 18, 180, 1500, 5000] },
			{ type: "spawn", func: "circle", args: [false, 445, 0, 0, 12, 350, 1500, 5000] }
		],
		"s-3106-1000-507-0": [{ type: "text", sub_type: "message", message: "Leash + Jump (Knockdown)", message_ES: "Tirar + Salto (Derribar)" }],

		"s-3106-1000-518-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],		
		"s-3106-1000-519-0": [{ type: "text", sub_type: "message", message: "Unleash", message_ES: "Unleash" }],
		"s-3106-1000-307-0": [{ type: "text", sub_type: "message", message: "Spin", message_ES: "Ataque Giratorio" }],
		"s-3106-1000-309-0": [{ type: "text", sub_type: "message", message: "Front", message_ES: "Ataque Frontal" }],
		"s-3106-1000-321-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }],
		"s-3106-1000-324-0": [{ type: "text", sub_type: "message", message: "AoE", message_ES: "АоЕ" }]
	};
};