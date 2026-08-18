import re

with open('f:/PROJECT-SOFTWARE/OanNe/scratch_full_community.js', 'r', encoding='utf-8') as f:
    data = f.read()

m = data.find('1030:73731')
if m != -1:
    snippet = data[max(0, m-200):min(len(data), m+15000)]
    with open('f:/PROJECT-SOFTWARE/OanNe/scratch/sub_node_dump.txt', 'w', encoding='utf-8') as out:
        out.write(snippet)
    print("Wrote sub_node_dump.txt, length:", len(snippet))
else:
    print("Not found")
