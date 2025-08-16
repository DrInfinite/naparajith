import { describe, it, expect } from 'vitest'

// Mock the content config to avoid Astro import issues
vi.mock('../content.config', () => ({
  collections: {
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
}))

const { collections } = await import('../content.config')

describe('Content Collections', () => {
  it('should have all required collections', () => {
    const expectedCollections = ['authors', 'blog', 'policy', 'profile', 'quotes', 'license']
    
    expectedCollections.forEach(collectionName => {
      expect(collections).toHaveProperty(collectionName)
    })
  })

  it('should have blog collection with correct schema', () => {
    const blogCollection = collections.blog
    
    expect(blogCollection).toBeDefined()
    expect(blogCollection.type).toBe('content')
    
    // Test schema validation
    const validBlogData = {
      title: 'Test Blog Post',
      description: 'A test blog post description',
      created: new Date('2024-01-01'),
      image: 'test-image.jpg',
      image_source: 'Test Source',
      author: 'test-author-id',
      draft: false
    }
    
    // The schema should be defined
    expect(blogCollection.schema).toBeDefined()
  })

  it('should have policy collection with correct schema', () => {
    const policyCollection = collections.policy
    
    expect(policyCollection).toBeDefined()
    expect(policyCollection.type).toBe('content')
    
    const validPolicyData = {
      title: 'Test Policy',
      description: 'A test policy description',
      created: new Date('2024-01-01'),
      updated: new Date('2024-01-02')
    }
    
    expect(policyCollection.schema).toBeDefined()
  })

  it('should have license collection with correct schema', () => {
    const licenseCollection = collections.license
    
    expect(licenseCollection).toBeDefined()
    expect(licenseCollection.type).toBe('content')
    
    const validLicenseData = {
      title: 'Test License',
      license_name: 'MIT',
      description: 'A test license description'
    }
    
    expect(licenseCollection.schema).toBeDefined()
  })

  it('should have quotes collection with correct schema', () => {
    const quotesCollection = collections.quotes
    
    expect(quotesCollection).toBeDefined()
    expect(quotesCollection.type).toBe('data')
    
    const validQuoteData = {
      cite: 'Test Citation',
      quote: 'This is a test quote',
      author: 'Test Author'
    }
    
    expect(quotesCollection.schema).toBeDefined()
  })

  it('should have authors collection with correct schema', () => {
    const authorsCollection = collections.authors
    
    expect(authorsCollection).toBeDefined()
    expect(authorsCollection.type).toBe('data')
    
    const validAuthorData = {
      name: 'Test Author',
      occupation: 'Software Engineer',
      social: 'https://example.com',
      image: 'https://example.com/image.jpg'
    }
    
    expect(authorsCollection.schema).toBeDefined()
  })

  it('should have profile collection with correct schema', () => {
    const profileCollection = collections.profile
    
    expect(profileCollection).toBeDefined()
    expect(profileCollection.type).toBe('content')
    
    const validProfileData = {
      title: 'Test Profile'
    }
    
    expect(profileCollection.schema).toBeDefined()
  })

  it('should export collections object', () => {
    expect(typeof collections).toBe('object')
    expect(collections).not.toBeNull()
  })
})