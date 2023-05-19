#!/usr/bin/env node

const execSync = require('child_process').execSync;
const path = require('path');

function main() {
  let projectName = process.argv[2];
  if (!projectName) {
    console.log('Please specify project name! Example: npx create-angular-clarity-app my-app');
    process.exit(1);
  }

  console.log(`Creating new project ${projectName}...`);

  // Clone Git repo
  const projectDir = path.join(process.cwd(), projectName);
  execSync(
    `git clone https://github.com/extrawest/ng-clarity-starter.git ${projectDir} --progress`,
    { stdio: 'inherit' }
  );

  // Run first-config.js
  execSync(`node ${path.join(projectDir, 'first-config.js')}`, { stdio: 'inherit' });
  process.exit(0);
}

if (require.main === module) {
  main();
}