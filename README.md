# Support Local Akron

## Background

Sitting at home during the COVID-19 pandemic my wife Kirsten and I were trying to figure out how we could best support our city's local artists, musicians, and businesses. It occured to us that we weren't going to be able to answer that question ourselves, so we built this as a way to allow them to tell us, on their terms, how we can support them during this unconventional time.

If you think this will help your city then please clone, fork, download, or copy+paste this codebase into your own repository and start your own #SupportLocal application. No permission required. We're all in this together.

## Known Issues

You would be amazing if you submitted a PR to fix any of these!

- The photo uploader isn't working on the "Get Listed" form.
- There are no tests.

### Things That Aren't Issues But Annoy Me

- The CSS is a one-file disaster and doesn't use a pre-processor.

## Supporting Services/Technologies

- Built with [NextJS 14](https://nextjs.org/) using the app router
- CI/CD and hosting through [Vercel](https://www.vercel.com/)
- Data is stored with [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) and accessed with [Prisma](https://www.prisma.io/)
  - [Vercel Blob](https://vercel.com/docs/storage/vercel-blob) for image storage
- [Tailwind](https://tailwindcss.com/) for some styling

## Local Development

### Configuration Steps

### Setup Auth

1. [Generate auth secret](https://generate-secret.vercel.app/32) and set as the value to `AUTH_SECRET` in env
2. Add `ADMIN_USER` and `ADMIN_PASSWORD` to environment variables with whatever values you choose.

### Setup

```shell
yarn install
yarn dev
```

View and edit DB

```shell
npx prisma studio
```

### Running Tests Locally

Lol

## Deploying With Vercel

1. Create a Vercel account if you don't have one already and [make a new project](https://vercel.com/docs/projects/overview#creating-a-project).
2. Follow [this guide](https://vercel.com/docs/storage/vercel-postgres/quickstart#create-a-postgres-database) to create the Vercel Postgres database and sync environment variables locally
3. Follow [this guide](https://vercel.com/docs/storage/vercel-blob) to create a Vercel Blob store
4. Run `npx prisma db seed` to populate the DB with mock data, or manually with Prisma Studio

## Things To Note

- You'll need to run `npx prisma db push` anytime you make changes to `schema.prisma`

## Content Model

Businesses (Main Object)

see `schema.prisma`
