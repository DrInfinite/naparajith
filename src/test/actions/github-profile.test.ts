import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GithubProfile, TGithubProfileProps } from '../../actions/github-profile'

// Mock fetch globally
global.fetch = vi.fn()

describe('GithubProfile', () => {
  const mockGithubData: TGithubProfileProps = {
    login: 'DrInfinite',
    id: 12345678,
    node_id: 'MDQ6VXNlcjEyMzQ1Njc4',
    avatar_url: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/DrInfinite',
    html_url: 'https://github.com/DrInfinite',
    followers_url: 'https://api.github.com/users/DrInfinite/followers',
    following_url: 'https://api.github.com/users/DrInfinite/following{/other_user}',
    gists_url: 'https://api.github.com/users/DrInfinite/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/DrInfinite/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/DrInfinite/subscriptions',
    organizations_url: 'https://api.github.com/users/DrInfinite/orgs',
    repos_url: 'https://api.github.com/users/DrInfinite/repos',
    events_url: 'https://api.github.com/users/DrInfinite/events{/privacy}',
    received_events_url: 'https://api.github.com/users/DrInfinite/received_events',
    type: 'User',
    user_view_type: 'User',
    site_admin: false,
    name: 'T L Naparajith',
    company: 'Test Company',
    blog: 'https://naparajith.in',
    location: 'India',
    email: 'test@example.com',
    hireable: true,
    bio: 'Software Engineer and Developer',
    twitter_username: 'testuser',
    public_repos: 50,
    public_gists: 10,
    followers: 100,
    following: 50,
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch GitHub profile data successfully', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockGithubData)
    }
    
    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await GithubProfile()

    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/DrInfinite')
    expect(result).toEqual(mockGithubData)
  })

  it('should return correct data structure', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockGithubData)
    }
    
    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await GithubProfile()

    expect(result).toHaveProperty('login')
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('public_repos')
    expect(result).toHaveProperty('followers')
    expect(result).toHaveProperty('created_at')
  })

  it('should handle API errors gracefully', async () => {
    const mockResponse = {
      ok: false,
      status: 404,
      statusText: 'Not Found'
    }
    
    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    // This should throw an error or handle it gracefully
    await expect(GithubProfile()).rejects.toThrow()
  })

  it('should handle network errors', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'))

    await expect(GithubProfile()).rejects.toThrow('Network error')
  })

  it('should call the correct GitHub API endpoint', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockGithubData)
    }
    
    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    await GithubProfile()

    expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/DrInfinite')
  })

  it('should return data with correct types', async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockGithubData)
    }
    
    vi.mocked(fetch).mockResolvedValue(mockResponse as any)

    const result = await GithubProfile()

    expect(typeof result.login).toBe('string')
    expect(typeof result.id).toBe('number')
    expect(typeof result.public_repos).toBe('number')
    expect(typeof result.followers).toBe('number')
    expect(typeof result.created_at).toBe('string')
    expect(typeof result.site_admin).toBe('boolean')
  })
})