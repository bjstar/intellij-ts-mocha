var replaceCommand = require('../lib/intellij-ts-mocha').replaceCommand;

describe('intellij-ts-mocha', function() {
    describe('#replaceCommand', function() {
        it('should remove intellij-ts-mocha and replace the last ts file extention as js.', function() {
            var debugCmd = [ '/usr/local/bin/node',
                '/Users/reuben/IdeaProjects/intellij-ts-mocha/bin/intellij-ts-mocha',
                '--debug-brk=63392',
                '/Users/reuben/IdeaProjects/intellij-ts-mocha/node_modules/mocha/bin/_mocha',
                '--timeout',
                '259200000',
                '--ui',
                'bdd',
                '--reporter',
                '/Users/reuben/Library/Application Support/IntelliJIdea15/NodeJS/js/mocha-intellij/lib/mochaIntellijReporter.js',
                '/Users/reuben/IdeaProjects/typescript-learning/test/calculator.test.ts',
                '--grep',
                'Calculator ' ];
            var expectedCmd = [ '/usr/local/bin/node',
                '--debug-brk=63392',
                '/Users/reuben/IdeaProjects/intellij-ts-mocha/node_modules/mocha/bin/_mocha',
                '--timeout',
                '259200000',
                '--ui',
                'bdd',
                '--reporter',
                '\"/Users/reuben/Library/Application Support/IntelliJIdea15/NodeJS/js/mocha-intellij/lib/mochaIntellijReporter.js\"',
                '/Users/reuben/IdeaProjects/typescript-learning/test/calculator.test.js',
                '--grep',
                '\"Calculator \"' ];
            var actualCmd = replaceCommand(debugCmd);

            if (expectedCmd.join(" ") !== actualCmd.join(" ")) {
                throw new Error(`Error!! \nexpected = ${expectedCmd}\nactual = ${actualCmd}`);
            }
        })
    });
})

