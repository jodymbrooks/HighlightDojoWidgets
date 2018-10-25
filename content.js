function highlightTheWidgets() {
    var colors = [
    'blue',
    'red',
    'yellow',
    'green',
    'magenta',
    'cyan',
    'orange',
    'pink',
    'gray',
    'purple',
    '#123',
    '#def',
    '#345',
    '#bcd',
    '#567',
    '#9ab',
    '#789',
    '#abc',
    '#678',
    '#cde',
    '#234',
    '#89a',
    'teal'];
    var colorsCount = colors.length;

    // randomize the colors array
    colors.sort(function() { return 0.5 - Math.random() });

    var count = 0;
    $('[widgetid]').each(function (index, item) {
        var wid = item.getAttribute('widgetid');
        if (!(wid.startsWith('dijit_') ||
              wid.startsWith('dojox_')))
        {
            // var color = colors[index % colorsCount];
            var color = colors[count++ % colorsCount];

            //$(this).css('border', '1px solid ' + color);
            $(this).css('backgroundColor', color);
            // $(this).css('padding', '8px');
            $(this).attr('title', $(this).attr('widgetid'));
        }
    });

    //getStorageData(function (userOptions) {
    //    if (!Array.isArray(userOptions)) return; // unexpected format

    //    userOptions.forEach(function (item, index) {
    //        var urlMatch = item.urlMatch;

    //        if (location.href.match(urlMatch)) {
                
    //            var introJsOptions = JSON.parse(item.introJsOptions);

    //            // Kick off the intro now
    //            var intro = introJs();
    //            intro.setOptions(introJsOptions);
    //            intro.start();

    //            // found one so return
    //            return;
    //        }

    //        // To get here means no tutorial was found to match this URL
    //    });        
    //});
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            highlightTheWidgets();
        }
    }
);