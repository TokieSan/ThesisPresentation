# Paranoid Android Presentation

An interactive presentation component built with Next.js and React, featuring a dynamic SVG logo that serves as a navigation interface. The presentation includes multiple sections, each with detailed content and visual elements.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the presentation by modifying:
- `app/components/sections.js` for content
- `app/components/ParanoidAndroidPresentation.tsx` for the presentation logic
- `app/page.tsx` for the page layout

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Presentation Structure

The presentation is split into two main files:
- `sections.js`: Contains all the content and section definitions
- `ParanoidAndroidPresentation.tsx`: The main presentation component

### Content Structure in sections.js

Each section follows this structure:

```javascript
{
  sectionKey: {
    title: "Section Title",
    content: [
      {
        title: "Content Block Title",
        details: [
          {
            type: "text",
            content: "Your text content here"
          },
          {
            type: "image",
            content: "/images/your-image.png",
            alt: "Image description"
          }
        ]
      }
    ]
  }
}
```

## Modifying Content

### Adding New Sections

1. Add your section to `sections.js`:

```javascript
// In sections.js
export const sections = {
  // ... existing sections
  newSection: {
    title: "Your New Section",
    content: [
      {
        title: "Your Content Block",
        details: [
          {
            type: "text",
            content: "Your content here"
          }
        ]
      }
    ]
  }
};

// Add to section order
export const sectionOrder = [
  // ... existing sections
  'newSection'
];
```

2. Add the section to the SVG interface in `ParanoidAndroidPresentation.tsx`:
```javascript
<path
  d="M... your SVG path"
  fill={getSectionColor('newSection')}
  className="cursor-pointer transition-all duration-300 hover:brightness-110"
  onClick={() => handleSectionClick('newSection')}
/>
```

### Modifying Existing Sections

To modify an existing section, locate it in `sections.js` and update its content:

```javascript
export const sections = {
  existingSection: {
    title: "Updated Title",
    content: [
      {
        title: "Updated Content Block",
        details: [
          {
            type: "text",
            content: "Your new content"
          }
        ]
      }
    ]
  }
};
```

### Adding Images

1. Place your images in the `/public/images/` directory
2. Add image entries to your section:

```javascript
details: [
  {
    type: "image",
    content: "/images/your-new-image.png",
    alt: "Descriptive alt text"
  }
]
```

Images will automatically fit their container width while maintaining aspect ratio.

### Content Types

Two types of content are supported:
1. Text content:
```javascript
{
  type: "text",
  content: "Your text content here"
}
```

2. Image content:
```javascript
{
  type: "image",
  content: "/path/to/image.png",
  alt: "Image description"
}
```

## Styling

The presentation uses Tailwind CSS for styling. Key classes:

- Container styling: `container mx-auto px-4`
- Card styling: `bg-gray-800 border-none shadow-xl`
- Text colors: `text-emerald-400`, `text-gray-300`
- Hover effects: `hover:brightness-110`, `hover:translate-x-2`

To modify styles:
1. For section colors, update the `getSectionColor` function
2. For layout, modify the container and card classes
3. For animations, update the `slideIn` keyframes in the styled-jsx section

## Requirements

- React 18+
- Next.js 13+
- Tailwind CSS
- @radix-ui/react components
- lucide-react

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Component Structure

The presentation uses several key components:

1. Main SVG Logo Interface
2. Section Navigation
3. Content Display
4. Image Rendering

### Key Features

- Interactive SVG navigation
- Section completion tracking
- Smooth transitions
- Responsive design
- Image support
- Multiple content types per section

## Development

1. Install dependencies:
```bash
npm install
# or
yarn
```

2. Set up your environment:
- Ensure you have Node.js installed
- Install the required dependencies
- Set up your `/public/images/` directory for image assets

3. Start development:
```bash
npm run dev
# or
yarn dev
```

## License

MIT
