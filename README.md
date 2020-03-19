[![Netlify Status](https://api.netlify.com/api/v1/badges/819c20ba-81db-4dae-83f4-a1dbe82eba5f/deploy-status)](https://app.netlify.com/sites/xenodochial-bohr-1c4dfd/deploys)

<h1 align="center">
  Support Local Akron
</h1>

## Background

Sitting at home during the COVID-19 pandemic my wife Kirsten and I were trying to figure out how we could best support our city's local artists, musicians, and businesses. It occured to us that we weren't going to be able to answer that question ourselves, so we built this as a way to allow them to tell us, on their terms, how we can support them during this unconventional time.

If you think this will help your city then please clone, fork, download, or copy+paste this codebase into your own repository and start your own #SupportLocal application. No permission required. We're all in this together.

## Known Issues
You would be amazing if you submitted a PR to fix any of these!
- The share to Twitter button on the homepage doesn't do anything when you click on it.
- The photo uploader isn't working on the "Get Listed" form.
- The sort does not persist when you filter from one category to the next. I'm not sure if this is really an "issue" as I accounted for it in the UI, but it still might be weird.
- There are no tests.

## Supporting Technologies

- Built with [GatsbyJS](https://www.gatsbyjs.org/).
- CMS is [Contentful](https://www.contentful.com/)
- CI/CD and hosting through [Netlify](https://www.netlify.com/).
- Monitoring through [Google Analytics](https://analytics.google.com/).

## Pre-Requisites

- NodeJS v12.11.1
- NPM v6.13+
- GatsbyCLI v1.1+
- Contentful Account
- Netlify Account
- Google Analytics Account

## Local Development

### Configuration

This site requires a `.env` file with the following properties:

```
accessToken
spaceId
trackingId
```

The `spaceID` and `accessToken` are from Contentful.<br/>
The `trackingId` is from Google Analytics

You'll also need to add these three environment variables in Netlify by going to Setting > Build & Deploy > Environment.

### Setup

`npm i` - Install your dependencies<br/>
Then Either<br/>
`gatsby develop` - Build the assets in development mode and start a web server<br/>
Or (Hopefully before you commit!)<br/>
`gatsby build` - Build the assets in production mode<br/>
`gatsby serve` - Serve the assets in production mode<br/>

### Running Tests Locally

Lol

## Things To Note
- Since Gatsby pre-runs all of your GraphQL queries when the site is built, you'll need to re-deploy when content changes are made in Contetful unless you follow [this guide](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) on setting up a build hook that Contentful can kick off on publish.

- When you update your Node version (and maybe other times?) you'll need to use the "Clear Cache And Deploy" in Netlify instead of the regular deploy trigger.

- The form only works because I'm using Netlify forms. You can learn how to set them up [here](https://docs.netlify.com/forms/setup/). If you go a different route, you'll need to actually handle the form submit.

- Sometimes Netlify will think it's super smart and categorize form submissions as spam. It's never once caught spam for me, but it has caught valid entries that I needed to go and mark as valid before I got an email notification for them. This is done in the Netlify UI.

## Contentful

You'll need to set the content model up in Contenful to ensure your GraphQL queries will work. Here's my current content model:

Businesses (Main Object)<br/>
--Name (Short Text) | The name of the business or organization<br/>
--Url Name (Short Text) | The URL slug you want to use for the page (Must be unique)<br/>
--Category (Short Text) | The category that will auto populate the filters on the business index page<br/>
--Type (Short Text) | The type of business, this will go under the name on the site<br/>
--Website (Short Text) | The website that will be linked from the single business page<br/>
--Image (Media) | The image that will be used on the preview and single business page<br/>
--Story (Rich Text) | The story visible only on the single business page<br/>
--Support Summary (Rich Text) | The summary used on the business preview cards<br/>
--Support Full (Rich Text) | The full support visible only on the single business page<br/>
