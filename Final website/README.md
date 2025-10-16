# Watchword Pictures Website

A modern, dark-mode website for Watchword Pictures featuring sports, wildlife, and lifestyle content.

## Files Included

- **index.html** - Main HTML structure with all content sections
- **styles.css** - Complete dark mode styling inspired by Words + Pictures
- **script.js** - Interactive features including smooth scrolling, mobile menu, and animations
- **logo.png** - Watchword Pictures logo

## Website Sections

1. **Navigation** - Fixed header with logo and menu links
2. **Hero Section** - Full-screen landing with animated title and call-to-action buttons
3. **Intro** - Company overview with mission statement
4. **About Us** - Company story, approach, and team members (Grant Guffin & Jason Fisher)
5. **Projects** - Showcasing both in-development and completed projects
6. **WildVeld TV** - Dedicated section for the African content platform
7. **Contact** - Contact information and form
8. **Footer** - Copyright and tagline

## Features

### Design
- Dark mode color scheme (black/dark gray backgrounds with white/light gray text)
- Accent color: Blue (#4a7ba7) inspired by the Watchword brand
- Modern, clean typography
- Responsive design for mobile, tablet, and desktop
- Smooth animations and transitions

### Interactive Elements
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Active navigation link highlighting
- Hover effects on cards and buttons
- Fade-in animations on scroll
- Parallax effect on hero section
- Contact form with validation

## To Use

Simply open `index.html` in a web browser to view the website. All styling and functionality is self-contained.

## Customization

### Colors
Edit CSS variables in `styles.css` (lines 14-22):
```css
--color-background: #0a0a0a;
--color-accent: #4a7ba7;
/* etc. */
```

### Content
All content can be edited directly in `index.html`. Each section is clearly labeled with comments.

### Form Functionality
The contact form currently shows an alert on submission. To connect it to a backend service:
1. Edit the form submission handler in `script.js` (line 71)
2. Add your API endpoint or email service integration

## Browser Support

Works on all modern browsers including:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
