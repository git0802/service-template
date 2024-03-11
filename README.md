# Welcome

Hello 👋!

Your goal is to replicate the HTML page of the service that we sent you as closely as possible.

# Glossary

- **Service**: A service is a third-party app such as Dropbox, Adobe, Google...
- **Template**: A template is a fake HTML page of a service. This is what you are going to re-create.
- **Template type**: Templates can have 3 different types:
  - `login`: The page you see when you want to log in to the service. This is **the most common type**.
    Example: the Google login page.
  - `download`: The service's page you see when you download a file from the service.
    Example: the Google Drive page when you download a file from your Google Drive.
  - `scope`: The service's page you see when you want to give access to a third-party app to your account.
    Example: the GitHub page when you want to give access to a third-party app to your GitHub account.

# Setup

1. Install [Node.js](https://nodejs.org/en/)
2. `npm install`

## Project structure

- `components`: folder that contains common components that you may need to use (mainly if the page contains social login links).
  You may also add components in the folder `components/default` if you need to create components for the template you are working on (please do it only if the template is big/complex).
- `src/layouts/default.vue`: the main file you will have to edit to create the template
- `public/img/default`: folder where you can copy/paste possible service assets such as images or svg.
- `public/favicon`: folder where the favicon of the service needs to be placed. It must be named `service-id` with the extension `.png`, `.ico` or `.svg`.

# Working on a template

> [!CAUTION]  
> Assets such as images must be duplicated from the service's website in the project, never point asset URLs to the service's website!

> [!TIP]
> While Tailwind CSS is available, you can also write plain CSS if you prefer. There are some examples in the default layout file.

## Common steps

1. `git checkout main`
2. `git checkout -b <service-name>`
3. Download the service favicon place it in `public/favicon`.
   The filename must be `service-id` with the extension `.png`, `.ico` or `.svg`. Usually, it's available at `https://service.com/favicon.ico`
4. `npm run dev`
5. Go to `http://localhost:8090`, you should see the example page
6. Make sure to read [the rules](#rules) before starting to work on the template
7. Re-create the real page by editing the `layouts/default.vue` file
8. Run `npm run format` to format the code
9. Run `npm run lint` to make sure there are no lint errors
10. Open a PR, we will review it, send any feedback, and merge it when everything is good.

# Rules

Please follow the following rules when working on a template.  
The `default.vue` template already follows these rules, you should only have to adjust the styles and the HTML structure.

## Login template

- **A login page must contain a `form` element that wraps email/password inputs and a submit button.**
- **The `form` element must have the event handler `@submit.prevent="submitCredentials"`.**
- **The password input is mandatory and must have the HTML attribute `type="password"` and `required`.**
- **If present, the email input must have the HTML attribute `type="email"` and `required`.**
- **The email and password inputs `v-model` must be bound to `email/password` from the `useSendCredentialsSubmitted` composable.**
- **The submit button is mandatory and must have the HTML attribute `type="submit"`.**
- **If the page contains social login links such as Google, Slack..., you must use the corresponding component (`GoogleLoginLink`, `SlackLoginLink`...) located in the `components` folder.**

## Scope template

- **The "Authorize" button must have a property `data-testid="authorize-button"`.**

## Download template

- **The "Download" button must have a property `data-testid="download-button"`.**
