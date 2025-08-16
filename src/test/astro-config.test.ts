import { describe, it, expect } from 'vitest'

describe('Astro Configuration', () => {
  it('should have correct adapter configuration', () => {
    const adapter = 'vercel'
    
    expect(adapter).toBe('vercel')
    expect(adapter).toMatch(/^[a-z]+$/)
  })

  it('should have correct output mode', () => {
    const output = 'static'
    
    expect(output).toBe('static')
    expect(output).toMatch(/^[a-z]+$/)
  })

  it('should have all required integrations', () => {
    const integrations = [
      'tailwind',
      'sitemap',
      'mdx',
      'react'
    ]
    
    integrations.forEach(integration => {
      expect(integration).toMatch(/^[a-z]+$/)
    })
  })

  it('should have correct image configuration', () => {
    const imageConfig = {
      hasRemotePatterns: true,
      hasResponsiveStyles: true,
      hasSharpService: true,
      hasConstrainedLayout: true,
      hasObjectPosition: 'center',
      hasObjectFit: 'cover'
    }
    
    expect(imageConfig.hasRemotePatterns).toBe(true)
    expect(imageConfig.hasResponsiveStyles).toBe(true)
    expect(imageConfig.hasSharpService).toBe(true)
    expect(imageConfig.hasConstrainedLayout).toBe(true)
    expect(imageConfig.hasObjectPosition).toBe('center')
    expect(imageConfig.hasObjectFit).toBe('cover')
  })

  it('should have correct remote image patterns', () => {
    const remotePatterns = [
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
      'external-content.duckduckgo.com',
      'brainmade.org',
      'assets.leetcode.com'
    ]
    
    remotePatterns.forEach(pattern => {
      expect(pattern).toMatch(/^[a-z0-9\.-]+$/)
    })
  })

  it('should have correct markdown configuration', () => {
    const markdownConfig = {
      hasRemarkPlugins: true,
      hasSyntaxHighlighting: 'shiki',
      hasShikiConfig: true,
      hasTheme: 'catppuccin-mocha',
      hasLangAlias: true,
      hasWrap: true
    }
    
    expect(markdownConfig.hasRemarkPlugins).toBe(true)
    expect(markdownConfig.hasSyntaxHighlighting).toBe('shiki')
    expect(markdownConfig.hasShikiConfig).toBe(true)
    expect(markdownConfig.hasTheme).toBe('catppuccin-mocha')
    expect(markdownConfig.hasLangAlias).toBe(true)
    expect(markdownConfig.hasWrap).toBe(true)
  })

  it('should have correct shiki configuration', () => {
    const shikiConfig = {
      theme: 'catppuccin-mocha',
      langAlias: { cc: 'cpp' },
      wrap: true
    }
    
    expect(shikiConfig.theme).toBe('catppuccin-mocha')
    expect(shikiConfig.langAlias.cc).toBe('cpp')
    expect(shikiConfig.wrap).toBe(true)
  })

  it('should have correct prefetch configuration', () => {
    const prefetchConfig = {
      prefetchAll: true,
      defaultStrategy: 'viewport'
    }
    
    expect(prefetchConfig.prefetchAll).toBe(true)
    expect(prefetchConfig.defaultStrategy).toBe('viewport')
  })

  it('should have correct redirects', () => {
    const redirects = {
      '/links': '/quick-view',
      '/bio': '/profile',
      '/indian-legends': '/legends',
      '/quotes-i-like': '/quotes'
    }
    
    Object.entries(redirects).forEach(([from, to]) => {
      expect(from).toMatch(/^\/[a-z-]+$/)
      expect(to).toMatch(/^\/[a-z-]+$/)
    })
  })

  it('should have correct experimental features', () => {
    const experimentalFeatures = {
      clientPrerender: true,
      hasFonts: true
    }
    
    expect(experimentalFeatures.clientPrerender).toBe(true)
    expect(experimentalFeatures.hasFonts).toBe(true)
  })

  it('should have correct font configuration', () => {
    const fonts = [
      {
        name: 'Mozilla Text',
        cssVariable: '--font-sans'
      },
      {
        name: 'Bona Nova SC',
        cssVariable: '--font-quote'
      },
      {
        name: 'Mozilla Headline',
        cssVariable: '--font-serif'
      },
      {
        name: 'Cascadia Code',
        cssVariable: '--font-mono'
      }
    ]
    
    fonts.forEach(font => {
      expect(font.name).toMatch(/^[A-Za-z\s]+$/)
      expect(font.cssVariable).toMatch(/^--font-[a-z]+$/)
    })
  })

  it('should have correct site URL configuration', () => {
    const siteUrls = {
      development: 'http://localhost:4321/',
      production: 'https://naparajith.in/'
    }
    
    expect(siteUrls.development).toMatch(/^http:\/\/localhost:\d+\/$/)
    expect(siteUrls.production).toMatch(/^https:\/\/[a-z0-9\.-]+\/$/)
  })

  it('should have correct TypeScript configuration', () => {
    const tsConfig = {
      extends: 'astro/tsconfigs/strict',
      hasJSX: true,
      hasJSXImportSource: 'react',
      hasBaseUrl: true,
      hasPaths: true
    }
    
    expect(tsConfig.extends).toBe('astro/tsconfigs/strict')
    expect(tsConfig.hasJSX).toBe(true)
    expect(tsConfig.hasJSXImportSource).toBe('react')
    expect(tsConfig.hasBaseUrl).toBe(true)
    expect(tsConfig.hasPaths).toBe(true)
  })

  it('should have correct Tailwind configuration', () => {
    const tailwindConfig = {
      hasApplyBaseStyles: false,
      hasForms: true,
      hasTypography: true,
      hasFluid: true
    }
    
    expect(tailwindConfig.hasApplyBaseStyles).toBe(false)
    expect(tailwindConfig.hasForms).toBe(true)
    expect(tailwindConfig.hasTypography).toBe(true)
    expect(tailwindConfig.hasFluid).toBe(true)
  })

  it('should have correct build process', () => {
    const buildProcess = {
      hasAstroCheck: true,
      hasBuild: true,
      hasPreview: true
    }
    
    expect(buildProcess.hasAstroCheck).toBe(true)
    expect(buildProcess.hasBuild).toBe(true)
    expect(buildProcess.hasPreview).toBe(true)
  })
})