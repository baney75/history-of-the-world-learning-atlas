import re

with open('src/components/TimelineCard.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'import { BookOpen, Calendar, Users } from "lucide-react";',
    'import { BookOpen, Calendar, Users } from "lucide-react";\nimport { RichText } from "./RichText";'
)

# Use regex to find the description paragraph block to replace it robustly
pattern = r'<p\s+className=\{`text-sm text-muted-foreground line-clamp-3 leading-relaxed \$\{isFeatured \? "text-base" : ""\}`\}\s*>\s*\{period\.description\}\s*<\/p>'
replacement = '<p className={`text-sm text-muted-foreground line-clamp-3 leading-relaxed ${isFeatured ? "text-base" : ""}`}><RichText content={period.description} /></p>'

content = re.sub(pattern, replacement, content)

with open('src/components/TimelineCard.tsx', 'w') as f:
    f.write(content)

with open('src/components/PeriodDetail.tsx', 'r') as f:
    detail_content = f.read()

detail_content = detail_content.replace(
    'import { motion, type Variants } from "motion/react";',
    'import { motion, type Variants } from "motion/react";\nimport { RichText } from "./RichText";'
)

detail_content = detail_content.replace(
    '<p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 max-w-4xl text-balance">',
    '<p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 max-w-4xl text-balance"><RichText content='
)

detail_content = detail_content.replace(
    '{period.description}\n        </p>',
    '{period.description} /></p>'
)

with open('src/components/PeriodDetail.tsx', 'w') as f:
    f.write(detail_content)
