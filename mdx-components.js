export function useMDXComponents(components) {
  return {
    p: (props) => (
      <p
        className="text-base text-neutral-600 dark:text-neutral-300 text-pretty"
        {...props}
      />
    ),
    li: (props) => (
      <li
        className="text-base text-neutral-600 dark:text-neutral-300"
        {...props}
      />
    ),
    strong: (props) => (
      <strong
        className="font-semibold text-neutral-900 dark:text-neutral-100"
        {...props}
      />
    ),
    h1: ({ children }) => <h1 className="text-2xl font-medium">{children}</h1>,
    a: (props) => (
      <a
        className="underline hover:text-neutral-900 dark:hover:text-neutral-50"
        {...props}
      />
    ),
    ...components,
  };
}
