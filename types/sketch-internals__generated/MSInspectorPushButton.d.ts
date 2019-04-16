interface MSInspectorPushButtonUninitialized<InitializedType = MSInspectorPushButton> extends MSInspectorButtonUninitialized<MSInspectorPushButton> {}

interface MSInspectorPushButton extends MSInspectorButton {
}

declare const MSInspectorPushButton: {
  alloc(): MSInspectorPushButtonUninitialized;
  class(): MSInspectorPushButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

