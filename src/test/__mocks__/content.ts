// Mock for content collections
export const collections = {
  authors: {
    type: 'data',
    schema: {}
  },
  blog: {
    type: 'content',
    schema: {}
  },
  policy: {
    type: 'content',
    schema: {}
  },
  profile: {
    type: 'content',
    schema: {}
  },
  quotes: {
    type: 'data',
    schema: {}
  },
  license: {
    type: 'content',
    schema: {}
  }
}

export const getCollection = vi.fn()
export const getEntry = vi.fn()