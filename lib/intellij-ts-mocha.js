

var replaceCommand = function(command) {
    "use strict";
    var newCommand = Array.from(command);
    newCommand.splice(1,1);
    for (var i = newCommand.length - 1 ; i >= 0; --i) {
        if ( newCommand[i].endsWith('.ts') ) {
            var replaceIndex = newCommand[i].lastIndexOf('.ts');
            newCommand[i] = newCommand[i].substring(0, replaceIndex).concat('.js');
            break;
        }
    }

    for (var i = 0; i < newCommand.length; ++i) {
        if ( newCommand[i].indexOf(" ") > -1 ) {
            newCommand[i] = `"${newCommand[i]}"`;
        }
    }
    return newCommand;
};

module.exports = {
    replaceCommand : replaceCommand
}