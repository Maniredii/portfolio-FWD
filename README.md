# Interactive Portfolio Website

A modern, responsive portfolio website with smooth animations and interactive features. Built with HTML5, CSS3, JavaScript, and GSAP for enhanced visual effects.

## Features

### 🎨 Modern Design
- **Gradient Hero Section**: Eye-catching gradient background with floating elements
- **Glassmorphism Effects**: Modern glass-like navigation and card designs
- **Responsive Layout**: Works perfectly on all devices (desktop, tablet, mobile)
- **Clean Typography**: Using Google Fonts (Poppins) for modern readability

### ⚡ Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Project Filtering**: Filter projects by category (Web Apps, Mobile, Design)
- **Skill Progress Bars**: Animated skill level indicators
- **Counter Animation**: Animated statistics counters
- **Contact Form**: Functional contact form with validation

### 🚀 Advanced Animations
- **GSAP Animations**: Professional-grade animations using GSAP library
- **Scroll Triggers**: Elements animate as they come into view
- **Parallax Effects**: Subtle parallax scrolling for depth
- **Hover Effects**: Interactive hover states throughout
- **Loading Animation**: Professional loading screen
- **Navigation Dots**: Side navigation for quick section access

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhanced**: Full-featured desktop experience
- **Cross-Browser**: Compatible with all modern browsers

## Sections

1. **Hero/Home**: Introduction with call-to-action buttons
2. **About Me**: Personal information with animated statistics
3. **Skills**: Technical skills with progress bars and categories
4. **Projects**: Portfolio showcase with filtering capabilities
5. **Contact**: Contact form and social media links

## Technologies Used

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Advanced styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **GSAP**: Professional animation library
- **ScrollTrigger**: Scroll-based animations
- **Font Awesome**: Icon library
- **Google Fonts**: Custom typography

## Quick Start

1. **Open the website**: Click the preview button to view your portfolio
2. **Customize content**: Edit the personal information in `index.html`
3. **Update styles**: Modify colors and styles in `styles.css`
4. **Add functionality**: Extend features in `script.js`

## Customization Guide

### Personal Information
Edit these sections in `index.html`:

```html
<!-- Update your name -->
<span class="hero-name">Your Name Here</span>

<!-- Update your title -->
<p class="hero-subtitle">Your Professional Title</p>

<!-- Update your description -->
<p class="hero-description">Your personal description</p>

<!-- Update contact information -->
<p>your.email@email.com</p>
<p>+1 (555) 123-4567</p>
<p>Your Location</p>
```

### Profile Images
Replace placeholder images with your own:
- Hero section: Update the `src` attribute in the hero avatar
- About section: Update the about me image
- Projects: Replace project placeholder images

### Skills & Technologies
Update the skills section with your technologies:

```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Your Skill</span>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="90"></div>
    </div>
</div>
```

### Projects
Add your projects in the projects section:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
        <!-- Update links -->
        <div class="project-overlay">
            <div class="project-links">
                <a href="your-live-demo.com" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="your-github-repo.com" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Color Scheme
Update the color scheme in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);

/* Primary color for accents */
color: #your-primary-color;
```

### Social Media Links
Update social media links in the contact section:

```html
<a href="https://linkedin.com/in/your-profile" class="social-link">
    <i class="fab fa-linkedin-in"></i>
</a>
<a href="https://github.com/your-username" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

## File Structure

```
portfolio-fwd/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This documentation
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Performance Features

- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Images load as needed
- **Throttled Scroll**: Optimized scroll event handling
- **Minimal Dependencies**: Only essential libraries loaded
- **Compressed Assets**: Optimized for fast loading

## Tips for Best Results

1. **High-Quality Images**: Use high-resolution images for projects and profile
2. **Consistent Branding**: Maintain consistent colors and fonts
3. **Content Quality**: Write compelling descriptions for projects
4. **Regular Updates**: Keep your portfolio current with latest work
5. **Mobile Testing**: Always test on mobile devices

## Advanced Features

- **Smooth Scrolling**: Native and polyfill support
- **Intersection Observer**: Modern, efficient scroll detection
- **Form Validation**: Client-side validation with user feedback
- **Error Handling**: Graceful degradation for older browsers
- **Performance Monitoring**: Optimized for fast loading

## Contact Form Integration

The contact form is ready for integration with:
- **Netlify Forms** (recommended for static hosting)
- **Formspree** (easy email integration)
- **Custom Backend** (Node.js, PHP, etc.)

## Deployment Options

1. **GitHub Pages**: Free hosting for static sites
2. **Netlify**: Continuous deployment with forms
3. **Vercel**: Fast static site hosting
4. **Traditional Hosting**: Any web hosting service

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Made with ❤️ and lots of ☕**

Need help customizing your portfolio? Feel free to ask for assistance!