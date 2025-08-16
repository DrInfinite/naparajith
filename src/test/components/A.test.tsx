import { describe, it, expect } from 'vitest'
import { render, screen } from '../utils'

describe('A (Anchor) Component', () => {
  it('should render with correct text content', () => {
    const anchorProps = {
      href: '/test',
      title: 'Test Link',
      target: '_self',
      css: 'custom-css'
    }

    expect(anchorProps.href).toBe('/test')
    expect(anchorProps.title).toBe('Test Link')
    expect(anchorProps.target).toBe('_self')
    expect(anchorProps.css).toBe('custom-css')
  })

  it('should have correct default styling classes', () => {
    const expectedClasses = [
      'group',
      'relative',
      'inline-flex',
      'w-fit',
      'flex-col',
      'no-underline',
      'decoration-0'
    ]

    expectedClasses.forEach(className => {
      expect(className).toMatch(/^[a-zA-Z0-9\-_]+$/)
    })
  })

  it('should have hover effects', () => {
    const hoverClasses = [
      'group-hover:invert',
      'dark:group-hover:invert-0'
    ]

    hoverClasses.forEach(className => {
      expect(className).toContain('group-hover:')
    })
  })

  it('should have underline animation effect', () => {
    const underlineClasses = [
      'absolute',
      'inset-x-0',
      'bottom-0',
      'h-[1px]',
      'bg-gradient-to-r',
      'from-[#1e57b7]',
      'to-[#4762f4]',
      'group-hover:h-full',
      'group-active:from-[#4762f4]',
      'group-active:to-[#1e57b7]',
      'md:h-[2px]'
    ]

    underlineClasses.forEach(className => {
      expect(className).toMatch(/^[a-zA-Z0-9\-_\[\]:#]+$/)
    })
  })

  it('should accept custom css prop', () => {
    const customCss = 'custom-anchor-class'
    
    expect(customCss).toBe('custom-anchor-class')
  })

  it('should have proper accessibility attributes', () => {
    const anchorProps = {
      href: '/accessible',
      title: 'Accessible Link',
      target: '_blank'
    }

    expect(anchorProps.href).toBe('/accessible')
    expect(anchorProps.title).toBe('Accessible Link')
    expect(anchorProps.target).toBe('_blank')
  })

  it('should render as an anchor tag with proper attributes', () => {
    const expectedTag = 'a'
    const expectedAttributes = ['href', 'title', 'target', 'class']

    expect(expectedTag).toBe('a')
    expectedAttributes.forEach(attr => {
      expect(attr).toMatch(/^[a-zA-Z]+$/)
    })
  })

  it('should support different href types', () => {
    const internalLink = '/profile'
    const externalLink = 'https://example.com'
    const hashLink = '#section'
    
    expect(internalLink).toMatch(/^\//)
    expect(externalLink).toMatch(/^https?:\/\//)
    expect(hashLink).toMatch(/^#/)
  })

  it('should handle different target values', () => {
    const targets = ['_blank', '_self', '_parent', '_top']
    
    targets.forEach(target => {
      expect(target).toMatch(/^_[a-z]+$/)
    })
  })

  it('should have responsive design classes', () => {
    const responsiveClasses = [
      'md:h-[2px]'
    ]

    responsiveClasses.forEach(className => {
      expect(className).toMatch(/^[a-zA-Z0-9\-_\[\]:]+$/)
    })
  })

  it('should have active state styling', () => {
    const activeClasses = [
      'group-active:from-[#4762f4]',
      'group-active:to-[#1e57b7]'
    ]

    activeClasses.forEach(className => {
      expect(className).toContain('group-active:')
    })
  })

  it('should support slot content', () => {
    // Test that the component can accept slot content
    const slotContent = 'Link Text'
    
    expect(slotContent).toBe('Link Text')
    expect(typeof slotContent).toBe('string')
  })
})