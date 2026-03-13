import re

with open('src/components/TimelineCard.tsx', 'r') as f:
    content = f.read()

# Replace `object-cover` without specific position in `TimelineCard.tsx` with `object-cover object-[center_top]`
content = re.sub(
    r'className="w-full h-full object-cover transition-transform',
    r'className="w-full h-full object-cover object-[center_20%] transition-transform',
    content
)

with open('src/components/TimelineCard.tsx', 'w') as f:
    f.write(content)
