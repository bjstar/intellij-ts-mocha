# Simple node wrapper for IntelliJ Idea 15, typescript, mocha.

It works on IntelliJ Idea 15 / Node.js plugin. It helps you debug typescript in Intellij Idea 15.

# How to install

Install intellij-ts-mocha globally.
```
npm install https://github.com/bjstar/intellij-ts-mocha.git -g
```

Edit Intellij Idea 15 Run Configuration.

move to 'Menu Run -> Edit Configuration -> Defaults -> Mocha'

replace 'Node Interpreter' into 'intellij-ts-mocha'

```
/usr/local/bin/node => /usr/local/bin/intellij-ts-mocha
```
If intellij-ts-mocha is installed locally, use {installed directoy}/node-modules/intellij-ts-mocha/bin/intellij-ts-mocha.

# How to use

Set breakpoint in your typescript test code, run typescript test in you IntelliJ IDEA.
IntelliJ will stop at the breakpoint.

It does not compile typescript. Usually, IntelliJ IDEA compiles typescript into javascript automatically. 
If there is no compiled javascript file (*.js), mocha will throw errors.

It assumes typescript test file and its compiled javascript file locates on same directory.
 