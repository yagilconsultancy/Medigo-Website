# MediGo Portfolio

MediGo Portfolio is the public-facing website for MediGo, an on-demand healthcare transportation platform. It presents the product, explains how the service works, supports partner inquiries, and links users into the booking experience.

The app is built with Next.js App Router, React, TypeScript, and MUI.

## Pages

- `/` - Landing page
- `/how-it-works` - Product flow and ride-booking information
- `/partners` - Partnership information and application flow
- `/about` - Company overview
- `/contact` - Contact form and support details
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- MUI
- TanStack Query
- Formik + Yup
- Axios

## Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local env file:

```bash
cp .env .env.local
```

If `.env` is not available in your environment, create `.env.local` with values like:

```env
NEXT_PUBLIC_BASE_API_URL=https://staging.getmedigo.com/api/
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_WEB_BOOING_URL=https://medigo-booking.vercel.app/login
NEXT_PUBLIC_TAWK_CHAT_ID=property_id/widget_id
NEXT_PUBLIC_SOCKET_URL=http://localhost:8000
NEXT_PUBLIC_CLOUD_FRONT_URL=https://your-cdn-domain
```

Notes:

- `NEXT_PUBLIC_BASE_API_URL` is required. The app throws at runtime if it is missing.
- `NEXT_PUBLIC_WEB_BOOING_URL` is used by the main booking CTA.
- `NEXT_PUBLIC_TAWK_CHAT_ID` enables the Tawk live chat widget. Leave it unset to disable chat locally.
- `NEXT_PUBLIC_SOCKET_URL` is optional and defaults to `http://localhost:8000`.
- `NEXT_PUBLIC_CLOUD_FRONT_URL` is only needed for image/PDF asset URLs that are stored by path instead of full URL.

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If you need HTTPS locally, use:

```bash
npm run dev:secure
```

## Available Scripts

```bash
npm run dev
npm run dev:secure
npm run build
npm run lint
npm run type-check
npm run format
npm run format:check
```

`npm run build` runs formatting and linting first via `prebuild`, then creates the production build.

## Production Build

```bash
npm run build
```

To run the production server after building:

```bash
npx next start
```

## Deployment (AWS EC2)

The site runs as a Docker container on the same EC2 box as the backend and
`medigo-interface`, in `~/medigo-website`, listening on host port **3200**
(3100 is `medigo-interface`; 8080/8006/8007 are the backend).

### One-time server setup

The deploy workflow assumes the checkout already exists, so create it once:

```bash
ssh -i <key> ec2-user@<PROD_HOST>
git clone git@github.com:yagilconsultancy/Medigo-Website.git ~/medigo-website
cd ~/medigo-website
cp .env.example .env   # then fill in real values
docker compose up -d --build
```

### Required GitHub secrets

Set these on the **Medigo-Website** repo (`Settings → Secrets and variables → Actions`).
They are separate from the other repos' secrets:

| Secret | Purpose |
| --- | --- |
| `EC2_HOST` / `EC2_USER` / `EC2_SSH_KEY` | SSH target for the deploy job |
| `NEXT_PUBLIC_BASE_API_URL` | API base; the app throws without it |
| `NEXT_PUBLIC_WEB_BOOING_URL` | "Book a Ride" CTA target |
| `NEXT_PUBLIC_SOCKET_URL` | Socket.IO endpoint |
| `NEXT_PUBLIC_CLOUD_FRONT_URL` | CDN base for assets (optional) |
| `NEXT_PUBLIC_TAWK_CHAT_ID` | Live chat widget (optional) |

Every one is a `NEXT_PUBLIC_*` value baked into the client bundle at build time,
so changing any of them needs a rebuild rather than a restart, and none may hold
a genuine secret.

### Deploying

Pushing to `main` runs lint + build, then rebuilds and restarts the container on
EC2. To deploy by hand from a workstation:

```bash
make deploy    # git pull + rebuild + restart on the server
make logs      # tail container logs
make ps        # show container status
make rebuild   # rebuild from the server's current tree, no git pull
```

## Project Structure

```text
src/
  app/        Next.js routes, layout, providers, metadata
  common/     shared config, API helpers, utilities, constants
  ui/         pages, modules, components, and presentation logic
public/       static assets
```

## Notes

- This repository uses `package-lock.json`, so `npm` is the expected package manager.
- The project currently includes a checked-in `.env`, but local development should prefer `.env.local` for machine-specific overrides.
