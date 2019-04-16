interface TDParserUninitialized<InitializedType = TDParser> extends NSObjectUninitialized<TDParser> {}

interface TDParser extends NSObject {
  setAssembler_selector(a: any, sel: string): void;
  bestMatchFor(inAssembly: TDAssembly): TDAssembly;
  completeMatchFor(inAssembly: TDAssembly): TDAssembly;
  allMatchesFor(inAssemblies: NSSet<any>): NSSet<any>;

  assembler(): any;
  setAssembler(assembler: any): void;
  selector(): string;
  setSelector(selector: string): void;
  name(): NSString;
  setName(name: NSString | string): void;
}

declare const TDParser: {
  alloc(): TDParserUninitialized;
  class(): TDParser;
  parser(): any;
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
