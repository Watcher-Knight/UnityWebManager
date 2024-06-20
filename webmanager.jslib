mergeInto(LibraryManager.library, {

    Exit: function() {
        document.location.reload(true);
    },

    ShowMessage: function(str) {
        window.alert(UTF8ToString(str));
    },
});