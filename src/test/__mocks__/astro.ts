// Mock for astro:content
export const getCollection = vi.fn()
export const getEntry = vi.fn()

// Mock for astro:assets
export const Image = {
  src: 'test-image.jpg',
  alt: 'Test Image',
  width: 100,
  height: 100,
}

// Mock for Astro global
export const Astro = {
  url: new URL('http://localhost:4321/'),
  props: {},
  request: {
    headers: new Headers(),
  },
  response: {
    headers: new Headers(),
  },
  env: {},
  site: 'http://localhost:4321/',
  canonicalURL: new URL('http://localhost:4321/'),
  redirect: vi.fn(),
  cookies: {
    get: vi.fn(),
    set: vi.fn(),
    delete: vi.fn(),
    has: vi.fn(),
  },
  params: {},
  route: {
    id: 'test-route',
    pattern: '/test',
    params: {},
    component: 'TestComponent',
  },
  middleware: {
    invoke: vi.fn(),
  },
  locals: {},
  runtime: {
    env: {},
    mode: 'development',
    name: 'node',
    version: '1.0.0',
  },
}

// Mock for astroHTML
export const astroHTML = {
  JSX: {
    AnchorHTMLAttributes: {},
    HTMLAttributes: {},
    ImgHTMLAttributes: {},
  },
}

// Mock for mdast-util-to-string
export const toString = vi.fn((tree) => 'Mock content for testing')

// Mock for reading-time
export const getReadingTime = vi.fn((text) => ({
  text: '2 min read',
  words: 100,
  minutes: 2,
}))