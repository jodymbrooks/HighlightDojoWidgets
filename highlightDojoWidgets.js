
function highlightDojoWidgets(widgetid_info) {
	for (var widgetid_prefix in widgetid_info) {
		var color = widgetid_info[widgetid_prefix];
		if (!color)
			color = "blue";
		
		$('[widgetid*="' + widgetid_prefix + '"]')
			.css("border", "solid 1px " + color)
			.each(function(node){
// 				var widget = dijit.byId(node.id);
				node.title = node.id;
			});
	}
}

chrome.runtime.onMessage.addListener(function(message, sender, callback) {
	var widgetid_info = message.widgetid_info;
	highlightDojoWidgets(widgetid_info);
});



