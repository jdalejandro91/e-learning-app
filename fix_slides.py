import os
import re

directory = 'src/slides'

for filename in os.listdir(directory):
    if not filename.endswith('.tsx'):
        continue
        
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Pattern to match the specific slide structure
    pattern = r'(<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">)\s*(<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">)(.*?)(<div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">)\s*(<h3 className="text-xl font-bold text-[^"]+ mb-4">Explicación de Librerías y Métodos</h3>)\s*(<ul className="space-y-4 text-sm text-neutral-300 overflow-y-auto pr-2 custom-scrollbar">)'
    
    def replacer(match):
        col1_content = match.group(3)
        h3 = match.group(5)
        ul = match.group(6)
        
        new_grid_div = '<div className="flex flex-col md:flex-row gap-[2%] h-full">'
        new_col1_div = '<div className="w-full md:w-[74%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">'
        new_col2_div = '<div className="w-full md:w-[24%] bg-neutral-900 p-6 rounded-2xl border border-neutral-800 flex flex-col">'
        new_ul = ul.replace('text-sm', 'text-xs')
        
        return f'{new_grid_div}\n      {new_col1_div}{col1_content}{new_col2_div}\n        {h3}\n        {new_ul}'

    new_content, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    
    if count > 0:
        print(f"Updated {count} slides in {filename}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
