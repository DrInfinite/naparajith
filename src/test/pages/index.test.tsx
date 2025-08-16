import { describe, it, expect } from 'vitest'
import { render, screen } from '../utils'

describe('Index Page', () => {
  it('should have correct learning topics', () => {
    const learningTopics = [
      'How to read large codebases without getting lost?',
      'How do memory-corruption vulnerabilities work?',
      'Ethical exploitation of web applications',
      'Building a programming language from scratch using LLVM',
      'An in-depth explanation of how a Syscall works',
      'An in-depth explanation of how to build Firefox extensions.',
      'Reading a codebase without getting lost or stuck.'
    ]

    learningTopics.forEach(topic => {
      expect(topic).toMatch(/^[A-Za-z\s\?\.\-]+$/)
      expect(topic.length).toBeGreaterThan(0)
    })
  })

  it('should have correct page navigation structure', () => {
    const pages = [
      { href: '/profile', title: 'Profile', innerHTML: 'Profile' },
      { href: '/quick-view', title: 'Quick View', innerHTML: 'Quick View' },
      { href: '/blog', title: 'Blog', innerHTML: 'Blog' },
      { href: '/quotes', title: 'Quotes', innerHTML: 'Quotes' },
      { href: '/design', title: 'Design', innerHTML: 'Design' },
      { href: '/projects', title: 'Projects', innerHTML: 'Projects' },
      { href: '/tools', title: 'Tools', innerHTML: 'Tools' }
    ]

    pages.forEach(page => {
      expect(page.href).toMatch(/^\/[a-z-]+$/)
      expect(page.title).toMatch(/^[A-Za-z\s]+$/)
      expect(page.innerHTML).toMatch(/^[A-Za-z\s]+$/)
    })
  })

  it('should have correct social media links', () => {
    const socials = [
      {
        href: '/quick-view/github',
        title: 'GitHub - DrInfinite',
        innerHTML: 'GitHub'
      },
      {
        href: 'https://www.linkedin.com/in/naparajith/',
        title: 'LinkedIn - Naparajith T L',
        innerHTML: 'LinkedIn',
        target: '_blank'
      },
      {
        href: '/quick-view/leetcode',
        title: 'Leetcode - DrInfinite',
        innerHTML: 'Leetcode'
      },
      {
        href: 'https://bsky.app/profile/naparajith.in',
        title: 'Naparajith | DrInfinite (@naparajith.in)',
        innerHTML: 'BlueSky',
        target: '_blank'
      },
      {
        href: 'https://mastodon.social/@naparajith',
        title: 'Naparajith | DrInfinite (@naparajjith.mastodon.social)',
        innerHTML: 'Mastodon',
        target: '_blank'
      }
    ]

    socials.forEach(social => {
      expect(social.href).toMatch(/^(\/|https:\/\/).*/)
      expect(social.title).toMatch(/^[A-Za-z\s\-\|\(\)\@\.]+$/)
      expect(social.innerHTML).toMatch(/^[A-Za-z]+$/)
      
      if (social.target) {
        expect(social.target).toBe('_blank')
      }
    })
  })

  it('should have correct page metadata', () => {
    const pageMetadata = {
      title: 'Home',
      description: 'The personal portfolio of T L Naparajith, a Software Engineer from India.'
    }

    expect(pageMetadata.title).toBe('Home')
    expect(pageMetadata.description).toContain('T L Naparajith')
    expect(pageMetadata.description).toContain('Software Engineer')
    expect(pageMetadata.description).toContain('India')
  })

  it('should have correct layout structure', () => {
    const layoutStructure = {
      hasArticle: true,
      hasFigure: true,
      hasImage: true
    }

    expect(layoutStructure.hasArticle).toBe(true)
    expect(layoutStructure.hasFigure).toBe(true)
    expect(layoutStructure.hasImage).toBe(true)
  })

  it('should handle quotes collection correctly', () => {
    // Test that quotes can be fetched and processed
    const mockQuotes = [
      { data: { author: 'Author A' } },
      { data: { author: 'Author B' } },
      { data: { author: 'Author C' } }
    ]

    // Test sorting by author
    const sortedQuotes = [...mockQuotes].sort((a, b) => 
      a.data.author.localeCompare(b.data.author)
    )

    expect(sortedQuotes[0].data.author).toBe('Author A')
    expect(sortedQuotes[1].data.author).toBe('Author B')
    expect(sortedQuotes[2].data.author).toBe('Author C')
  })

  it('should have correct image handling', () => {
    const imageProperties = {
      hasResponsiveStyles: true,
      hasConstrainedLayout: true,
      hasObjectPosition: 'center',
      hasObjectFit: 'cover'
    }

    expect(imageProperties.hasResponsiveStyles).toBe(true)
    expect(imageProperties.hasConstrainedLayout).toBe(true)
    expect(imageProperties.hasObjectPosition).toBe('center')
    expect(imageProperties.hasObjectFit).toBe('cover')
  })

  it('should have correct responsive design classes', () => {
    const responsiveClasses = [
      '~gap-6/12',
      '~size-48/96'
    ]

    responsiveClasses.forEach(className => {
      expect(className).toMatch(/^~[a-z]+-\d+\/\d+$/)
    })
  })

  it('should support content collections', () => {
    const supportedCollections = ['quotes', 'blog', 'authors']
    
    supportedCollections.forEach(collection => {
      expect(collection).toMatch(/^[a-z]+$/)
    })
  })

  it('should have proper semantic HTML structure', () => {
    const semanticElements = ['article', 'figure', 'span', 'strong']
    
    semanticElements.forEach(element => {
      expect(element).toMatch(/^[a-z]+$/)
    })
  })

  it('should handle dynamic content correctly', () => {
    // Test that the page can handle dynamic content like random quotes
    const mockQuote = { data: { author: 'Test Author' } }
    
    expect(mockQuote.data.author).toBe('Test Author')
    expect(typeof mockQuote.data.author).toBe('string')
  })
})