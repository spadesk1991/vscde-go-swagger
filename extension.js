// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    var config = vscode.workspace.getConfiguration('swagger');
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.swagger', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		var editor = vscode.window.activeTextEditor;
		var line = editor.selection.active.line;
		 editor.edit(function (editBuilder) {

            try {
                editBuilder.insert(new vscode.Position(line, 0), config.get("tpl"));
            } catch (error) {
                console.error(error);
            }

        });
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
