# 3D_shirt_design_tool

# AI-Powered 3D Customizer Tool

# Overview
The AI-Powered 3D Customizer is a React application that allows users to apply and test their shirt designs on a 3D model. Users can customize the shirt's color, apply custom logos or textures, and even generate AI-powered logos or textures using a custom prompt.

The project uses Three.js, React, Framer Motion, Valtio for state management, and Cloudinary for image processing on the backend. Users can create their unique and exclusive shirts with this 3D customization tool, unleashing their imagination to define their style.

# Features
1. 3D Shirt Customization: Users can interact with a 3D shirt model, changing its color and applying custom logos or textures.
2. Logo and Texture Upload: Users can upload their own custom logo or texture files to apply them to the shirt.
3. AI-Generated Logos and Textures: Users can provide a custom prompt to the AI, which will generate logos or textures based on the prompt.
4. Editor Tabs: The interface includes editor tabs for color picker, file picker (for logo and texture uploads), and AI picker (for AI-generated logos/textures).
5. Filter Tabs: Filter tabs allow users to toggle between logo textures and stylish shirt textures.
6. Responsive Design: The application is designed to work smoothly on various devices and screen sizes.


# Front-end Dependencies

"@react-three/drei": "^9.79.2"
"@react-three/fiber": "^8.13.5"
"framer-motion": "^10.12.21"
"maath": "^0.7.0"
"react": "^18.2.0"
"react-color": "^2.19.3"
"react-dom": "^18.2.0"
"react-three-fiber": "^6.0.13"
"three": "^0.154.0"
"valtio": "^1.10.7"

# Back-end Dependencies

"cloudinary": "^1.38.0"
"cors": "^2.8.5"
"dotenv": "^16.3.1"
"express": "^4.18.2"
"mongoose": "^7.4.0"
"nodemon": "^3.0.1"
"openai": "^3.3.0"

# Installation and Setup

1. Clone the repository.
2. Install the front-end dependencies:
   code: npm install

Install the backend dependencies:
 code: 1. cd backend
       2. npm install


Create a .env file in the backend directory and add your OpenAI API credentials:

API_KEY=your_api_key
API_SECRET=your_api_secret

# Usage

1. Start the front-end development server:
code: npm run dev

2. Start the back-end server:
code: 1. cd backend
      2. npm start
