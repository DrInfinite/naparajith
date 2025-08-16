import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { LeetcodeProfile } from '../../actions/leetcode-profile'

// Mock the leetcode-query package
const mockLeetCode = {
  user: vi.fn()
}

vi.mock('leetcode-query', () => ({
  LeetCode: vi.fn(() => mockLeetCode)
}))

describe('LeetcodeProfile', () => {
  const mockLeetCodeData = {
    matchedUser: {
      submitStats: {
        acSubmissionNum: [
          { count: 150, difficulty: 'All' },
          { count: 50, difficulty: 'Easy' },
          { count: 80, difficulty: 'Medium' },
          { count: 20, difficulty: 'Hard' }
        ]
      }
    },
    recentSubmissionList: [
      { title: 'Two Sum', status: 'Accepted', timestamp: '1234567890' }
    ],
    allQuestionsCount: [
      { count: 2000, difficulty: 'All' },
      { count: 500, difficulty: 'Easy' },
      { count: 1000, difficulty: 'Medium' },
      { count: 500, difficulty: 'Hard' }
    ]
  }

  beforeEach(() => {
    vi.clearAllMocks()
    
    // Setup mock LeetCode instance
    mockLeetCode.user.mockResolvedValue(mockLeetCodeData)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch LeetCode profile data successfully', async () => {
    const result = await LeetcodeProfile()

    expect(mockLeetCode.user).toHaveBeenCalledWith('DrInfinite')
    expect(result).toBeDefined()
  })

  it('should return correct data structure', async () => {
    const result = await LeetcodeProfile()

    expect(result).toHaveProperty('completedCount')
    expect(result).toHaveProperty('completedPercentage')
    expect(result).toHaveProperty('solvedCount')
    expect(result).toHaveProperty('matchedUser')
    expect(result).toHaveProperty('recentSubmissionList')
  })

  it('should calculate solved count correctly', async () => {
    const result = await LeetcodeProfile()

    expect(result.solvedCount.total).toBe(150)
    expect(result.solvedCount.easy).toBe(50)
    expect(result.solvedCount.medium).toBe(80)
    expect(result.solvedCount.hard).toBe(20)
  })

  it('should calculate completed count correctly', async () => {
    const result = await LeetcodeProfile()

    expect(result.completedCount.total).toBe('150/2000')
    expect(result.completedCount.easy).toBe('50/500')
    expect(result.completedCount.medium).toBe('80/1000')
    expect(result.completedCount.hard).toBe('20/500')
  })

  it('should calculate completed percentage correctly', async () => {
    const result = await LeetcodeProfile()

    expect(result.completedPercentage.total).toBe('7.50%')
    expect(result.completedPercentage.easy).toBe('10.00%')
    expect(result.completedPercentage.medium).toBe('8.00%')
    expect(result.completedPercentage.hard).toBe('4.00%')
  })

  it('should handle edge case with zero solved problems', async () => {
    const mockDataWithZero = {
      matchedUser: {
        submitStats: {
          acSubmissionNum: [
            { count: 0, difficulty: 'All' },
            { count: 0, difficulty: 'Easy' },
            { count: 0, difficulty: 'Medium' },
            { count: 0, difficulty: 'Hard' }
          ]
        }
      },
      recentSubmissionList: [],
      allQuestionsCount: [
        { count: 2000, difficulty: 'All' },
        { count: 500, difficulty: 'Easy' },
        { count: 1000, difficulty: 'Medium' },
        { count: 500, difficulty: 'Hard' }
      ]
    }

    mockLeetCode.user.mockResolvedValue(mockDataWithZero)

    const result = await LeetcodeProfile()

    expect(result.completedPercentage.total).toBe('0.00%')
    expect(result.solvedCount.total).toBe(0)
  })

  it('should handle edge case with all problems solved', async () => {
    const mockDataWithAllSolved = {
      matchedUser: {
        submitStats: {
          acSubmissionNum: [
            { count: 2000, difficulty: 'All' },
            { count: 500, difficulty: 'Easy' },
            { count: 1000, difficulty: 'Medium' },
            { count: 500, difficulty: 'Hard' }
          ]
        }
      },
      recentSubmissionList: [],
      allQuestionsCount: [
        { count: 2000, difficulty: 'All' },
        { count: 500, difficulty: 'Easy' },
        { count: 1000, difficulty: 'Medium' },
        { count: 500, difficulty: 'Hard' }
      ]
    }

    mockLeetCode.user.mockResolvedValue(mockDataWithAllSolved)

    const result = await LeetcodeProfile()

    expect(result.completedPercentage.total).toBe('100.00%')
    expect(result.solvedCount.total).toBe(2000)
  })

  it('should return recent submission list', async () => {
    const result = await LeetcodeProfile()

    expect(result.recentSubmissionList).toEqual([
      { title: 'Two Sum', status: 'Accepted', timestamp: '1234567890' }
    ])
  })

  it('should return matched user data', async () => {
    const result = await LeetcodeProfile()

    expect(result.matchedUser).toEqual(mockLeetCodeData.matchedUser)
  })

  it('should handle API errors gracefully', async () => {
    mockLeetCode.user.mockRejectedValue(new Error('API Error'))

    await expect(LeetcodeProfile()).rejects.toThrow('API Error')
  })

  it('should call LeetCode API with correct username', async () => {
    await LeetcodeProfile()

    expect(mockLeetCode.user).toHaveBeenCalledWith('DrInfinite')
  })
})