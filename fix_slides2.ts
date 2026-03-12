import * as fs from 'fs';
import * as path from 'path';

const directory = 'src/slides';

const files = fs.readdirSync(directory);

for (const filename of files) {
    if (!filename.endsWith('.tsx')) continue;
    
    const filepath = path.join(directory, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    // Pattern to match the specific slide structure
    // We restrict the middle part to not contain </SlideLayout> to prevent matching across slides
    const pattern = /(<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">)\s*(<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">)((?:(?!<\/SlideLayout>)[\s\S])*?)(<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">)\s*(<h3 className="text-xl font-bold text-[^"]+ mb-4">Explicación de [^<]+<\/h3>)\s*(<ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">)/g;
    
    let count = 0;
    const newContent = content.replace(pattern, (match, p1, p2, p3, p4, p5, p6) => {
        count++;
        const newGridDiv = '<div className="flex flex-col md:flex-row gap-[2%] h-full">';
        const newCol1Div = '<div className="w-full md:w-[74%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">';
        const newCol2Div = '<div className="w-full md:w-[24%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">';
        const newUl = p6.replace('text-sm', 'text-xs');
        
        return `${newGridDiv}\n      ${newCol1Div}${p3}${newCol2Div}\n        ${p5}\n        ${newUl}`;
    });
    
    if (count > 0) {
        console.log(`Updated ${count} slides in ${filename}`);
        fs.writeFileSync(filepath, newContent, 'utf-8');
    }
}
