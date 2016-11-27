# Simple node wrapper for IntelliJ Idea 15, typescript, mocha.

This module helps debugging typescript test in IntelliJ Idea 15 with NodeJS plugin and mocha framework.
NodeJS plugin provides run/debug command for *.js files, and *.js and *.ts files under /test folder.
Default Mocha run configuration cannot execute typescript test. This module is a simple node wrapper to enable Mocha execute typescript test. 
If typescript source map is enabled, IntelliJ Idea 15 stops on breakpoint where is set on typescript source. 
You don't need this module in IntelliJ Idea 2016. IntelliJ 2016 supports typescript debugging very well.

# Quick Start

Install intellij-ts-mocha globally.
```
npm install https://github.com/bjstar/intellij-ts-mocha.git -g
```

Edit Intellij Idea 15 Run Configuration : Menu => 'Run -> Edit Configuration -> Defaults -> Mocha'

Replace 'Node Interpreter' property value 
```
/usr/local/bin/node => /usr/local/bin/intellij-ts-mocha
```

# Usage

Set breakpoint in your typescript test code and Debug it in your IntelliJ IDEA. IntelliJ will stop at the breakpoint.

# Note

This module does not compile typescript. 
Let IntelliJ compile in advance by enabling typescript compile in IntelliJ ( Preferences -> Language and Framework -> Typescript ). 

This moudle assumes *.ts and its compiled *.js, *.js.map file locates on same directory. 
 