declare module '*.tsx' {
  const component: DefineComponent<string, unknown>;
  export default component;
}

declare function useParams<K extends string = string>(): Readonly<Params<K>>;
