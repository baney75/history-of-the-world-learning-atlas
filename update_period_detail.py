import re

with open('src/components/PeriodDetail.tsx', 'r') as f:
    content = f.read()

# Replace `object-cover sm:object-center` with proper alignment.
content = re.sub(
    r'className="w-full h-full object-cover sm:object-center opacity-\[0\.85\] dark:opacity-\[0\.65\]"',
    r'className="w-full h-full object-cover object-[center_20%] opacity-[0.85] dark:opacity-[0.65]"',
    content
)

with open('src/components/PeriodDetail.tsx', 'w') as f:
    f.write(content)
