import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'ut-id-generator.appendId',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      editor.edit(editBuilder => {
        const { line, character } = editor.selection.active;
        const generatedId = "@ut_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

        editBuilder.insert(
          new vscode.Position(line, character),
          generatedId
        );
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() { }