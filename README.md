# Josef Ameur Portfolio Website

A modern, responsive portfolio website showcasing professional work, projects, and skills.

## Overview

This repository contains the source code for my personal portfolio website. The site is designed to present my professional background, showcase projects, and provide contact information for potential collaborators or employers. Built with a focus on clean design and responsive layout, the site offers an optimal viewing experience across all devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Optimized for all screen sizes from mobile to large desktop displays
- **Interactive Elements**: Smooth animations and transitions enhance user experience
- **Project Showcase**: Detailed project presentations with descriptions and visuals
- **Contact Form**: Direct communication channel for inquiries
- **Light/Dark Mode**: Toggle between color schemes for comfortable viewing
- **Accessibility**: Compliant with WCAG guidelines for inclusive user experience
- **Fast Loading**: Optimized assets and lazy loading for quick page loads
- **SEO Optimized**: Structured for search engine discoverability

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Advanced styling with custom properties and Flexbox/Grid layouts
- **JavaScript**: Interactive elements and dynamic content
- **CSS Animations**: Subtle motion design enhancements
- **Responsive Images**: Optimized for various device resolutions
- **SVG Graphics**: Scalable vector graphics for icons and illustrations
- **Web Fonts**: Typography using Google Fonts
- **Analytics**: Website usage tracking (optional)

## Project Structure

```
josef-portfolio/
├── index.html              # Home page
├── about.html              # About page with bio
├── contact.html            # Contact information and form
├── css/                    # Stylesheets
│   ├── style.css           # Main stylesheet
│   ├── responsive.css      # Media queries for responsiveness
│   └── animations.css      # CSS animations
├── js/                     # JavaScript files
│   ├── main.js             # Main functionality
│   ├── animations.js       # Animation control
│   └── form-handler.js     # Contact form processing
├── img/                    # Image assets
│   ├── projects/           # Project screenshots
│   ├── icons/              # UI icons
│   └── profile/            # Profile photos
├── file/                   # Downloadable files (resume, etc.)
└── snippets/               # Code snippets for display
```

## Local Development

To set up this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ambrosia-fish/josef-portfolio.git
   cd josef-portfolio
   ```

2. Open in your preferred code editor.

3. For local development with a simple server:
   - Using Python:
     ```bash
     python -m http.server
     ```
   - Using Node.js:
     ```bash
     npx serve
     ```

4. View the site at `http://localhost:8000` or the port specified by your server.

## Deployment

The website is deployed on GitHub Pages and can be accessed at: 
[https://ambrosia-fish.github.io/josef-portfolio/](https://ambrosia-fish.github.io/josef-portfolio/)

### Deployment Workflow

1. Make changes to the main branch
2. Changes are automatically deployed to GitHub Pages via GitHub Actions
3. The site is served from the `gh-pages` branch

For manual deployment:
- Push changes to the `gh-pages` branch
- GitHub Pages will automatically update the live site

## Browser Support

The website is optimized for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Project Organization

This repository uses several branches for different aspects of development:

- `main`: Production-ready code
- `projects-redesign`: Updates to the projects section
- `fix-mobile-menu-bg`: Mobile navigation improvements
- `phone-view`: Mobile-specific optimizations
- `single-view`: Single-page layout variation

## License

This project is available as open source under the terms of the MIT License. You are welcome to use the code as inspiration for your own portfolio, but please replace all personal information and project details with your own.

## Contact

- **Email**: josef@feztech.io
- **LinkedIn**: [linkedin.com/in/josefameur](https://linkedin.com/in/josefameur)
- **GitHub**: [github.com/ambrosia-fish](https://github.com/ambrosia-fish)

Feel free to reach out with any questions or suggestions!
