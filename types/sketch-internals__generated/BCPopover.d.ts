interface BCPopoverUninitialized<InitializedType = BCPopover> extends NSObjectUninitialized<BCPopover> {}

interface BCPopover extends NSObject, INSWindowDelegate, INSViewControllerPresentationAnimator {
  showRelativeToView_preferredEdge(view: NSView, edge: NSRectEdge): void;
  close(): void;
  move(): void;
  popoverWindowFrame(): NSRect;
  windowShouldClose(sender: NSWindow): boolean;
  windowWillReturnFieldEditor_toObject(sender: NSWindow, client: any | null): any;
  windowWillResize_toSize(sender: NSWindow, frameSize: NSSize): NSSize;
  windowWillUseStandardFrame_defaultFrame(window: NSWindow, newFrame: NSRect): NSRect;
  windowShouldZoom_toFrame(window: NSWindow, newFrame: NSRect): boolean;
  windowWillReturnUndoManager(window: NSWindow): NSUndoManager;
  window_willPositionSheet_usingRect(window: NSWindow, sheet: NSWindow, rect: NSRect): NSRect;
  window_shouldPopUpDocumentPathMenu(window: NSWindow, menu: NSMenu): boolean;
  window_shouldDragDocumentWithEvent_from_withPasteboard(window: NSWindow, event: NSEvent, dragImageLocation: NSPoint, pasteboard: NSPasteboard): boolean;
  window_willUseFullScreenContentSize(window: NSWindow, proposedSize: NSSize): NSSize;
  window_willUseFullScreenPresentationOptions(window: NSWindow, proposedOptions: NSApplicationPresentationOptions): NSApplicationPresentationOptions;
  customWindowsToEnterFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  windowDidFailToEnterFullScreen(window: NSWindow): void;
  customWindowsToExitFullScreenForWindow(window: NSWindow): NSArray<any>;
  window_startCustomAnimationToExitFullScreenWithDuration(window: NSWindow, duration: NSTimeInterval): void;
  customWindowsToEnterFullScreenForWindow_onScreen(window: NSWindow, screen: NSScreen): NSArray<any>;
  window_startCustomAnimationToEnterFullScreenOnScreen_withDuration(window: NSWindow, screen: NSScreen, duration: NSTimeInterval): void;
  windowDidFailToExitFullScreen(window: NSWindow): void;
  window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize(window: NSWindow, maxPreferredFrameSize: NSSize, maxAllowedFrameSize: NSSize): NSSize;
  window_willEncodeRestorableState(window: NSWindow, state: NSCoder): void;
  window_didDecodeRestorableState(window: NSWindow, state: NSCoder): void;
  windowDidResize(notification: NSNotification): void;
  windowDidExpose(notification: NSNotification): void;
  windowWillMove(notification: NSNotification): void;
  windowDidMove(notification: NSNotification): void;
  windowDidBecomeKey(notification: NSNotification): void;
  windowDidResignKey(notification: NSNotification): void;
  windowDidBecomeMain(notification: NSNotification): void;
  windowDidResignMain(notification: NSNotification): void;
  windowWillClose(notification: NSNotification): void;
  windowWillMiniaturize(notification: NSNotification): void;
  windowDidMiniaturize(notification: NSNotification): void;
  windowDidDeminiaturize(notification: NSNotification): void;
  windowDidUpdate(notification: NSNotification): void;
  windowDidChangeScreen(notification: NSNotification): void;
  windowDidChangeScreenProfile(notification: NSNotification): void;
  windowDidChangeBackingProperties(notification: NSNotification): void;
  windowWillBeginSheet(notification: NSNotification): void;
  windowDidEndSheet(notification: NSNotification): void;
  windowWillStartLiveResize(notification: NSNotification): void;
  windowDidEndLiveResize(notification: NSNotification): void;
  windowWillEnterFullScreen(notification: NSNotification): void;
  windowDidEnterFullScreen(notification: NSNotification): void;
  windowWillExitFullScreen(notification: NSNotification): void;
  windowDidExitFullScreen(notification: NSNotification): void;
  windowWillEnterVersionBrowser(notification: NSNotification): void;
  windowDidEnterVersionBrowser(notification: NSNotification): void;
  windowWillExitVersionBrowser(notification: NSNotification): void;
  windowDidExitVersionBrowser(notification: NSNotification): void;
  windowDidChangeOcclusionState(notification: NSNotification): void;
  animatePresentationOfViewController_fromViewController(viewController: NSViewController, fromViewController: NSViewController): void;
  animateDismissalOfViewController_fromViewController(viewController: NSViewController, fromViewController: NSViewController): void;

  contentViewController(): NSViewController;
  setContentViewController(contentViewController: NSViewController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  minimumHeight(): CGFloat;
  window(): BCPopoverWindow;
  setWindow(window: BCPopoverWindow): void;
  screenEdgeBehaviour(): BCPopoverScreenEdgeBehaviour;
  setScreenEdgeBehaviour(screenEdgeBehaviour: BCPopoverScreenEdgeBehaviour): void;
  layerDependency(): BCPopupLayerDependency;
  setLayerDependency(layerDependency: BCPopupLayerDependency): void;
  closesOnWindowDidResignKey(): boolean;
  setClosesOnWindowDidResignKey(closesOnWindowDidResignKey: boolean): void;
  attachedToView(): NSView;
  setAttachedToView(attachedToView: NSView): void;
  attachedToViewMargin(): CGFloat;
  setAttachedToViewMargin(attachedToViewMargin: CGFloat): void;
  preferredEdge(): NSRectEdge;
  setPreferredEdge(preferredEdge: NSRectEdge): void;
}

declare const BCPopover: {
  alloc(): BCPopoverUninitialized;
  class(): BCPopover;
  closeAllPopovers(): void;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}
