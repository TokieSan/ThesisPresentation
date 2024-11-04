# Paranoid Android Presentation

An interactive presentation component built with Next.js and React, featuring a dynamic SVG logo that serves as a navigation interface. The presentation includes multiple sections, each with detailed content and visual elements, and comes with a web-based editor for easy content management.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
  - [Using the Editor](#using-the-editor)
  - [Manual Content Editing](#manual-content-editing)
- [Component Documentation](#component-documentation)
- [Customization](#customization)
- [Deployment](#deployment)
- [Development Notes](#development-notes)

## Getting Started

### Prerequisites

- Node.js 18.x
- npm or yarn, etc

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd paranoid-android
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
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

### Editor Access

Access the content editor at [http://localhost:3000/editor](http://localhost:3000/editor)

## Project Structure

```
├── app/
│   ├── page.tsx                 # Main presentation page
│   ├── editor/
│   │   └── page.tsx            # Editor page
│   ├── ParanoidAndroidPresentation.tsx
│   └── api/
│       └── sections/
│           └── route.ts        # Sections API
├── components/
│   ├── SectionEditor.tsx
│   └── ui/                     # UI components
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   └── utils.ts                # Utility functions
└── public/
    └── images/                 # Image assets
```

## Content Management

### Using the Editor

The presentation includes a web-based editor accessible at `/editor`. Features include:

1. **Section Management**
   - Add new sections
   - Remove existing sections
   - Reorder sections using drag-and-drop
   - Edit section titles

2. **Content Editing**
   - Add/remove content blocks
   - Support for text and images
   - Rich text formatting
   - Image URL management

3. **Preview**
   - Real-time preview of changes
   - Mobile-responsive preview

4. **Persistence**
   - Changes automatically saved to localStorage
   - Backup/restore functionality

### Manual Content Editing

Content can also be managed by editing `sections.js`:

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
            content: "Your text content"
          },
          {
            type: "image",
            content: "/images/example.jpg",
            alt: "Image description"
          }
        ]
      }
    ]
  }
}
```

## Component Documentation

### Main Presentation Component

The `ParanoidAndroidPresentation` component features:
- Interactive SVG navigation
- Section-based content organization
- Smooth transitions
- Progress tracking
- Responsive design

### Section Editor Component

The `SectionEditor` component provides:
- Full CRUD operations for sections
- Rich content editing
- Image management
- Real-time preview
- Persistent storage

## Customization

### Styling

The project uses Tailwind CSS for styling. Key customization points:

1. **Colors**
   - Modify the color scheme in `tailwind.config.js`
   - Update the `getSectionColor` function in the presentation component

2. **Layout**
   - Adjust container widths in the component classes
   - Modify card layouts and spacing

3. **Typography**
   - Customize fonts through Tailwind configuration
   - Adjust text sizes and styles in component classes

### Components

1. **SVG Logo**
   - Modify paths in the presentation component
   - Adjust animations and transitions
   - Customize interaction behaviors

2. **Content Display**
   - Customize card layouts
   - Modify content block styling
   - Adjust image display properties

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Development Notes

### Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

### Required Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-toast": "^1.1.5",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.454.0",
    "next": "^14.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "recharts": "^2.13.3",
    "tailwind-merge": "^2.5.4",
    "tailwindcss": "^3.4.14",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Learn More

To learn more about the technologies used:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)

## License

MIT
