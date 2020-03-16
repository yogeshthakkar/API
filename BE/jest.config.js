module.exports = {
    "preset": "@shelf/jest-mongodb",
    transform: {"^.+\\.tsx?$": "ts-jest"},
    testRegex: '(/__test__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};