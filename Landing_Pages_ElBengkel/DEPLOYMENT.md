# Panduan Deployment ElBengkel Landing Page

## 🚀 Deployment Options

### 1. Netlify (Recommended)

#### Step 1: Build Project
```bash
npm run build
```

#### Step 2: Deploy ke Netlify

**Option A: Using Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option B: Using GitHub Integration**
1. Push code ke GitHub
2. Connect repository ke Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 2. Vercel

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
vercel --prod
```

### 3. GitHub Pages

#### Step 1: Update vite.config.js
```javascript
export default defineConfig({
  base: '/Landing_Pages_ElBengkel/',
  plugins: [react()],
})
```

#### Step 2: Build & Deploy
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

### 4. Traditional Hosting (cPanel, etc)

#### Step 1: Build Project
```bash
npm run build
```

#### Step 2: Upload Files
- Upload semua file dari folder `dist/` ke public_html
- Pastikan `index.html` di root directory

#### Step 3: Configure .htaccess (untuk Apache)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📋 Pre-Deployment Checklist

- [ ] Test semua links dan buttons
- [ ] Test form submission
- [ ] Test responsive design di mobile
- [ ] Check console untuk errors
- [ ] Optimize images
- [ ] Update meta tags di `index.html`
- [ ] Update contact information
- [ ] Test animations di berbagai browser
- [ ] Check loading performance
- [ ] Verify SEO meta tags

---

## 🔍 SEO Optimization

### Update Meta Tags di `index.html`

```html
<meta name="description" content="Bengkel motor dan mobil profesional dengan teknologi terkini">
<meta name="keywords" content="bengkel, motor, mobil, servis, perbaikan">
<meta name="author" content="ElBengkel">
<meta property="og:title" content="ElBengkel - Bengkel Motor & Mobil Terpercaya">
<meta property="og:description" content="Layanan perbaikan dan perawatan kendaraan profesional">
<meta property="og:image" content="URL_TO_IMAGE">
```

### Add Sitemap
Buat `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-10-27</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt
Buat `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🔐 Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Validate form inputs
- [ ] Sanitize user data
- [ ] Use environment variables untuk API keys
- [ ] Regular security updates

---

## 📊 Performance Optimization

### 1. Image Optimization
- Gunakan WebP format
- Compress images
- Lazy load images

### 2. Code Splitting
- Vite sudah handle ini otomatis
- Monitor bundle size: `npm run build`

### 3. Caching Strategy
- Set cache headers untuk static assets
- Use service workers untuk offline support

### 4. CDN Usage
- Deploy ke CDN untuk faster delivery
- Netlify & Vercel sudah include CDN

---

## 🐛 Troubleshooting

### Issue: 404 errors pada refresh
**Solution:** Configure server untuk serve `index.html` untuk semua routes

### Issue: Slow loading
**Solution:** 
- Check network tab di DevTools
- Optimize images
- Enable gzip compression

### Issue: Animations not smooth
**Solution:**
- Check GPU acceleration
- Reduce animation complexity
- Use `will-change` CSS property

---

## 📈 Monitoring & Analytics

### Add Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance
- Use Lighthouse untuk audit
- Check Core Web Vitals
- Monitor uptime dengan monitoring service

---

## 🔄 Continuous Deployment

### GitHub Actions Example
Buat `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📞 Support & Maintenance

- Regular backups
- Monitor error logs
- Update dependencies regularly
- Test after updates
- Keep documentation updated

---

**Last Updated:** October 27, 2025
