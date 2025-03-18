const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

function activate(context) {
  // Register the command that will be called from Command Palette
  let disposable = vscode.commands.registerCommand('cursor-reset-id.reset', () => {
    // Get the extension's directory path
    const extensionPath = context.extensionPath;
    const batFilePath = path.join(extensionPath, 'reset-machine-id.bat');

    // Execute the batch file immediately
    exec(`"${batFilePath}"`, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Lỗi khi reset Machine ID: ${error.message}`);
        return;
      }
      vscode.window.showInformationMessage('Reset Machine ID thành công!');
    });
  });

  context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
  activate,
  deactivate
} 