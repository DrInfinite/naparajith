/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

declare module '*.astro' {
  const Component: any
  export default Component
}

declare module '*.mdx' {
  const Component: any
  export default Component
}

// Extend expect matchers
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T> {}
  }
}