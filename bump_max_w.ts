import * as fs from 'fs';
import * as path from 'path';

const directory = 'src/slides';

const files = fs.readdirSync(directory);

for (const filename of files) {
    if (!filename.endsWith('.tsx')) continue;
    
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    let changed = false;
    
    // Bump max-w classes
    if (content.includes('max-w-3xl')) {
        content = content.replace(/max-w-3xl/g, 'max-w-5xl');
        changed = true;
    }
    if (content.includes('max-w-4xl')) {
        content = content.replace(/max-w-4xl/g, 'max-w-6xl');
        changed = true;
    }
    if (content.includes('max-w-5xl')) {
        content = content.replace(/max-w-5xl/g, 'max-w-7xl');
        changed = true;
    }
    
    if (changed) {
        console.log(`Bumped max-w in ${filename}`);
        fs.writeFileSync(filepath, content, 'utf-8');
    }
}
