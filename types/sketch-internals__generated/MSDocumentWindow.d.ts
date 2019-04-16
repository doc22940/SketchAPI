interface MSDocumentWindowUninitialized<InitializedType = MSDocumentWindow> extends NSWindowUninitialized<MSDocumentWindow> {}

interface MSDocumentWindow extends NSWindow {

  titleBarBadge(): BCWindowBadge;
  setTitleBarBadge(titleBarBadge: BCWindowBadge): void;
}

declare const MSDocumentWindow: {
  alloc(): MSDocumentWindowUninitialized;
  class(): MSDocumentWindow;
  frameRectForContentRect_styleMask(cRect: NSRect, style: NSWindowStyleMask): NSRect;
  contentRectForFrameRect_styleMask(fRect: NSRect, style: NSWindowStyleMask): NSRect;
  minFrameWidthWithTitle_styleMask(title: NSString | string, style: NSWindowStyleMask): CGFloat;
  removeFrameUsingName(name: NSWindowFrameAutosaveName): void;
  standardWindowButton_forStyleMask(b: NSWindowButton, styleMask: NSWindowStyleMask): NSButton;
  windowNumbersWithOptions(options: NSWindowNumberListOptions): NSArray<any>;
  windowNumberAtPoint_belowWindowWithWindowNumber(point: NSPoint, windowNumber: NSInteger): NSInteger;
  windowWithContentViewController(contentViewController: NSViewController): MSDocumentWindow;
  menuChanged(menu: NSMenu): void;
  defaultDepthLimit(): NSWindowDepth;
  allowsAutomaticWindowTabbing(): boolean;
  setAllowsAutomaticWindowTabbing(allowsAutomaticWindowTabbing: boolean): void;
  userTabbingPreference(): NSWindowUserTabbingPreference;
  restorableStateKeyPaths(): NSArray<any>;

}

