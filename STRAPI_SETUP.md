# Strapi Integration Setup

This portfolio is now configured to fetch data from a local Strapi instance. Follow these steps to set up the connection:

## 1. Environment Configuration

Create a `.env.local` file in your project root with the following content:

```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# Optional: Custom revalidation time in seconds (default: 60)
NEXT_PUBLIC_REVALIDATE_TIME=60
```

## 2. Strapi Schema Requirements

Your Strapi content type should have the following structure:

### Home Page Content Type
- **Hero_Section** (Component)
  - Order (Number)
  - Name (Text)
  - Phrase (Text)
  - Keyword (JSON)
    - technologies (Array of Text)
    - creative (Array of Text)
  - Personal_Bio (Rich Text)
  - Professional_Bio (Rich Text)
  - Personal_Bio_Title (Text)
  - Professional_Bio_Title (Text)
  - Background (Media - Image)

- **Skill_Section** (Component)
  - Order (Number)
  - Title (Text)
  - Sub (Rich Text)
  - Skills (Component - repeatable)
    - Name (Text)
    - Icon (Component)
      - Name (Text)
      - SVG (Media - Image)

- **Project_Section** (Component)
  - Order (Number)
  - Title (Text)
  - Description (Rich Text)
  - Projects (Component - repeatable)
    - name (Text)
    - description (Text)
    - image (Media - Image)
    - links (JSON - Array of objects with type, url, label)

- **Certificate_Section** (Component)
  - Order (Number)
  - Title (Text)
  - Description (Rich Text)
  - Certificates (Component - repeatable)
    - name (Text)
    - issuer (Text)
    - dateReceived (Date)
    - expirationDate (Date, optional)
    - image (Media - Image)

- **Social_Section** (Component)
  - Socials (Component - repeatable)
    - Order (Number)
    - Name (Text)
    - Link (Text)
    - Icon (Component)
      - Name (Text)
      - SVG (Media - Image)

- **NavBar_Section** (Component)
  - Order (Number)
  - Logo (Media - Image)
  - Links (Component - repeatable)
    - id (Number)
    - name (Text)
    - target (Text) - section ID to scroll to
    - order (Number)
  - CTAButton (Component)
    - id (Number)
    - text (Text)
    - url (Text)
    - order (Number)

## 3. API Endpoints

The portfolio will fetch data from:

**Home Page Data:**
```
GET http://localhost:1337/api/home-page?populate=all
```

**NavBar Data:**
```
GET http://localhost:1337/api/navbar
```

## 4. Features

### Server-Side Rendering
- Data is fetched on the server side for optimal SEO
- Automatic revalidation every 60 seconds for fresh content
- Proper error handling and fallbacks

### Dynamic Section Rendering
- Sections are rendered based on the `Order` field from Strapi
- Missing sections are gracefully handled
- Responsive loading states with animated skeletons

### Sticky Navigation Bar
- Fixed position navigation with smooth scroll to sections
- Dynamic text color based on current section (light/dark)
- Translucent background with backdrop blur
- Responsive design with mobile menu support
- CTA button for external links (blog, contact, etc.)

### Performance Optimizations
- Data is cached and revalidated
- Suspense boundaries for progressive loading
- Motion animations for smooth transitions

## 5. Troubleshooting

### Strapi Not Available
- Ensure Strapi is running on `http://localhost:1337`
- Check that the content type is published
- Verify the API endpoint returns data

### Missing Sections
- Ensure all required fields are filled in Strapi
- Check that the `Order` field is set for each section
- Verify media files are uploaded and published

### Build Errors
- Check that all environment variables are set
- Ensure Strapi is accessible during build time
- Verify TypeScript types match your Strapi schema

## 6. Development

### Local Development
1. Start your Strapi instance: `npm run develop` (in Strapi directory)
2. Start the portfolio: `npm run dev`
3. Make changes in Strapi and see them reflected in real-time

### Production
1. Set `NEXT_PUBLIC_STRAPI_URL` to your production Strapi URL
2. Build and deploy: `npm run build && npm start`
3. Data will be revalidated based on the `revalidate` setting

## 7. Customization

### Revalidation Time
To change how often data is refreshed, update the `revalidate` export in `src/app/page.tsx`:

```typescript
export const revalidate = 300; // 5 minutes
```

### Error Handling
Customize error states by modifying the `ErrorSkeleton` component in `src/components/ui/loading-skeleton.tsx`.

### Loading States
Adjust skeleton animations by modifying the motion properties in the loading components.
