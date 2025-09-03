# KKlick Landing Page - Docker Setup

This project has been configured to run in Docker containers for both development and production environments. Docker provides a consistent development experience across different machines and operating systems.

## 📋 Prerequisites

### What you need on ANY PC:
1. **Docker Desktop** - Download from https://www.docker.com/products/docker-desktop/
2. **Code Editor** - VS Code, Cursor, or your preferred editor
3. **Git** (optional but recommended) - For version control and project syncing
4. **Web Browser** - To view your application

### What you DON'T need locally:
- ❌ Node.js installation
- ❌ yarn/npm/pnpm installation  
- ❌ Project dependencies installed locally
- ❌ Specific Node.js version management

## 🚀 Quick Start on Any New PC

### Step 1: Get the Project
```bash
# Option A: Clone from GitHub (Recommended)
git clone https://github.com/aelcode/kklick_landing_page.git
cd kklick_landing_page

# Option B: Copy project folder manually to new PC
```

### Step 2: Start Development
```bash
# Start the development environment (builds automatically if needed)
docker compose up app-dev

# Or run in detached mode (runs in background)
docker compose up -d app-dev
```

### Step 3: Start Coding
```bash
# Open project in your code editor
code .        # VS Code
cursor .      # Cursor
# or use any other editor
```

### Step 4: Access Your App
- **Development server**: http://localhost:5173
- **Hot reloading**: Enabled - changes reflect automatically

## 🔄 Cross-PC Development Workflow

### On PC #1 (Make changes):
```bash
# Make your code changes in VS Code/Cursor
# Test in browser at localhost:5173
# Commit and push changes
git add .
git commit -m "Added new feature"
git push origin main
```

### On PC #2 (Continue development):
```bash
# Pull latest changes
git pull origin main
# Start Docker environment
docker compose up -d app-dev
# Continue coding where you left off
```

## 🛠️ Development Commands

### Development Mode (Hot Reloading)
```bash
# Build and run the development container
docker compose up app-dev

# Or run in detached mode
docker compose up -d app-dev
```

The development server will be available at `http://localhost:5173`

### Production Mode (Optimized Build)
```bash
# Build and run the production container
docker compose --profile production up app-prod

# Or run in detached mode
docker compose --profile production up -d app-prod
```

The production server will be available at `http://localhost:80`

## 🖥️ Cross-Platform Compatibility

| Operating System | Requirements | Setup Time |
|-----------------|-------------|------------|
| **macOS** | Docker Desktop + Code Editor | ~5 minutes |
| **Windows** | Docker Desktop + Code Editor | ~5 minutes |
| **Linux** | Docker Engine + Compose + Code Editor | ~5 minutes |

**The same commands work on all platforms!**

## 💻 How Development Works

```
Your Development Setup:
├── Code Editor (VS Code/Cursor) ← You edit files here
├── Docker Container ← Runs Node.js + Vite dev server
├── Volume Mount ← Files sync between editor and container
└── Browser ← View app with hot reloading
```

### What happens when you save a file:
1. **Edit code** in VS Code/Cursor
2. **File changes** are instantly synced to Docker container
3. **Vite detects changes** and triggers hot reload
4. **Browser automatically refreshes** with your changes

## 🌍 Team Development Benefits

### ✅ Consistency Guaranteed:
- Same Node.js version (18-alpine) for everyone
- Same package versions from your package.json
- Same development server configuration
- No "works on my machine" problems

### ✅ Easy Onboarding:
- New team members: Install Docker + Clone repo + Start coding
- No complex environment setup
- No dependency conflicts
- Works across different operating systems

### ✅ Environment Portability:
- Develop on laptop, continue on desktop
- Switch between personal and work computers
- Same environment in development and production

## 🔧 Manual Docker Commands (Advanced)

### Development Build
```bash
# Build development image
docker build --target development -t kklick-landing-dev .

# Run development container with volume mounts
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules kklick-landing-dev
```

### Production Build
```bash
# Build production image
docker build --target production -t kklick-landing-prod .

# Run production container
docker run -p 80:80 kklick-landing-prod
```

## ⚙️ Container Management

### Multi-stage Dockerfile Architecture
- **Development stage**: Node.js Alpine with hot reloading via volume mounts
- **Production stage**: Nginx Alpine serving optimized static files

### Key Features
- ✅ Multi-stage build for optimized production images
- ✅ Volume mounting for development hot reloading  
- ✅ Nginx configuration for SPA routing
- ✅ Health checks for production containers
- ✅ Automatic package manager detection (yarn/npm/pnpm)
- ✅ File watching with polling for Docker compatibility

### Container Architecture
```
Development Container:
├── Node.js 18 Alpine (lightweight)
├── Vite dev server (port 5173)
├── Volume mounts (instant file sync)
└── Hot module replacement enabled

Production Container:  
├── Nginx Alpine (high performance)
├── Static files (optimized build)
├── SPA routing configuration
└── Caching headers for assets
```

### Environment Variables
- `NODE_ENV`: Set automatically based on the target (development/production)

### Stopping Containers
```bash
# Stop all services
docker compose down

# Stop and remove volumes (clean slate)
docker compose down -v

# Stop production services
docker compose --profile production down
```

### Viewing Logs and Status
```bash
# View logs (development)
docker compose logs app-dev
docker compose logs -f app-dev  # Follow logs in real-time

# View logs (production)
docker compose logs app-prod

# Check container status
docker ps  # See running containers
```

### Container Maintenance
```bash
# Access container shell (for debugging)
docker compose exec app-dev sh

# Rebuild containers (after Dockerfile changes)
docker compose build --no-cache

# Restart specific service
docker compose restart app-dev

# View container resource usage
docker stats
```

## 🗂️ Environment Configuration

### Environment Variables
Create a `.env` file in your project root for environment-specific settings:

```bash
# Copy example file and customize
cp .env.example .env
```

### Common Environment Variables:
```env
NODE_ENV=development
VITE_APP_TITLE=KKlick Landing Page
VITE_API_URL=https://api.example.com
```

## 🚨 Troubleshooting

### Common Issues and Solutions

**Issue**: Container won't start
```bash
# Check Docker is running
docker info

# Check container logs
docker compose logs app-dev

# Rebuild without cache
docker compose build --no-cache app-dev
```

**Issue**: Hot reloading not working
```bash
# Restart container
docker compose restart app-dev

# Check if files are properly mounted
docker compose exec app-dev ls -la /app
```

**Issue**: Port already in use
```bash
# Check what's using the port
lsof -i :5173

# Stop conflicting process or change port in docker-compose.yml
```

**Issue**: Permission errors on Linux
```bash
# Fix file ownership
sudo chown -R $USER:$USER .
```

## 📚 Additional Resources

### Recommended VS Code Extensions
- **Docker** - Container management from editor
- **Remote - Containers** - Develop inside containers (optional)
- **GitLens** - Enhanced Git capabilities

### Alternative Cloud Development
If you prefer browser-based editing:
- **GitHub Codespaces** - Full VS Code in browser with Docker support
- **GitPod** - Cloud development environment
- **Replit** - Online IDE with container support

## 🎯 Summary

This Docker setup provides:
- **🌍 Cross-platform development** - Works on any OS
- **🔄 Environment consistency** - Same setup everywhere  
- **⚡ Fast onboarding** - New developers productive in minutes
- **🚀 Easy deployment** - Container-ready for production
- **🛡️ Isolation** - No dependency conflicts
- **📈 Scalability** - Easy to extend and modify

### Quick Command Reference:
```bash
# Start development
docker compose up -d app-dev

# View in browser  
open http://localhost:5173

# View logs
docker compose logs -f app-dev

# Stop everything
docker compose down
```

**Happy coding! Your KKlick landing page is now fully containerized and portable! 🐳✨**

## 🚢 Production Deployment (Optional)

### Docker Hub Setup (For Production Deployment)

**Note**: For local development, you don't need Docker Hub. The current setup builds images locally which is perfect for development workflow.

#### When to use Docker Hub:
- 🚀 **Production deployment** to web servers
- 👥 **Team image sharing** (optional - local builds are usually better)
- 🔄 **CI/CD pipelines** for automated deployment

#### Production Deployment Steps:
```bash
# 1. Create Docker Hub account at https://hub.docker.com
# 2. Login to Docker Hub
docker login

# 3. Build and tag production image
docker build --target production -t yourusername/kklick-landing:latest .

# 4. Push to Docker Hub
docker push yourusername/kklick-landing:latest

# 5. Deploy on production server
docker pull yourusername/kklick-landing:latest
docker run -p 80:80 yourusername/kklick-landing:latest
```

#### Alternative Production Options:
- **Vercel/Netlify**: Deploy directly from Git (easier)
- **GitHub Pages**: For static sites
- **AWS/DigitalOcean**: Container hosting services

### Common Environment Variables:
```env
NODE_ENV=development
VITE_APP_TITLE=KKlick Landing Page
VITE_API_URL=https://api.example.com
```

## 🛠️ Docker Configuration Details

## Notes

- The development container mounts your source code, so changes will be reflected immediately
- Node modules are stored in a Docker volume to improve performance
- The production build serves static files through Nginx for optimal performance
- The `.dockerignore` file excludes unnecessary files from the build context
