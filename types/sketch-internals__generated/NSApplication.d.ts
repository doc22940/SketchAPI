interface NSApplicationUninitialized<InitializedType = NSApplication> extends NSResponderUninitialized<NSApplication> {}

interface NSApplication extends NSResponder, INSUserInterfaceValidations, INSMenuItemValidation, INSAccessibilityElement, INSAccessibility {
  hide(sender: any | null): void;
  unhide(sender: any | null): void;
  unhideWithoutActivation(): void;
  windowWithWindowNumber(windowNum: NSInteger): NSWindow;
  deactivate(): void;
  activateIgnoringOtherApps(flag: boolean): void;
  hideOtherApplications(sender: any | null): void;
  unhideAllApplications(sender: any | null): void;
  finishLaunching(): void;
  run(): void;
  runModalForWindow(window: NSWindow): NSModalResponse;
  stop(sender: any | null): void;
  stopModal(): void;
  stopModalWithCode(returnCode: NSModalResponse): void;
  abortModal(): void;
  beginModalSessionForWindow(window: NSWindow): NSModalSession;
  runModalSession(session: NSModalSession): NSModalResponse;
  endModalSession(session: NSModalSession): void;
  terminate(sender: any | null): void;
  requestUserAttention(requestType: NSRequestUserAttentionType): NSInteger;
  cancelUserAttentionRequest(request: NSInteger): void;
  enumerateWindowsWithOptions_usingBlock(options: NSWindowListOptions, block: Block): void;
  preventWindowOrdering(): void;
  setWindowsNeedUpdate(needUpdate: boolean): void;
  updateWindows(): void;
  activationPolicy(): NSApplicationActivationPolicy;
  setActivationPolicy(activationPolicy: NSApplicationActivationPolicy): boolean;
  reportException(exception: NSException | Error): void;
  replyToApplicationShouldTerminate(shouldTerminate: boolean): void;
  replyToOpenOrPrint(reply: NSApplicationDelegateReply): void;
  orderFrontCharacterPalette(sender: any | null): void;
  sendEvent(event: NSEvent): void;
  postEvent_atStart(event: NSEvent, flag: boolean): void;
  nextEventMatchingMask_untilDate_inMode_dequeue(mask: NSUInteger, expiration: NSDate | null, mode: NSRunLoopMode, deqFlag: boolean): NSEvent;
  discardEventsMatchingMask_beforeEvent(mask: NSUInteger, lastEvent: NSEvent | null): void;
  sendAction_to_from(action: string, target: any | null, sender: any | null): boolean;
  targetForAction(action: string): any;
  targetForAction_to_from(action: string, target: any | null, sender: any | null): any;
  tryToPerform_with(action: string, object: any | null): boolean;
  validRequestorForSendType_returnType(sendType: NSPasteboardType | null, returnType: NSPasteboardType | null): any;
  arrangeInFront(sender: any | null): void;
  removeWindowsItem(win: NSWindow): void;
  addWindowsItem_title_filename(win: NSWindow, string: NSString | string, isFilename: boolean): void;
  changeWindowsItem_title_filename(win: NSWindow, string: NSString | string, isFilename: boolean): void;
  updateWindowsItem(win: NSWindow): void;
  miniaturizeAll(sender: any | null): void;
  registerServicesMenuSendTypes_returnTypes(sendTypes: NSArray<any> | any[], returnTypes: NSArray<any> | any[]): void;
  orderFrontStandardAboutPanel(sender: any | null): void;
  orderFrontStandardAboutPanelWithOptions(optionsDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  disableRelaunchOnLogin(): void;
  enableRelaunchOnLogin(): void;
  registerForRemoteNotifications(): void;
  unregisterForRemoteNotifications(): void;
  registerForRemoteNotificationTypes(types: NSRemoteNotificationType): void;
  runModalForWindow_relativeToWindow(window: NSWindow, docWindow: NSWindow): NSInteger;
  beginModalSessionForWindow_relativeToWindow(window: NSWindow, docWindow: NSWindow): NSModalSession;
  application_printFiles(sender: NSApplication, filenames: NSArray<any> | any[]): void;
  beginSheet_modalForWindow_modalDelegate_didEndSelector_contextInfo(sheet: NSWindow, docWindow: NSWindow, modalDelegate: any | null, didEndSelector: string | null, contextInfo: void): void;
  endSheet(sheet: NSWindow): void;
  endSheet_returnCode(sheet: NSWindow, returnCode: NSInteger): void;
  makeWindowsPerform_inOrder(selector: string, flag: boolean): NSWindow;
  orderFrontColorPanel(sender: any | null): void;
  activateContextHelpMode(sender: any | null): void;
  showHelp(sender: any | null): void;
  runPageLayout(sender: any | null): void;
  toggleTouchBarCustomizationPalette(sender: any | null): IBAction;
  registerUserInterfaceItemSearchHandler(handler: any): void;
  unregisterUserInterfaceItemSearchHandler(handler: any): void;
  searchString_inUserInterfaceItemString_searchRange_foundRange(searchString: NSString | string, stringToSearch: NSString | string, searchRange: NSRange, foundRange: NSRange | null): boolean;
  restoreWindowWithIdentifier_state_completionHandler(identifier: NSUserInterfaceItemIdentifier, state: NSCoder, completionHandler: Block): boolean;
  extendStateRestoration(): void;
  completeStateRestoration(): void;
  applicationName(): NSString;
  applicationVersion(): NSString;
  applicationBuild(): NSString;
  isActiveApplication(): boolean;
  open(pathToFile: NSString | string): any;
  validateUserInterfaceItem(item: any): boolean;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  accessibilityFrame(): NSRect;
  accessibilityParent(): any;
  isAccessibilityFocused(): boolean;
  accessibilityIdentifier(): NSString;
  accessibilityLayoutPointForScreenPoint(point: NSPoint): NSPoint;
  accessibilityLayoutSizeForScreenSize(size: NSSize): NSSize;
  accessibilityScreenPointForLayoutPoint(point: NSPoint): NSPoint;
  accessibilityScreenSizeForLayoutSize(size: NSSize): NSSize;
  accessibilityCellForColumn_row(column: NSInteger, row: NSInteger): any;
  accessibilityAttributedStringForRange(range: NSRange): NSAttributedString;
  accessibilityRangeForLine(line: NSInteger): NSRange;
  accessibilityStringForRange(range: NSRange): NSString;
  accessibilityRangeForPosition(point: NSPoint): NSRange;
  accessibilityRangeForIndex(index: NSInteger): NSRange;
  accessibilityFrameForRange(range: NSRange): NSRect;
  accessibilityRTFForRange(range: NSRange): NSData;
  accessibilityStyleRangeForIndex(index: NSInteger): NSRange;
  accessibilityLineForIndex(index: NSInteger): NSInteger;
  accessibilityPerformCancel(): boolean;
  accessibilityPerformConfirm(): boolean;
  accessibilityPerformDecrement(): boolean;
  accessibilityPerformDelete(): boolean;
  accessibilityPerformIncrement(): boolean;
  accessibilityPerformPick(): boolean;
  accessibilityPerformPress(): boolean;
  accessibilityPerformRaise(): boolean;
  accessibilityPerformShowAlternateUI(): boolean;
  accessibilityPerformShowDefaultUI(): boolean;
  accessibilityPerformShowMenu(): boolean;
  isAccessibilitySelectorAllowed(selector: string): boolean;

  delegate(): any;
  setDelegate(delegate: any): void;
  mainWindow(): NSWindow;
  keyWindow(): NSWindow;
  active(): boolean;
  hidden(): boolean;
  running(): boolean;
  modalWindow(): NSWindow;
  windows(): NSArray<any>;
  mainMenu(): NSMenu;
  setMainMenu(mainMenu: NSMenu): void;
  helpMenu(): NSMenu;
  setHelpMenu(helpMenu: NSMenu): void;
  applicationIconImage(): NSImage;
  setApplicationIconImage(applicationIconImage: NSImage): void;
  dockTile(): NSDockTile;
  presentationOptions(): NSApplicationPresentationOptions;
  setPresentationOptions(presentationOptions: NSApplicationPresentationOptions): void;
  currentSystemPresentationOptions(): NSApplicationPresentationOptions;
  occlusionState(): NSApplicationOcclusionState;
  appearance(): NSAppearance;
  setAppearance(appearance: NSAppearance): void;
  effectiveAppearance(): NSAppearance;
  currentEvent(): NSEvent;
  windowsMenu(): NSMenu;
  setWindowsMenu(windowsMenu: NSMenu): void;
  fullKeyboardAccessEnabled(): boolean;
  servicesMenu(): NSMenu;
  setServicesMenu(servicesMenu: NSMenu): void;
  servicesProvider(): any;
  setServicesProvider(servicesProvider: any): void;
  userInterfaceLayoutDirection(): NSUserInterfaceLayoutDirection;
  registeredForRemoteNotifications(): boolean;
  enabledRemoteNotificationTypes(): NSRemoteNotificationType;
  context(): NSGraphicsContext;
  orderedDocuments(): NSArray<any>;
  orderedWindows(): NSArray<any>;
  automaticCustomizeTouchBarMenuItemEnabled(): boolean;
  setAutomaticCustomizeTouchBarMenuItemEnabled(automaticCustomizeTouchBarMenuItemEnabled: boolean): void;
  accessibilityElement(): boolean;
  setAccessibilityElement(accessibilityElement: boolean): void;
  accessibilityFrame(): NSRect;
  setAccessibilityFrame(accessibilityFrame: NSRect): void;
  accessibilityFocused(): boolean;
  setAccessibilityFocused(accessibilityFocused: boolean): void;
  accessibilityActivationPoint(): NSPoint;
  setAccessibilityActivationPoint(accessibilityActivationPoint: NSPoint): void;
  accessibilityTopLevelUIElement(): any;
  setAccessibilityTopLevelUIElement(accessibilityTopLevelUIElement: any): void;
  accessibilityURL(): NSURL;
  setAccessibilityURL(accessibilityURL: NSURL): void;
  accessibilityValue(): any;
  setAccessibilityValue(accessibilityValue: any): void;
  accessibilityValueDescription(): NSString;
  setAccessibilityValueDescription(accessibilityValueDescription: NSString | string): void;
  accessibilityVisibleChildren(): NSArray<any>;
  setAccessibilityVisibleChildren(accessibilityVisibleChildren: NSArray<any> | any[]): void;
  accessibilitySubrole(): NSAccessibilitySubrole;
  setAccessibilitySubrole(accessibilitySubrole: NSAccessibilitySubrole): void;
  accessibilityTitle(): NSString;
  setAccessibilityTitle(accessibilityTitle: NSString | string): void;
  accessibilityTitleUIElement(): any;
  setAccessibilityTitleUIElement(accessibilityTitleUIElement: any): void;
  accessibilityNextContents(): NSArray<any>;
  setAccessibilityNextContents(accessibilityNextContents: NSArray<any> | any[]): void;
  accessibilityOrientation(): NSAccessibilityOrientation;
  setAccessibilityOrientation(accessibilityOrientation: NSAccessibilityOrientation): void;
  accessibilityOverflowButton(): any;
  setAccessibilityOverflowButton(accessibilityOverflowButton: any): void;
  accessibilityParent(): any;
  setAccessibilityParent(accessibilityParent: any): void;
  accessibilityPlaceholderValue(): NSString;
  setAccessibilityPlaceholderValue(accessibilityPlaceholderValue: NSString | string): void;
  accessibilityPreviousContents(): NSArray<any>;
  setAccessibilityPreviousContents(accessibilityPreviousContents: NSArray<any> | any[]): void;
  accessibilityRole(): NSAccessibilityRole;
  setAccessibilityRole(accessibilityRole: NSAccessibilityRole): void;
  accessibilityRoleDescription(): NSString;
  setAccessibilityRoleDescription(accessibilityRoleDescription: NSString | string): void;
  accessibilitySearchButton(): any;
  setAccessibilitySearchButton(accessibilitySearchButton: any): void;
  accessibilitySearchMenu(): any;
  setAccessibilitySearchMenu(accessibilitySearchMenu: any): void;
  accessibilitySelected(): boolean;
  setAccessibilitySelected(accessibilitySelected: boolean): void;
  accessibilitySelectedChildren(): NSArray<any>;
  setAccessibilitySelectedChildren(accessibilitySelectedChildren: NSArray<any> | any[]): void;
  accessibilityServesAsTitleForUIElements(): NSArray<any>;
  setAccessibilityServesAsTitleForUIElements(accessibilityServesAsTitleForUIElements: NSArray<any> | any[]): void;
  accessibilityShownMenu(): any;
  setAccessibilityShownMenu(accessibilityShownMenu: any): void;
  accessibilityMinValue(): any;
  setAccessibilityMinValue(accessibilityMinValue: any): void;
  accessibilityMaxValue(): any;
  setAccessibilityMaxValue(accessibilityMaxValue: any): void;
  accessibilityLinkedUIElements(): NSArray<any>;
  setAccessibilityLinkedUIElements(accessibilityLinkedUIElements: NSArray<any> | any[]): void;
  accessibilityWindow(): any;
  setAccessibilityWindow(accessibilityWindow: any): void;
  accessibilityIdentifier(): NSString;
  setAccessibilityIdentifier(accessibilityIdentifier: NSString | string): void;
  accessibilityHelp(): NSString;
  setAccessibilityHelp(accessibilityHelp: NSString | string): void;
  accessibilityFilename(): NSString;
  setAccessibilityFilename(accessibilityFilename: NSString | string): void;
  accessibilityExpanded(): boolean;
  setAccessibilityExpanded(accessibilityExpanded: boolean): void;
  accessibilityEdited(): boolean;
  setAccessibilityEdited(accessibilityEdited: boolean): void;
  accessibilityEnabled(): boolean;
  setAccessibilityEnabled(accessibilityEnabled: boolean): void;
  accessibilityChildren(): NSArray<any>;
  setAccessibilityChildren(accessibilityChildren: NSArray<any> | any[]): void;
  accessibilityChildrenInNavigationOrder(): NSArray<any>;
  setAccessibilityChildrenInNavigationOrder(accessibilityChildrenInNavigationOrder: NSArray<any> | any[]): void;
  accessibilityClearButton(): any;
  setAccessibilityClearButton(accessibilityClearButton: any): void;
  accessibilityCancelButton(): any;
  setAccessibilityCancelButton(accessibilityCancelButton: any): void;
  accessibilityProtectedContent(): boolean;
  setAccessibilityProtectedContent(accessibilityProtectedContent: boolean): void;
  accessibilityContents(): NSArray<any>;
  setAccessibilityContents(accessibilityContents: NSArray<any> | any[]): void;
  accessibilityLabel(): NSString;
  setAccessibilityLabel(accessibilityLabel: NSString | string): void;
  accessibilityAlternateUIVisible(): boolean;
  setAccessibilityAlternateUIVisible(accessibilityAlternateUIVisible: boolean): void;
  accessibilitySharedFocusElements(): NSArray<any>;
  setAccessibilitySharedFocusElements(accessibilitySharedFocusElements: NSArray<any> | any[]): void;
  accessibilityRequired(): boolean;
  setAccessibilityRequired(accessibilityRequired: boolean): void;
  accessibilityCustomRotors(): NSArray<any>;
  setAccessibilityCustomRotors(accessibilityCustomRotors: NSArray<any> | any[]): void;
  accessibilityApplicationFocusedUIElement(): any;
  setAccessibilityApplicationFocusedUIElement(accessibilityApplicationFocusedUIElement: any): void;
  accessibilityMainWindow(): any;
  setAccessibilityMainWindow(accessibilityMainWindow: any): void;
  accessibilityHidden(): boolean;
  setAccessibilityHidden(accessibilityHidden: boolean): void;
  accessibilityFrontmost(): boolean;
  setAccessibilityFrontmost(accessibilityFrontmost: boolean): void;
  accessibilityFocusedWindow(): any;
  setAccessibilityFocusedWindow(accessibilityFocusedWindow: any): void;
  accessibilityWindows(): NSArray<any>;
  setAccessibilityWindows(accessibilityWindows: NSArray<any> | any[]): void;
  accessibilityExtrasMenuBar(): any;
  setAccessibilityExtrasMenuBar(accessibilityExtrasMenuBar: any): void;
  accessibilityMenuBar(): any;
  setAccessibilityMenuBar(accessibilityMenuBar: any): void;
  accessibilityColumnTitles(): NSArray<any>;
  setAccessibilityColumnTitles(accessibilityColumnTitles: NSArray<any> | any[]): void;
  accessibilityOrderedByRow(): boolean;
  setAccessibilityOrderedByRow(accessibilityOrderedByRow: boolean): void;
  accessibilityHorizontalUnits(): NSAccessibilityUnits;
  setAccessibilityHorizontalUnits(accessibilityHorizontalUnits: NSAccessibilityUnits): void;
  accessibilityVerticalUnits(): NSAccessibilityUnits;
  setAccessibilityVerticalUnits(accessibilityVerticalUnits: NSAccessibilityUnits): void;
  accessibilityHorizontalUnitDescription(): NSString;
  setAccessibilityHorizontalUnitDescription(accessibilityHorizontalUnitDescription: NSString | string): void;
  accessibilityVerticalUnitDescription(): NSString;
  setAccessibilityVerticalUnitDescription(accessibilityVerticalUnitDescription: NSString | string): void;
  accessibilityHandles(): NSArray<any>;
  setAccessibilityHandles(accessibilityHandles: NSArray<any> | any[]): void;
  accessibilityWarningValue(): any;
  setAccessibilityWarningValue(accessibilityWarningValue: any): void;
  accessibilityCriticalValue(): any;
  setAccessibilityCriticalValue(accessibilityCriticalValue: any): void;
  accessibilityDisclosed(): boolean;
  setAccessibilityDisclosed(accessibilityDisclosed: boolean): void;
  accessibilityDisclosedByRow(): any;
  setAccessibilityDisclosedByRow(accessibilityDisclosedByRow: any): void;
  accessibilityDisclosedRows(): any;
  setAccessibilityDisclosedRows(accessibilityDisclosedRows: any): void;
  accessibilityDisclosureLevel(): NSInteger;
  setAccessibilityDisclosureLevel(accessibilityDisclosureLevel: NSInteger): void;
  accessibilityMarkerUIElements(): NSArray<any>;
  setAccessibilityMarkerUIElements(accessibilityMarkerUIElements: NSArray<any> | any[]): void;
  accessibilityMarkerValues(): any;
  setAccessibilityMarkerValues(accessibilityMarkerValues: any): void;
  accessibilityMarkerGroupUIElement(): any;
  setAccessibilityMarkerGroupUIElement(accessibilityMarkerGroupUIElement: any): void;
  accessibilityUnits(): NSAccessibilityUnits;
  setAccessibilityUnits(accessibilityUnits: NSAccessibilityUnits): void;
  accessibilityUnitDescription(): NSString;
  setAccessibilityUnitDescription(accessibilityUnitDescription: NSString | string): void;
  accessibilityRulerMarkerType(): NSAccessibilityRulerMarkerType;
  setAccessibilityRulerMarkerType(accessibilityRulerMarkerType: NSAccessibilityRulerMarkerType): void;
  accessibilityMarkerTypeDescription(): NSString;
  setAccessibilityMarkerTypeDescription(accessibilityMarkerTypeDescription: NSString | string): void;
  accessibilityHorizontalScrollBar(): any;
  setAccessibilityHorizontalScrollBar(accessibilityHorizontalScrollBar: any): void;
  accessibilityVerticalScrollBar(): any;
  setAccessibilityVerticalScrollBar(accessibilityVerticalScrollBar: any): void;
  accessibilityAllowedValues(): NSArray<any>;
  setAccessibilityAllowedValues(accessibilityAllowedValues: NSArray<any> | any[]): void;
  accessibilityLabelUIElements(): NSArray<any>;
  setAccessibilityLabelUIElements(accessibilityLabelUIElements: NSArray<any> | any[]): void;
  accessibilityLabelValue(): number;
  setAccessibilityLabelValue(accessibilityLabelValue: number): void;
  accessibilitySplitters(): NSArray<any>;
  setAccessibilitySplitters(accessibilitySplitters: NSArray<any> | any[]): void;
  accessibilityDecrementButton(): any;
  setAccessibilityDecrementButton(accessibilityDecrementButton: any): void;
  accessibilityIncrementButton(): any;
  setAccessibilityIncrementButton(accessibilityIncrementButton: any): void;
  accessibilityTabs(): NSArray<any>;
  setAccessibilityTabs(accessibilityTabs: NSArray<any> | any[]): void;
  accessibilityHeader(): any;
  setAccessibilityHeader(accessibilityHeader: any): void;
  accessibilityColumnCount(): NSInteger;
  setAccessibilityColumnCount(accessibilityColumnCount: NSInteger): void;
  accessibilityRowCount(): NSInteger;
  setAccessibilityRowCount(accessibilityRowCount: NSInteger): void;
  accessibilityIndex(): NSInteger;
  setAccessibilityIndex(accessibilityIndex: NSInteger): void;
  accessibilityColumns(): NSArray<any>;
  setAccessibilityColumns(accessibilityColumns: NSArray<any> | any[]): void;
  accessibilityRows(): NSArray<any>;
  setAccessibilityRows(accessibilityRows: NSArray<any> | any[]): void;
  accessibilityVisibleRows(): NSArray<any>;
  setAccessibilityVisibleRows(accessibilityVisibleRows: NSArray<any> | any[]): void;
  accessibilitySelectedRows(): NSArray<any>;
  setAccessibilitySelectedRows(accessibilitySelectedRows: NSArray<any> | any[]): void;
  accessibilityVisibleColumns(): NSArray<any>;
  setAccessibilityVisibleColumns(accessibilityVisibleColumns: NSArray<any> | any[]): void;
  accessibilitySelectedColumns(): NSArray<any>;
  setAccessibilitySelectedColumns(accessibilitySelectedColumns: NSArray<any> | any[]): void;
  accessibilitySortDirection(): NSAccessibilitySortDirection;
  setAccessibilitySortDirection(accessibilitySortDirection: NSAccessibilitySortDirection): void;
  accessibilityRowHeaderUIElements(): NSArray<any>;
  setAccessibilityRowHeaderUIElements(accessibilityRowHeaderUIElements: NSArray<any> | any[]): void;
  accessibilitySelectedCells(): NSArray<any>;
  setAccessibilitySelectedCells(accessibilitySelectedCells: NSArray<any> | any[]): void;
  accessibilityVisibleCells(): NSArray<any>;
  setAccessibilityVisibleCells(accessibilityVisibleCells: NSArray<any> | any[]): void;
  accessibilityColumnHeaderUIElements(): NSArray<any>;
  setAccessibilityColumnHeaderUIElements(accessibilityColumnHeaderUIElements: NSArray<any> | any[]): void;
  accessibilityRowIndexRange(): NSRange;
  setAccessibilityRowIndexRange(accessibilityRowIndexRange: NSRange): void;
  accessibilityColumnIndexRange(): NSRange;
  setAccessibilityColumnIndexRange(accessibilityColumnIndexRange: NSRange): void;
  accessibilityInsertionPointLineNumber(): NSInteger;
  setAccessibilityInsertionPointLineNumber(accessibilityInsertionPointLineNumber: NSInteger): void;
  accessibilitySharedCharacterRange(): NSRange;
  setAccessibilitySharedCharacterRange(accessibilitySharedCharacterRange: NSRange): void;
  accessibilitySharedTextUIElements(): NSArray<any>;
  setAccessibilitySharedTextUIElements(accessibilitySharedTextUIElements: NSArray<any> | any[]): void;
  accessibilityVisibleCharacterRange(): NSRange;
  setAccessibilityVisibleCharacterRange(accessibilityVisibleCharacterRange: NSRange): void;
  accessibilityNumberOfCharacters(): NSInteger;
  setAccessibilityNumberOfCharacters(accessibilityNumberOfCharacters: NSInteger): void;
  accessibilitySelectedText(): NSString;
  setAccessibilitySelectedText(accessibilitySelectedText: NSString | string): void;
  accessibilitySelectedTextRange(): NSRange;
  setAccessibilitySelectedTextRange(accessibilitySelectedTextRange: NSRange): void;
  accessibilitySelectedTextRanges(): NSArray<any>;
  setAccessibilitySelectedTextRanges(accessibilitySelectedTextRanges: NSArray<any> | any[]): void;
  accessibilityToolbarButton(): any;
  setAccessibilityToolbarButton(accessibilityToolbarButton: any): void;
  accessibilityModal(): boolean;
  setAccessibilityModal(accessibilityModal: boolean): void;
  accessibilityProxy(): any;
  setAccessibilityProxy(accessibilityProxy: any): void;
  accessibilityMain(): boolean;
  setAccessibilityMain(accessibilityMain: boolean): void;
  accessibilityFullScreenButton(): any;
  setAccessibilityFullScreenButton(accessibilityFullScreenButton: any): void;
  accessibilityGrowArea(): any;
  setAccessibilityGrowArea(accessibilityGrowArea: any): void;
  accessibilityDocument(): NSString;
  setAccessibilityDocument(accessibilityDocument: NSString | string): void;
  accessibilityDefaultButton(): any;
  setAccessibilityDefaultButton(accessibilityDefaultButton: any): void;
  accessibilityCloseButton(): any;
  setAccessibilityCloseButton(accessibilityCloseButton: any): void;
  accessibilityZoomButton(): any;
  setAccessibilityZoomButton(accessibilityZoomButton: any): void;
  accessibilityMinimizeButton(): any;
  setAccessibilityMinimizeButton(accessibilityMinimizeButton: any): void;
  accessibilityMinimized(): boolean;
  setAccessibilityMinimized(accessibilityMinimized: boolean): void;
  accessibilityCustomActions(): NSArray<any>;
  setAccessibilityCustomActions(accessibilityCustomActions: NSArray<any> | any[]): void;
}

declare const NSApplication: {
  alloc(): NSApplicationUninitialized;
  class(): NSApplication;
  detachDrawingThread_toTarget_withObject(selector: string, target: any, argument: any | null): void;
  sharedApplication(): NSApplication;
  restorableStateKeyPaths(): NSArray<any>;

}
