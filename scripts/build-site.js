const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public');

const files = [
    'index.html',
    'about.html',
    'experiences.html',
    'pairing.html',
    'wine-101.html',
    'main.js',
    'styles.css',
];
const directories = ['dist', 'resources'];

fs.rmSync(output, { force: true, recursive: true });
fs.mkdirSync(output, { recursive: true });

for (const file of files) {
    fs.copyFileSync(path.join(root, file), path.join(output, file));
}

for (const directory of directories) {
    fs.cpSync(path.join(root, directory), path.join(output, directory), { recursive: true });
}
