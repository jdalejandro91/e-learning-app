import * as fs from 'fs';
import * as path from 'path';

const directory = 'src/slides';

const files = fs.readdirSync(directory);

for (const filename of files) {
    if (!filename.endsWith('.tsx')) continue;
    
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    let changed = false;
    
    // Update 74% to 68%
    if (content.includes('md:w-[74%]')) {
        content = content.replace(/md:w-\[74%\]/g, 'md:w-[68%]');
        changed = true;
    }
    
    // Update 24% to 30%
    if (content.includes('md:w-[24%]')) {
        content = content.replace(/md:w-\[24%\]/g, 'md:w-[30%]');
        changed = true;
    }
    
    if (changed) {
        console.log(`Updated proportions in ${filename}`);
        fs.writeFileSync(filepath, content, 'utf-8');
    }
}
