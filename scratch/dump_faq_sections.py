import json

steps = [
    ("hero", "C:/Users/My Computer/.gemini/antigravity-ide/brain/21bb113d-ad1e-4fd1-9bd7-fd0f84d9fd09/.system_generated/steps/4797/output.txt"),
    ("questions", "C:/Users/My Computer/.gemini/antigravity-ide/brain/21bb113d-ad1e-4fd1-9bd7-fd0f84d9fd09/.system_generated/steps/4799/output.txt"),
    ("links", "C:/Users/My Computer/.gemini/antigravity-ide/brain/21bb113d-ad1e-4fd1-9bd7-fd0f84d9fd09/.system_generated/steps/4801/output.txt"),
    ("still_help", "C:/Users/My Computer/.gemini/antigravity-ide/brain/21bb113d-ad1e-4fd1-9bd7-fd0f84d9fd09/.system_generated/steps/4803/output.txt"),
    ("ready_contact", "C:/Users/My Computer/.gemini/antigravity-ide/brain/21bb113d-ad1e-4fd1-9bd7-fd0f84d9fd09/.system_generated/steps/4805/output.txt"),
]

for name, path in steps:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        with open(f'f:/PROJECT-SOFTWARE/OanNe/scratch/faq_{name}.txt', 'w', encoding='utf-8') as out:
            out.write(content)
        print(f"Saved faq_{name}.txt ({len(content)} bytes)")
    except Exception as e:
        print(f"Error {name}: {e}")
