# AI Image Generator

A modern, responsive web application that generates images using the Flux-Dev AI model. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 AI-powered image generation
- 🎯 Simple, intuitive user interface
- 📱 Fully responsive design
- ⚡ Real-time image generation
- 🔄 Loading states and error handling
- 🎭 Beautiful dark theme

## Environment Setup

1. Create a `.env` file in the root directory with the following variables:
```env
NEXT_PUBLIC_API_KEY="your-api-key-here"
NEXT_PUBLIC_BASE_URL="your-base-url-here"
NEXT_PUBLIC_MODEL="your-model-here"
```

2. Replace the placeholder values with your actual API credentials.

## Project Structure

```
ai-image-gen/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate/
│   │   │       └── route.ts    # API endpoint for image generation
│   │   └── page.tsx            # Main application page
│   └── lib/
│       └── api-config.ts       # API configuration and credentials
├── next.config.js              # Next.js configuration
└── package.json                # Project dependencies
```

## Technology Stack

- **Frontend Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **API Integration**: OpenAI API client
- **Image Generation**: Flux-Dev AI Model
- **Deployment**: Ready for Vercel deployment

## Implementation Details

### API Configuration (`src/lib/api-config.ts`)
- Stores API credentials and configuration
- Manages model selection and base URL
- Keeps sensitive information organized

### API Route (`src/app/api/generate/route.ts`)
- Handles POST requests for image generation
- Integrates with the Flux-Dev model
- Implements error handling and response formatting
- Uses OpenAI client for API communication

### Main Page (`src/app/page.tsx`)
- Implements a responsive user interface
- Features a clean, modern design
- Includes:
  - Input field for prompts
  - Generate button with loading state
  - Error display
  - Image display area
- Uses Next.js Image component for optimized image loading

### Next.js Configuration (`next.config.js`)
- Configures allowed image domains
- Enables image optimization
- Sets up remote patterns for external images

## How It Works

1. **User Input**:
   - Enter an image description in the input field
   - Press Enter or click "Generate"

2. **Image Generation**:
   - Frontend sends prompt to `/api/generate` endpoint
   - API connects to Flux-Dev model
   - Request processed with error handling

3. **Display**:
   - Generated image displayed in responsive container
   - Loading states shown during generation
   - Errors displayed if generation fails

## API Details

The application uses the Flux-Dev model with the following configuration:
- Base URL: https://api.ddc.xiolabs.xyz/v1
- Model: flux-dev
- Image Size: 1024x1024

## Styling

- Dark theme with gradient background
- Card-based layout with shadows
- Responsive design breakpoints
- Interactive elements with hover states
- Loading and error states styled for visibility

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter a descriptive prompt (e.g., "A colorful sunset over a mountain range")
2. Click "Generate" or press Enter
3. Wait for the image to be generated
4. View the generated image in the display area

## Error Handling

The application handles various error cases:
- Empty prompts
- API failures
- Network issues
- Invalid responses

Each error is displayed with a user-friendly message in a red alert box.

## Performance Considerations

- Optimized image loading with Next.js Image component
- Responsive design for all screen sizes
- Efficient state management
- Proper error boundaries
- Loading states for better UX
