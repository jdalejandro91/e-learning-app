import * as fs from 'fs';
import * as path from 'path';

const directory = 'src/slides';

const files = fs.readdirSync(directory);

for (const filename of files) {
    if (!filename.endsWith('.tsx')) continue;
    
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    let changed = false;
    
    if (content.includes('<div className="flex flex-col md:flex-row gap-[2%] h-full">')) {
        content = content.replace(/<div className="flex flex-col md:flex-row gap-\[2%\] h-full">/g, '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">');
        changed = true;
    }
    
    if (content.includes('<div className="w-full md:w-[74%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">')) {
        content = content.replace(/<div className="w-full md:w-\[74%\] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">/g, '<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">');
        changed = true;
    }
    
    if (content.includes('<div className="w-full md:w-[24%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">')) {
        content = content.replace(/<div className="w-full md:w-\[24%\] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">/g, '<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">');
        changed = true;
    }
    
    if (content.includes('<ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">')) {
        content = content.replace(/<ul className="space-y-4 text-xs text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">/g, '<ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">');
        changed = true;
    }
    
    if (changed) {
        console.log(`Reverted ${filename}`);
        fs.writeFileSync(filepath, content, 'utf-8');
    }
}
