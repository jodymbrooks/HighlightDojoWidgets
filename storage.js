
/////////////////////////////////////////////////////////////////////////////////////
// Storage Operations

function getStorageData(callback) {
    chrome.storage.sync.get('userOptions', function (items) {
        if (!items.userOptions) return;

        callback(items.userOptions);
    });
}

function clearStorageData(clearedCallback) {
    if (!confirm("Are you sure you want to clear all options from storage now?  THIS IS IMMEDIATE AND IRREVERSIBLE."))
        return;

    chrome.storage.sync.clear();

    clearedCallback();
}


function saveStorageData(items, successCallback) {
    chrome.storage.sync.set({ 'userOptions': items }, function () {
        successCallback();
    });
}

