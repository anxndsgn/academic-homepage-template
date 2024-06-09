export function useMDXComponents(components) {
  return {
    p: (props) => <p className="text-base text-neutral-600" {...props} />,
    ...components,
  };
}
