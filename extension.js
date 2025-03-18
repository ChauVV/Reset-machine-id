const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

function activate(context) {
  let disposable = vscode.commands.registerCommand('cursor-reset-id.reset', () => {
    // Get the extension's directory path
    const extensionPath = context.extensionPath;
    const batFilePath = path.join(extensionPath, 'reset-machine-id.bat');

    // Execute the batch file
    exec(`"${batFilePath}"`, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Error executing reset script: ${error.message}`);
        return;
      }
      vscode.window.showInformationMessage('Machine ID reset completed successfully!');
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate
} 