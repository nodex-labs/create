#!/usr/bin/env node
const generator = require('../Generator');

async function main() {
  generator.generate();
}

main().catch(console.error);
