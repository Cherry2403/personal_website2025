This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```
```bash
###docker
docker compose up --build -d
And when you want to stop it:
docker compose stop
```
UPDATE PUBLIC REPO 
```bash
# From private repo
cd ..
cp -r personal-website-private personal-website-public
cd personal-website-public
rm -rf .git
git init
git add .
git commit -m "v2: Add new layout and animations"
git push -f origin main

```