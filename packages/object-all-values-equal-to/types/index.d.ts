declare const version: string;
interface Opts {
  arraysMustNotContainPlaceholders: boolean;
}
declare const defaults: Opts;
declare function allEq(input: any, value: any, opts?: Partial<Opts>): boolean;

export { type Opts, allEq, defaults, version };
