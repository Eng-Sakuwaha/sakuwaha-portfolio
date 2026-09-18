# Design Images

Put your graphic design images here. Vite serves them at `/assets/designs/...`

## How to add a design

1. Save your image as `.jpg` or `.png` (lowercase extension)
2. Recommended size: **1200×900px** (4:3 ratio)
3. Drop it into this folder, e.g. `public/assets/designs/design-1.jpg`
4. Reference it in `src/data/portfolioData.js`:
   ```js
   {
     id: 'design-1',
     title: 'Brand Logo Concept',
     category: 'Logos',
     image: '/assets/designs/design-1.jpg',
     description: 'Minimalist logo mark designed for a client brand identity.',
     tools: ['Adobe Illustrator', 'Photoshop'],
   }