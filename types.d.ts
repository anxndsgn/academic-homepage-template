declare module '*.bib' {
  const content: string;
  export default content;
}

declare module 'bibtex-parse-js' {
  export function toJSON(input: string): any[];
}
