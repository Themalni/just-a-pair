module.exports = {
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
      '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,vue}',
      '!src/App.vue',
      '!src/main.js',
      '!src/store/index.js',
      '!src/firebase.js',
      '!src/firebaseAuth.js',
      '!src/services/**',
      '!src/router/**',
      '!src/store/types.js',
      '!src/store/state.js',
      '!src/components/Breadcrumbs.vue'

    ],
    forceCoverageMatch: ['**src/components**'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    snapshotSerializers: [
      'jest-serializer-vue'
    ],
    testMatch: [
      '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ]
  }