# Interactive AI/ML Engineer Portfolio

A modern, responsive portfolio website designed to showcase AI/ML engineering expertise with interactive features and smooth animations using HTML, CSS, JavaScript, GSAP, and ScrollMagic.

## 🚀 Features

### ✨ Interactive Elements
- **Loading Screen** with animated loader
- **Smooth Navigation** with glassmorphism effects
- **GSAP Animations** throughout the site
- **ScrollMagic** scroll-triggered effects
- **Interactive Project Filtering** by category
- **Animated Skill Bars** with progress indicators
- **Counter Animations** for statistics
- **Contact Form** with validation and feedback
- **Mobile-First Responsive Design**

### 🎨 Design Features
- **Glassmorphism Effects** on navigation and cards
- **Gradient Backgrounds** with floating elements
- **Modern Typography** using Poppins font
- **Parallax Scrolling** effects
- **Hover Animations** and transitions
- **Custom Cursor** for desktop users
- **Scroll-to-Top** button
- **Visual Feedback** notifications

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with profile image
2. **About Me** - Personal background focused on AI/ML expertise
3. **Skills** - Categorized technical skills with animated progress bars
4. **Projects** - Filterable portfolio showcasing AI/ML projects
5. **Contact** - Interactive contact form and social links

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Interactive functionality
- **GSAP** - Professional animation library
- **ScrollMagic** - Scroll-based animations
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins typography

## 🎯 AI/ML Focus

This portfolio is specifically designed for AI/ML engineers and includes:
- **Machine Learning** projects and skills
- **Computer Vision** applications
- **Natural Language Processing** solutions
- **MLOps** and deployment technologies
- **Data Science** tools and frameworks

## 📂 Detailed File Structure

```
portfolio/
├── index.html          # Main HTML file - Update personal info here
│   ├── Hero Section      # Lines 67-122: Name, role, description, social links
│   ├── About Section     # Lines 125-172: Bio, stats, download CV button
│   ├── Skills Section    # Lines 173-318: Technical skills with icons
│   ├── Projects Section  # Lines 319-649: Portfolio projects
│   └── Contact Section   # Lines 650-740: Contact info and form
│
├── styles.css          # CSS styles and animations
│   ├── CSS Variables     # Lines 20-30: Color scheme customization
│   ├── Hero Styles       # Lines 140-450: Hero section styling
│   ├── Skills Styles     # Lines 580-650: Skills section layout
│   ├── Projects Styles   # Lines 720-850: Project cards and filtering
│   └── Responsive Design # Lines 980-1170: Mobile/tablet breakpoints
│
├── script.js           # JavaScript functionality
│   ├── GSAP Animations   # Lines 50-120: Page load and scroll animations
│   ├── Navigation        # Lines 240-350: Smooth scrolling and menu
│   ├── Project Filtering # Lines 420-500: Portfolio category filtering
│   └── Contact Form      # Lines 540-580: Form submission handling
│
├── profile.jpg         # Profile image - Replace with your photo
│                       # Recommended: 400x400px, high quality
│
└── README.md          # Documentation (this file)
```

## 🚀 Getting Started

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your profile:
   - Update personal information in `index.html`
   - Replace `profile.jpg` with your photo
   - Modify projects and skills
   - Update contact information

## ✏️ Complete Customization Guide

This section provides detailed instructions on how to customize this portfolio template for your own use. Follow these steps to create your personalized portfolio.

### 📝 Personal Information Updates

#### 1. Hero Section (`index.html` lines 78-103)
**Location:** `<section id="home" class="hero">`

```html
<!-- Update these elements -->
<span class="hero-name">Your Name</span>  <!-- Line 80: Replace with your name -->
<span class="hero-role">AI/ML Engineer</span>  <!-- Line 81: Your job title/role -->
<p class="hero-description">  <!-- Lines 84-87: Your personal description -->
    Passionate about creating intelligent solutions...
</p>
```

**What to change:**
- Replace "Your Name" with your actual name
- Update "AI/ML Engineer" with your professional title
- Customize the description to reflect your expertise and passion
- Keep it concise but engaging (2-3 sentences max)

#### 2. About Section (`index.html` lines 125-172)
**Location:** `<section id="about" class="about">`

```html
<!-- Update these paragraphs -->
<p class="about-description">  <!-- Lines 137-141 -->
    I'm a passionate AI/ML Engineer with expertise in Python, TensorFlow...
</p>
<p class="about-description">  <!-- Lines 142-146 -->
    With experience in FastAPI and Flask...
</p>
```

**What to change:**
- Write 2-3 paragraphs about your background
- Mention your key technologies and frameworks
- Highlight your focus areas (healthcare, education, etc.)
- Include your interests (hackathons, research, etc.)

#### 3. Statistics Counter (`index.html` lines 147-159)
**Location:** `<div class="about-stats">`

```html
<div class="stat-number" data-target="13">0</div>  <!-- Your project count -->
<div class="stat-label">Projects Completed</div>

<div class="stat-number" data-target="2">0</div>   <!-- Your achievements -->
<div class="stat-label">Hackathons Won</div>

<div class="stat-number" data-target="2.5">0</div> <!-- Your experience -->
<div class="stat-label">Years Experience</div>
```

**What to change:**
- Update `data-target` values with your actual numbers
- Modify labels to reflect your achievements
- You can add/remove stat items as needed

### 🛠️ Skills Section (`index.html` lines 173-318)

#### Machine Learning Skills (`index.html` lines 179-219)
**Location:** First skill category

```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-python"></i>  <!-- Icon class -->
    </div>
    <span class="skill-name">Python</span>  <!-- Skill name -->
</div>
```

**How to customize:**
1. **Add new skills:** Copy the entire `skill-item` div
2. **Change icons:** Update the `<i>` class (use Font Awesome icons)
3. **Update names:** Replace skill names with your technologies
4. **Remove skills:** Delete unwanted `skill-item` divs

#### Icon Reference for Common Technologies:
```html
<!-- Programming Languages -->
<i class="fab fa-python"></i>        <!-- Python -->
<i class="fab fa-js-square"></i>      <!-- JavaScript -->
<i class="fab fa-java"></i>          <!-- Java -->
<i class="fas fa-code"></i>          <!-- Generic code -->

<!-- Frameworks -->
<i class="fab fa-react"></i>         <!-- React -->
<i class="fab fa-node-js"></i>       <!-- Node.js -->
<i class="fas fa-fire"></i>          <!-- PyTorch -->
<i class="fas fa-robot"></i>         <!-- TensorFlow -->

<!-- Tools -->
<i class="fab fa-docker"></i>        <!-- Docker -->
<i class="fab fa-aws"></i>           <!-- AWS -->
<i class="fab fa-git-alt"></i>       <!-- Git -->
<i class="fas fa-database"></i>      <!-- Databases -->
```

### 🚀 Projects Section (`index.html` lines 319-649)

#### Adding Your Projects
**Location:** `<div class="projects-grid">`

Each project follows this structure:
```html
<div class="project-card" data-category="ml">  <!-- Category for filtering -->
    <div class="project-image">
        <img src="PROJECT_IMAGE_URL" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="GITHUB_LINK" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <!-- Add demo link if available -->
                <a href="DEMO_LINK" class="project-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Brief description of your project and its impact.
        </p>
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">TensorFlow</span>
            <span class="tech-tag">OpenCV</span>
        </div>
    </div>
</div>
```

**Customization steps:**
1. **Replace project image:** Use Unsplash URLs or your own images
2. **Update GitHub links:** Add your repository URLs
3. **Add demo links:** Include live demo or documentation links
4. **Project categories:** Use `ml`, `cv`, `nlp`, `web` for filtering
5. **Tech tags:** List the technologies used in each project

#### Project Image Sources:
- **Unsplash:** `https://images.unsplash.com/photo-ID?w=400&h=300&fit=crop&auto=format`
- **Your images:** Upload to your repository and use relative paths
- **Placeholder:** Use Lorem Picsum for temporary images

### 📞 Contact Information (`index.html` lines 650-740)

#### Contact Details (`index.html` lines 659-681)
```html
<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-map-marker-alt"></i>
    </div>
    <div class="contact-details">
        <h3>Location</h3>
        <p>Your City, Your Country</p>  <!-- Update with your location -->
    </div>
</div>

<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-envelope"></i>
    </div>
    <div class="contact-details">
        <h3>Email</h3>
        <p>your.email@example.com</p>  <!-- Update with your email -->
    </div>
</div>

<div class="contact-item">
    <div class="contact-icon">
        <i class="fas fa-phone"></i>
    </div>
    <div class="contact-details">
        <h3>Phone</h3>
        <p>+1 (555) 123-4567</p>  <!-- Update with your phone -->
    </div>
</div>
```

### 🔗 Social Media Links

#### Hero Section Social Links (`index.html` lines 94-102)
#### Contact Section Social Links (`index.html` lines 682-690)

```html
<a href="YOUR_LINKEDIN_URL" class="social-link" target="_blank">
    <i class="fab fa-linkedin-in"></i>
</a>
<a href="YOUR_GITHUB_URL" class="social-link" target="_blank">
    <i class="fab fa-github"></i>
</a>
<a href="YOUR_COFFEE_URL" class="social-link" target="_blank">
    <i class="fas fa-coffee"></i>
</a>
```

**Update with your URLs:**
- LinkedIn: `https://www.linkedin.com/in/your-profile/`
- GitHub: `https://github.com/yourusername`
- Buy Me a Coffee: `https://buymeacoffee.com/yourusername`
- Portfolio: `https://yourportfolio.com`

### 🖼️ Image Updates

#### Profile Images
1. **Replace `profile.jpg`** with your professional photo
2. **Image requirements:**
   - Format: JPG, PNG, or WebP
   - Size: 400x400px minimum
   - Quality: High resolution for crisp display
   - Style: Professional headshot with good lighting

#### Project Images
- **Size:** 400x300px for consistent layout
- **Format:** JPG or PNG
- **Sources:** Your project screenshots, Unsplash, or custom graphics

### 🎨 Styling Customization (`styles.css`)

#### Color Scheme (`styles.css` lines 20-30)
```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary accent */
    --accent-color: #10b981;      /* Success/highlight color */
    --bg-dark: #0f172a;           /* Dark backgrounds */
    --bg-light: #f8fafc;         /* Light backgrounds */
    --text-dark: #1e293b;        /* Primary text */
    --text-light: #64748b;       /* Secondary text */
}
```

**Customization options:**
- Change colors to match your brand
- Use tools like [Coolors.co](https://coolors.co) for color palettes
- Maintain contrast ratios for accessibility

#### Typography
- Font family is set to 'Poppins' from Google Fonts
- To change: Update the Google Fonts link in `index.html` head section
- Then update the `font-family` in CSS

### 📱 Footer Information (`index.html` lines 732-738)
```html
<div class="footer-content">
    <p>&copy; 2025 Your Name. All rights reserved.</p>  <!-- Update name and year -->
    <p>Designed with ❤️ using HTML, CSS, JavaScript, GSAP & ScrollMagic</p>
</div>
```

### 🔧 Advanced Customization

#### Adding New Sections
1. **HTML Structure:** Add new `<section>` in `index.html`
2. **Navigation:** Add link in navigation menu
3. **Styling:** Create CSS rules in `styles.css`
4. **Animations:** Add GSAP animations in `script.js`

#### Modifying Animations
- **GSAP timelines:** Located in `script.js`
- **ScrollMagic scenes:** Configure trigger points and animations
- **CSS transitions:** Update hover effects and micro-interactions

### ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Replaced profile images
- [ ] Added your projects with correct links
- [ ] Updated skills and technologies
- [ ] Changed contact information
- [ ] Updated social media links
- [ ] Tested on different devices
- [ ] Checked all links work
- [ ] Optimized images for web
- [ ] Tested contact form
- [ ] Verified responsive design
- [ ] Added Google Analytics (optional)

### 🚀 Quick Start Template

For fastest setup, search and replace these placeholders:
- `Your Name` → Your actual name
- `your.email@example.com` → Your email
- `Your City, Your Country` → Your location
- `+1 (555) 123-4567` → Your phone number
- All social media URLs with your actual profiles
- `profile.jpg` → Your profile image filename

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎭 Animation Features

### GSAP Animations
- Hero section entrance animations
- Typing effect for name
- Floating shapes with parallax
- Section reveal animations
- Interactive hover effects

### ScrollMagic Triggers
- About section slide-in animations
- Skills progress bar animations
- Projects grid reveal
- Contact form animations
- Counter animations for statistics

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📋 Performance Features

- **Optimized animations** using hardware acceleration
- **Debounced scroll handlers** for smooth performance
- **Image preloading** for faster loading
- **Minimal dependencies** for lightweight experience

## 🎨 Color Scheme

```css
Primary: #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent: #10b981 (Emerald)
Background: #f8fafc (Light Gray)
Text: #1e293b (Dark Gray)
```

## 🚀 Deployment Options

### 🐱 GitHub Pages (Free)
**Best for:** Developers familiar with Git
1. **Create repository:** Upload your portfolio files to GitHub
2. **Enable Pages:** Go to Settings > Pages
3. **Select source:** Choose main branch
4. **Custom domain:** Optional - add your domain in settings
5. **Access:** Your site will be at `username.github.io/repository-name`

**Pro tips:**
- Name your repository `username.github.io` for custom URL
- Ensure `index.html` is in the root directory
- Changes may take a few minutes to reflect

### 🌐 Netlify (Free Tier)
**Best for:** Drag-and-drop deployment
1. **Visit:** [netlify.com](https://netlify.com)
2. **Drag folder:** Drop your portfolio folder onto Netlify
3. **Custom domain:** Add your domain in site settings
4. **Forms:** Enable Netlify Forms for contact form functionality
5. **SSL:** Automatically provided

**Features:**
- Automatic deployments from Git
- Form handling without backend
- CDN for fast global loading
- Branch previews for testing

### ⚡ Vercel (Free Tier)
**Best for:** Optimized performance
1. **Import:** Connect your GitHub repository
2. **Deploy:** Automatic deployment on push
3. **Domain:** Custom domain configuration
4. **Analytics:** Built-in performance analytics

**Advantages:**
- Edge network for speed
- Zero-configuration deployment
- Automatic HTTPS
- Preview deployments

### 📦 Traditional Web Hosting
**Best for:** Full control and custom backends

**Popular options:**
- **Hostinger** - Budget-friendly
- **Bluehost** - WordPress integration
- **SiteGround** - Developer-focused
- **DigitalOcean** - Cloud hosting

**Upload process:**
1. **Purchase hosting** and domain
2. **Access cPanel** or file manager
3. **Upload files** to public_html folder
4. **Configure domain** DNS settings

### 📊 Google Analytics Setup
**Track your portfolio visitors:**
1. **Create account:** [analytics.google.com](https://analytics.google.com)
2. **Get tracking ID:** Create property for your website
3. **Add code:** Insert tracking script in HTML head section
4. **Verify:** Check data collection in Analytics dashboard

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🔍 SEO Optimization
**Improve search engine visibility:**

1. **Meta tags:** Add to HTML head section
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="AI, ML, Data Science, Your Name">
<meta name="author" content="Your Name">
```

2. **Open Graph tags:** For social media sharing
```html
<meta property="og:title" content="Your Name - AI/ML Engineer">
<meta property="og:description" content="Portfolio description">
<meta property="og:image" content="URL_to_your_profile_image">
<meta property="og:url" content="your_portfolio_URL">
```

3. **Twitter Cards:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Portfolio">
<meta name="twitter:description" content="Portfolio description">
<meta name="twitter:image" content="URL_to_your_profile_image">
```

### 📞 Contact Form Integration
**Make your contact form functional:**

**Option 1: Netlify Forms**
- Add `netlify` attribute to form tag
- No backend code required
- Submissions appear in Netlify dashboard

**Option 2: Formspree**
- Sign up at [formspree.io](https://formspree.io)
- Update form action to Formspree endpoint
- Handle submissions via email

**Option 3: EmailJS**
- JavaScript-based email sending
- No backend server required
- Integrate with Gmail, Outlook, etc.

## 📖 Usage Tips

1. **Customize content** before going live
2. **Test on multiple devices** for responsiveness
3. **Optimize images** for faster loading
4. **Update contact form** to connect with backend service
5. **Add Google Analytics** for tracking

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add animations in `script.js`
4. Update navigation menu

### Modifying Animations
- Adjust GSAP timelines in `script.js`
- Modify ScrollMagic trigger points
- Customize CSS transitions and transforms

### Performance Optimization
- Compress images
- Minify CSS and JavaScript
- Enable GZIP compression
- Use CDN for external libraries

## 🚫 Troubleshooting & Common Issues

### 🇮🇲 Image Issues
**Problem:** Profile image not showing
- **Solution:** Ensure `profile.jpg` is in the root directory
- **Check:** File name matches exactly (case-sensitive)
- **Format:** Use JPG, PNG, or WebP formats
- **Size:** Optimize images (max 2MB for web performance)

**Problem:** Project images broken
- **Solution:** Verify image URLs are accessible
- **Unsplash URLs:** Check the photo ID is correct
- **Local images:** Ensure proper file paths

### 🔗 Link Issues
**Problem:** Social media links not working
- **Solution:** Ensure URLs include `https://`
- **Check:** `target="_blank"` attribute is present
- **Verify:** All URLs are accessible and public

**Problem:** Navigation not scrolling
- **Solution:** Check section IDs match navigation href values
- **Verify:** GSAP and ScrollMagic scripts are loading
- **Console:** Check for JavaScript errors in browser developer tools

### 🎨 Styling Issues
**Problem:** Colors not changing
- **Solution:** Clear browser cache and refresh
- **Check:** CSS variable syntax is correct (`--variable-name: value;`)
- **Verify:** Changes are saved in `styles.css`

**Problem:** Animations not working
- **Solution:** Ensure GSAP and ScrollMagic CDN links are active
- **Check:** Browser console for JavaScript errors
- **Fallback:** Test in different browsers

### 📱 Responsive Issues
**Problem:** Mobile layout broken
- **Solution:** Test using browser developer tools device simulation
- **Check:** Meta viewport tag is present in HTML head
- **Verify:** CSS media queries are not overridden

### ⚙️ Performance Issues
**Problem:** Slow loading
- **Solution:** Optimize images (use tools like TinyPNG)
- **Compress:** Minify CSS and JavaScript for production
- **CDN:** Ensure external libraries load from fast CDNs

### 📄 Content Issues
**Problem:** Text overflow or layout breaks
- **Solution:** Keep descriptions concise and test on multiple screen sizes
- **Check:** Long project names might need abbreviation
- **Responsive:** Test content on mobile devices

### 🚀 Deployment Issues
**Problem:** Site not loading on hosting platform
- **Solution:** Ensure all file paths are relative (not absolute)
- **Check:** File names match exactly (case-sensitive)
- **Verify:** All dependencies are included in upload

### 📞 Contact Form Issues
**Problem:** Form not submitting
- **Note:** This template includes front-end form only
- **Solution:** Integrate with services like Netlify Forms, Formspree, or EmailJS
- **Backend:** Add server-side processing for actual email sending

### 🆘 Debug Mode
To enable debug mode for development:
1. Open browser developer tools (F12)
2. Check Console tab for errors
3. Network tab to verify all resources load
4. Elements tab to inspect HTML structure

### 📞 Getting Help
If you encounter issues:
1. **Check this troubleshooting section**
2. **Verify all customization steps were followed**
3. **Test in different browsers**
4. **Check browser console for error messages**
5. **Ensure all files are uploaded to hosting**

### 📊 Performance Optimization Tips
- **Images:** Use WebP format when possible
- **Code:** Minify CSS and JavaScript for production
- **Fonts:** Limit Google Fonts to essential weights
- **Analytics:** Add Google Analytics for visitor tracking
- **SEO:** Add meta descriptions and Open Graph tags

## 📞 Support

For questions or issues with this portfolio template:
1. Check browser console for JavaScript errors
2. Verify all files are in the correct directory
3. Test in different browsers
4. Check responsive design on various screen sizes

## 📄 License

This portfolio template is free to use for personal and commercial projects. Attribution is appreciated but not required.

---

## 🚀 Quick Reference

### ⚡ Essential Customization Checklist
- [ ] Replace "Your Name" in hero section (line 80)
- [ ] Update hero description (lines 84-87)
- [ ] Replace `profile.jpg` with your photo
- [ ] Update about section content (lines 137-146)
- [ ] Modify statistics (lines 149-157)
- [ ] Add your skills and remove unused ones
- [ ] Replace all 13 projects with your own
- [ ] Update contact information (lines 659-681)
- [ ] Add your social media links
- [ ] Update footer with your name (line 493)

### 🔗 Key Files to Modify
| File | Purpose | Key Sections |
|------|---------|-------------|
| `index.html` | Content & Structure | Personal info, projects, skills |
| `styles.css` | Visual Design | Colors (lines 20-30), fonts |
| `script.js` | Interactivity | Rarely needs changes |
| `profile.jpg` | Profile Image | Replace with your photo |

### 📞 Support Links
- **Font Awesome Icons:** [fontawesome.com/icons](https://fontawesome.com/icons)
- **Unsplash Images:** [unsplash.com](https://unsplash.com)
- **Color Palettes:** [coolors.co](https://coolors.co)
- **Google Fonts:** [fonts.google.com](https://fonts.google.com)
- **Image Optimization:** [tinypng.com](https://tinypng.com)

### 🐛 Quick Debug
1. **Open browser dev tools** (F12)
2. **Check Console tab** for errors
3. **Verify all files** are uploaded
4. **Test on different devices**
5. **Clear browser cache** if changes don't appear

---

**Built with ❤️ using HTML, CSS, JavaScript, GSAP & ScrollMagic**

*Last updated: January 2025*

> 💡 **Tip:** Star this repository if you found it helpful, and don't forget to customize it with your own content before going live!