'use strict';

// Available strings for different languages
module.exports.general = {

	// English
	en: {
		unknowncommand: "Unknown command, type \"guide help\"",
		helpheader: "Enter \"guide help\" for more information",
		helpbody: [
			["guide, module on/off", "PRMSG"],
			["guide gui, show module GUI", "PRMSG"],
			["guide voice, text-to-speech (TTS) notices on/off", "PRMSG"],
			["guide lNotice, send notices to chat on/off", "PRMSG"],
			["guide gNotice, send notices to party chat channel on/off", "PRMSG"],
			["guide 1~10, to settings TTS speech rate", "PRMSG"],
			["guide spawnObject, spawn marker objects on/off", "PRMSG"],
			["guide stream, streamer mode on/off", "PRMSG"],
			["guide dungeons, list of all supported dungeons", "PRMSG"],
			["verbose id, send notices for specified dungeon on/off", "PRMSG"],
			["guide spawnObject id, spawn marker objects for specified dungeon on/off", "PRMSG"],
			["guide cc, view the current system message notification color", "PRMSG"],
			["guide cr, message color is RED", "CRMSG"],
			["guide co, message color is ORANGE", "COMSG"],
			["guide cy, message color is YELLOW", "CYMSG"],
			["guide cg, message color is GREEN", "CGMSG"],
			["guide cdb, message color is DARK BLUE", "CDBMSG"],
			["guide cb, message color is BLUE", "CBMSG"],
			["guide cv, message color is VIOLET", "CVMSG"],
			["guide cp, message color is PINK", "CPMSG"],
			["guide clp, message color is LIGHT PINK", "CLPMSG"],
			["guide clb, message color is LIGHT BLUE", "CLBMSG"],
			["guide cbl, message color is BLACK", "CBLMSG"],
			["guide cgr, message color is GRAY", "CGRMSG"],
			["guide cw, message color is WHITE", "CWMSG"],
		],
		red: "Red",
		green: "Green",
		settings: "Settings",
		spawnObject: "Spawn objects",
		speaks: "Voice messages",
		lNotice: "Chat messages",
		gNotice: "Send messages to party members",
		stream: "Streamer Mode",
		rate: "Speech rate",
		color: "Change color",
		dungeons: "Dungeon settings",
		verbose: "Messages",
		objects: "Objects",
		test: "Test",
		module: "TERA-Guide module",
		enabled: "On",
		disabled: "Off",
		voicetest: "[Voice speech rate test]",
		colorchanged: "Message notification color is changed",
		ratechanged: "Voice speed changed to",
		dgnotfound: "Dungeon not found.",
		dgnotspecified: "Dungeon id not specified.",
		enterdg: "Enter Dungeon",
		fordungeon: "for dungeon",
	},

	// Русский
	ru: {
		unknowncommand: "Невереная команда, введите guide help",
		helpheader: "Введите \"guide help\" для вывода справки",
		helpbody: [
			["guide, вкл./выкл. модуля", "PRMSG"],
			["guide gui, показать графический интерфейс", "PRMSG"],
			["guide voice, вкл./выкл. голосовые сообщения", "PRMSG"],
			["guide lNotice, вкл./выкл. отправки сообщений в канал чата", "PRMSG"],
			["guide gNotice, вкл./выкл. отправки сообщений в чат группы", "PRMSG"],
			["guide 1~10, регулировка скорости чтения голосовых сообщений", "PRMSG"],
			["guide spawnObject, вкл./выкл. спавна маркировочных объектов", "PRMSG"],
			["guide stream, вкл./выкл. режима стрима (скрытие сообщений и объектов)", "PRMSG"],
			["guide dungeons, список всех поддерживаемых данжей и их id", "PRMSG"],
			["guide verbose id, вкл./выкл. всех сообщений для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide spawnObject id, вкл./выкл. спавна объектов для данжа, где id - идентификатор данжа", "PRMSG"],
			["guide cc, отобразить текущий цвет системного сообщения", "PRMSG"],
			["guide cr, установить цвет сообщения: красный", "CRMSG"],
			["guide c, установить цвет сообщения: оранжевый", "COMSG"],
			["guide cy, установить цвет сообщения: желтый", "CYMSG"],
			["guide cg, установить цвет сообщения: зеленый", "CGMSG"],
			["guide cdb, установить цвет сообщения: темно-синий", "CDBMSG"],
			["guide cb, установить цвет сообщения: синий", "CBMSG"],
			["guide cv, установить цвет сообщения: фиолетовый", "CVMSG"],
			["guide cp, установить цвет сообщения: розовый", "CPMSG"],
			["guide clp, установить цвет сообщения: светло-розовый", "CLPMSG"],
			["guide clb, установить цвет сообщения: светло-синий", "CLBMSG"],
			["guide cbl, установить цвет сообщения: черный", "CBLMSG"],
			["guide cgr, установить цвет сообщения: серый", "CGRMSG"],
			["guide cw, установить цвет сообщения: белый", "CWMSG"],
		],
		red: "Красный",
		green: "Зеленый",
		settings: "Настройки",
		spawnObject: "Спавн объектов",
		speaks: "Голосовые сообщения",
		lNotice: "Сообщения в чат",
		gNotice: "Отправка сообщений членам группы",
		stream: "Режим стримера",
		rate: "Скорость речи",
		color: "Выбор цвета",
		dungeons: "Настройки данжей",
		verbose: "Сообщения",
		objects: "Объекты",
		test: "Проверка",
		module: "Модуль TERA-Guide",
		enabled: "Вкл.",
		disabled: "Выкл.",
		voicetest: "[Проверка скорости чтения сообщений]",
		colorchanged: "Цвет текста сообщений изменен",
		ratechanged: "Скорость речи изменена на",
		dgnotfound: "Данж с таким id не найден.",
		dgnotspecified: "Не указан id данжа.",
		enterdg: "Вы вошли в данж",
		fordungeon: "для данжа",
	},
	// Español
	es: {
		unknowncommand: "Comando desconocido, escriba \"guide help\"",
		helpheader: "Escriba \"guide help\" para obtener más información",
		helpbody: [
			["guide, módulo on/off", "PRMSG"],
			["guide gui, mostrar módulo GUI", "PRMSG"],
			["guide voice, mensajes de texto a voz (TTS)", "PRMSG"],
			["guide lNotice, envíe mensajes en el canal de chat (Take Notice)", "PRMSG"],
			["guide gNotice, envíe mensajes a los miembros de la party (Party Chat)", "PRMSG"],
			["guide 1~10, ajustar la velocidad de voz TTS", "PRMSG"],
			["guide spawnObject, generación de objetos", "PRMSG"],
			["guide stream, modo streamer", "PRMSG"],
			["guide dungeons, lista de todas las mazmorras compatibles", "PRMSG"],
			["verbose id, enviar mensajes para mazmorras específicas", "PRMSG"],
			["guide spawnObject id, generación de objetos para mazmorras específicas", "PRMSG"],
			["guide cc, ver el color de notificación del mensaje del sistema actual", "PRMSG"],
			["guide cr, el color del mensaje es ROJO", "CRMSG"],
			["guide co, el color del mensaje es NARANJA", "COMSG"],
			["guide cy, el color del mensaje es AMARILLO", "CYMSG"],
			["guide cg, el color del mensaje es VERDE", "CGMSG"],
			["guide cdb, el color del mensaje es AZUL OSCURO", "CDBMSG"],
			["guide cb, el color del mensaje es AZUL", "CBMSG"],
			["guide cv, el color del mensaje es VIOLETA", "CVMSG"],
			["guide cp, el color del mensaje es ROSA", "CPMSG"],
			["guide clp, el color del mensaje es ROSA CLARO", "CLPMSG"],
			["guide clb, el color del mensaje es AZUL CLARO", "CLBMSG"],
			["guide cbl, el color del mensaje es NEGRO", "CBLMSG"],
			["guide cgr, el color del mensaje es GRIS", "CGRMSG"],
			["guide cw, el color del mensaje es BLANCO", "CWMSG"],
		],
		red: "Rojo",
		green: "Verde",
		settings: "Ajustes",
		spawnObject: "Generación de objetos",
		speaks: "Mensajes por voz",
		lNotice: "Mensajes de chat (Notice)",
		gNotice: "Mensajes de chat (Party)",
		stream: "Modo Streamer",
		rate: "Velocidad de voz",
		color: "Cambiar el color",
		dungeons: "Ajustes de Mazmorras",
		verbose: "Mensajes",
		objects: "Objetos",
		test: "Prueba de voz",
		module: "Módulo TERA-Guía",
		enabled: "Activado",
		disabled: "Desactivado",
		voicetest: "[Prueba de velocidad de voz]",
		colorchanged: "El color de la notificación del mensaje ha cambiado",
		ratechanged: "La velocidad de la voz cambió a",
		dgnotfound: "Mazmorra no encontrada.",
		dgnotspecified: "ID de Mazmorra no especificada.",
		enterdg: "¡Bienvenido! a la Mazmorra",
		fordungeon: "para Mazmorra",
	},	

};