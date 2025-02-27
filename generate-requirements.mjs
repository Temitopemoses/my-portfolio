import { readFileSync, writeFileSync } from 'fs';

// Read the dependencies.json file
const data = readFileSync('dependencies.json', 'utf8');
const json = JSON.parse(data);

// Extract dependencies
const dependencies = json.dependencies;

// Create the requirements.txt content
let requirements = '';
for (const [key, value] of Object.entries(dependencies)) {
  requirements += `${key}@${value.version}\n`;
}

// Write the requirements.txt file
writeFileSync('requirements.txt', requirements);

console.log('requirements.txt has been generated.');