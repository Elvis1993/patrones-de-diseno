/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { MockCallHistory } from "asset:///node/undici/mock-call-history.d.ts";

class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(content: string, cursorPointer: number, unsavedchanges: boolean) {
    this.content = content;
    this.cursorPosition = cursorPointer;
    this.unsavedChanges = unsavedchanges;
  }

  copyWith({
    content,
    cursorPosition,
    unsavedChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsavedChanges ?? this.unsavedChanges,
    );
  }

  displayState() {
    console.log(`\n Estado del Editor`);
    console.log(
      `Contenido: ${this.content}
            CursorPos: ${this.cursorPosition}
            Unsaved changes: ${this.unsavedChanges}`,
    );
  }
}

class CoddeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number = -1;

  save(state: CodeEditorState): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.splice(0, this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex++;
  }

  reado(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }

  undo(){
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }
}

function main() {
  const history = new CoddeEditorHistory();
  let editorState = new CodeEditorState("console.log('Hola Mundo);", 2, false);

  history.save(editorState);
  editorState.displayState();
  console.log("Estado inicial:");

  editorState = editorState.copyWith({
    content: "console.log('Hola Mundo); \nconsole.log('Nueva linea;",
    cursorPosition: 3,
    unsavedChanges: true,
  });
  history.save(editorState);
  console.log("Despues del primer cambio:");

  editorState.displayState();
  editorState = editorState.copyWith({
    cursorPosition: 5
  });
  history.save(editorState);
  console.log("Despues de mover el cursor:");
  editorState.displayState();

  console.log("Despues del undo:");
  editorState = history.undo()!;
  editorState.displayState();
}

main();
