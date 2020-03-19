[![Netlify Status](https://api.netlify.com/api/v1/badges/819c20ba-81db-4dae-83f4-a1dbe82eba5f/deploy-status)](https://app.netlify.com/sites/xenodochial-bohr-1c4dfd/deploys)

<h1 align="center">
  Support Local Akron
</h1>

## Background

Sitting at home during the COVID-19 pandemic my wife Kirsten and I were trying to figure out how we could best support our city's local artists, musicians, and businesses. It occured to us that we weren't going to be able to answer that question ourselves, so we built this as a way to allow them to tell us, on their terms, how we can support them during this unconventional time.

If you think this will help your city then please clone, fork, download, or copy+paste this codebase into your own repository and start your own #SupportLocal application. No permission required. We're all in this together.

## Supporting Technologies

- Built with GatsbyJS.
- CI/CD and hosting through Netlify.
- Monitoring through Google Analytics.

## Pre-Requisites

- NodeJS v12.11.1
- NPM v6.13+
- GatsbyCLI v1.1+
- [Contentful](https://www.contentful.com/) Account
- [Netlify](https://www.netlify.com/) Account

## Local Development

### Setup

This site requires a `.env` file with the following properties:

```
accessToken
spaceId
```

These are the `spaceID` and `accessToken` from Contentful.

The site also requires a Google Analytics `trackingId`. You can store that in the `gatsby-config.js` file or you can be smarter than me and put it into and environment variable like a good developer.

### Start Developing

`npm i` will install your dependencies
`gatsby develop` will build the assets in development mode and start a web server

If you want to build the site in production mode you'll need to build the assets with
`gatsby build`
and then start the production web server with
`gatsby serve`

### Running Tests Locally

Lol

## Things To Note
- Since Gatsby pre-runs all of your GraphQL queries when the site is built, you'll need to re-deploy when content changes are made in Contetful unless you follow [this guide](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) on setting up a build hook that Contentful can kick off on publish.

- When you update your Node version (and maybe other times?) you'll need to use the "Clear Cache And Deploy" in Netlify instead of the regular deploy trigger.

- The form only works because I'm using Netlify forms. You can learn how to set them up [here](https://docs.netlify.com/forms/setup/). If you go a different route, you'll need to actually handle the form submit.

- Sometimes Netlify will think it's super smart and categorize form submissions as spam. It's never once caught spam for me, but it has caught valid entries that I needed to go and mark as valid before I got an email notification for them. This is done in the Netlify UI.

## Contentful

You'll need to set the content model up in Contenful to ensure your GraphQL queries will work. Here's the current content model:

Businesses
--Name (Short Text) | The name of the business or organization
--Url Name (Short Text) | The URL slug you want to use for the page (Must be unique)
--Category (Short Text) | The category that will auto populate the filters on the business index page
--Type (Short Text) | The type of business, this will go under the name on the site
--Website (Short Text) | The website that will be linked from the single business page
--Image (Media) | The image that will be used on the preview and single business page
--Story (Rich Text) | The story visible only on the single business page
--Support Summary (Rich Text) | The summary used on the business preview cards
--Support Full (Rich Text) | The full support visible only on the single business page
