interface CHVerticallyCentredPopupButtonCellUninitialized<InitializedType = CHVerticallyCentredPopupButtonCell> extends NSPopUpButtonCellUninitialized<CHVerticallyCentredPopupButtonCell> {}

interface CHVerticallyCentredPopupButtonCell extends NSPopUpButtonCell {
}

declare const CHVerticallyCentredPopupButtonCell: {
  alloc(): CHVerticallyCentredPopupButtonCellUninitialized;
  class(): CHVerticallyCentredPopupButtonCell;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}
