# HighlightDojoWidgets
If a page is built with Dojo Toolkit (Dojo 1), this extension will highlight the Dojo widgets with randomized colors.

Each time the extension button is pressed, it will re-highlight the widgets (thus with new randomized colors).

*INSTALLATION*
Since I'm still just working on this, I just drag the folder into the Extensions tab in Chrome to install it. Eventually it would be nice to actually package it up.  Too early in the process for that now.


*TODO*

I would like to make the options page take and save custom prefixes for the widgetid attributes for highlighting. However that's not complete.

For now I'm just ignoring dijit_* and dojox_* widgets so it just gets custom widgets.

If you'd like to vary the highlighting, edit the highlightTheWidgets function in content.js. 

*CAVEATS*

This code was created a while back before adding to github and creating this README, so I'm sure there's some work in progress that's messy and possibly confusing.
