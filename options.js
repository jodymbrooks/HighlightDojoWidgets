// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function getCurrentTab(callback) {
    // Query filter to be passed to chrome.tabs.query - see
    // https://developer.chrome.com/extensions/tabs#method-query
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        // chrome.tabs.query invokes the callback with a list of tabs that match the
        // query. When the popup is opened, there is certainly a window and at least
        // one tab, so we can safely assume that |tabs| is a non-empty array.
        // A window can only have one active tab at a time, so the array consists of
        // exactly one tab.
        var tab = tabs[0];

        // A tab is a plain object that provides information about the tab.
        // See https://developer.chrome.com/extensions/tabs#type-Tab

        callback(tab);
    });

    // Most methods of the Chrome extension APIs are asynchronous. This means that
    // you CANNOT do something like this:
    //
    // var url;
    // chrome.tabs.query(queryInfo, function(tabs) {
    //   url = tabs[0].url;
    // });
    // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}

function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}


// Saves options to chrome.storage
function saveOptions() {


    var widgetid_prefix_info =
        $("#widgetid_info_table tr.data-row")
            .map(function(idx, elem) {
                var prefix = $(elem).find('.widgetid_prefix').val();
                var color = $(elem).find('.color').val();
                return { prefix: prefix, color: color};
            });

    chrome.storage.sync.set({widgetid_prefix_info: widgetid_prefix_info}, function () {
        // Update status to let user know options were saved.
        renderStatus( 'Options saved.');
        setTimeout(function () {
            renderStatus("");
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    var default_widgetid_prefix_info = {prefix: "common_js_form_", color: "blue"};

    chrome.storage.sync.get(default_widgetid_prefix_info, function (items) {
        console.dir(items);
//         document.getElementById('color').value = items.favoriteColor;
//         document.getElementById('like').checked = items.likesColor;
    });
}

function addRow(rowData) {
    var templateRow = $(".template-row");
    var newRow = templateRow.clone()
        .removeClass('template-row')
        .addClass('data-row');
    $('#widgetid_info_table tr:last').after(newRow);

    if (rowData) {
        newRow.find('.widgetid_prefix').val(rowData.prefix)
    }
}

document.addEventListener('DOMContentLoaded', function(){
    restoreOptions();
    $('#SaveButton').on('click', saveOptions);
    $('#AddButton').on('click', addRow);
    addRow();
});
