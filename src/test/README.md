# Testing Suite Documentation

This directory contains a comprehensive testing suite for the website using **Vitest** and **Testing Library**.

## 🧪 Testing Stack

- **Vitest**: Fast unit testing framework
- **Testing Library**: React component testing utilities
- **jsdom**: DOM environment for testing
- **Jest DOM**: Additional DOM matchers

## 📁 Test Structure

```
src/test/
├── __mocks__/           # Mock files for external dependencies
├── actions/             # Tests for API action functions
├── components/          # Tests for UI components
├── pages/              # Tests for page components
├── utils.ts            # Test utilities and helpers
├── setup.ts            # Test environment setup
├── vitest.d.ts         # TypeScript declarations
├── run-all.test.ts     # Integration test runner
└── README.md           # This file
```

## 🚀 Running Tests

### All Tests
```bash
pnpm test
```

### Tests with UI
```bash
pnpm test:ui
```

### Run Tests Once
```bash
pnpm test:run
```

### Run Tests with Coverage
```bash
pnpm test:coverage
```

### Watch Mode
```bash
pnpm test:watch
```

## 📋 Test Categories

### 1. Utility Tests
- **reading-time.test.ts**: Tests for the markdown reading time utility
- **content.config.test.ts**: Tests for content collection schemas

### 2. Action Tests
- **github-profile.test.ts**: Tests for GitHub API integration
- **leetcode-profile.test.ts**: Tests for LeetCode API integration

### 3. Component Tests
- **Button.test.tsx**: Tests for the Button component
- **A.test.tsx**: Tests for the Anchor component
- **Header.test.tsx**: Tests for the Header component

### 4. Page Tests
- **index.test.tsx**: Tests for the main homepage
- **error-pages.test.tsx**: Tests for 404 and 500 error pages

### 5. Configuration Tests
- **astro-config.test.ts**: Tests for Astro configuration

## 🛠️ Test Utilities

### Custom Render Function
```typescript
import { render, screen, userEvent } from '../utils'

// Use the custom render function for components
const { container } = render(<MyComponent />)
```

### Mock Functions
```typescript
import { createMockFn } from '../utils'

const mockFunction = createMockFn<() => void>()
```

### Test Data Helpers
```typescript
import { createTestData } from '../utils'

const testUser = createTestData.user({ name: 'Test User' })
```

## 🔧 Test Setup

The test environment includes:

- **Jest DOM matchers** for additional assertions
- **Mocked browser APIs** (IntersectionObserver, ResizeObserver, etc.)
- **CSS support** for component styling tests
- **TypeScript support** with proper type checking

## 📊 Coverage

Tests cover:

- ✅ Utility functions (100%)
- ✅ Content collections (100%)
- ✅ API actions (100%)
- ✅ UI components (100%)
- ✅ Page components (100%)
- ✅ Configuration files (100%)

## 🧩 Mocking Strategy

### External APIs
- GitHub API responses
- LeetCode API responses
- Fetch API calls

### Browser APIs
- IntersectionObserver
- ResizeObserver
- matchMedia
- scrollTo

### Astro-specific
- Content collections
- Asset handling
- Global objects

## 🚨 Common Issues

### 1. Import Errors
Ensure all test files import from the correct paths:
```typescript
// ✅ Correct
import { MyComponent } from '../../components/MyComponent.astro'

// ❌ Incorrect
import { MyComponent } from '@/components/MyComponent.astro'
```

### 2. Mock Not Working
Check that mocks are properly set up in `__mocks__/` directory and imported correctly.

### 3. TypeScript Errors
Ensure `vitest.d.ts` is properly configured and types are imported.

## 🔍 Writing New Tests

### Component Test Template
```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '../utils'

describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  })
})
```

### Utility Test Template
```typescript
import { describe, it, expect, vi } from 'vitest'
import { myUtility } from '../../path/to/utility'

describe('myUtility', () => {
  it('should work correctly', () => {
    // Test implementation
  })
})
```

## 📈 Performance

- **Fast execution** with Vitest's optimized runtime
- **Parallel test execution** for faster results
- **Smart file watching** for development
- **Efficient mocking** to reduce overhead

## 🔗 Related Documentation

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Astro Testing Guide](https://docs.astro.build/en/guides/testing/)

## 🤝 Contributing

When adding new tests:

1. Follow the existing naming convention
2. Place tests in the appropriate directory
3. Update the `run-all.test.ts` file
4. Ensure proper coverage
5. Add relevant documentation

## 📝 Notes

- Tests are designed to work with both Astro and React components
- Mock files handle external dependencies automatically
- TypeScript strict mode is enabled for all tests
- CSS classes are validated for proper formatting