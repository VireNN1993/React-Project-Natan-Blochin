# Deployment Guide for GitHub Pages

This guide explains how to deploy the Business Cards Platform to GitHub Pages.

## Prerequisites

1. Your code should be in a GitHub repository
2. The repository should be public (or you need GitHub Pro for private repos)
3. GitHub Actions should be enabled in your repository

## Automatic Deployment Setup

### 1. Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Automatic Deployment

Once you push your code to the `main` or `master` branch, GitHub Actions will automatically:

1. Install dependencies (`npm ci`)
2. Build the project (`npm run build`)
3. Deploy to GitHub Pages

The workflow file is located at `.github/workflows/deploy.yml`

### 3. Access Your Site

After successful deployment, your site will be available at:

```
https://[your-username].github.io/React-Project-main-main/
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Configuration Details

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig({
  base: "/React-Project-main-main/", // Your repository name
  plugins: [react(), tailwindcss(), flowbiteReact()],
});
```

### React Router Configuration (`App.tsx`)

```typescript
<BrowserRouter basename="/React-Project-main-main">
```

### Package.json Settings

```json
{
  "homepage": "https://natanblochin.github.io/React-Project-main-main",
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

## SPA Routing Fix

The project includes special handling for Single Page Application routing on GitHub Pages:

1. **404.html** - Redirects all 404s to the main app with query parameters
2. **SPA script in index.html** - Converts query parameters back to proper routes

This ensures that direct links to routes like `/profile` or `/signin` work correctly.

## Troubleshooting

### Common Issues:

1. **404 on routes**: Make sure the SPA routing fix is implemented
2. **Assets not loading**: Check that the `base` path in `vite.config.ts` matches your repository name
3. **Deployment fails**: Check the GitHub Actions tab for error logs

### Repository Name Changes:

If you change your repository name, update these files:

- `vite.config.ts` - Update the `base` path
- `src/App.tsx` - Update the `basename` in BrowserRouter
- `package.json` - Update the `homepage` URL

## Monitoring Deployments

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You'll see the deployment status for each push
4. Click on any workflow run to see detailed logs

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the repository settings to use your custom domain

## Environment Variables

If you need environment variables for production:

1. Create repository secrets in GitHub Settings > Secrets and variables > Actions
2. Reference them in the GitHub Actions workflow
3. Use them in your build process
