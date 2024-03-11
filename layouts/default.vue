<template>
  <div class="flex flex-col size-full bg-slate-50">
    <main class="flex flex-col w-[600px] mx-auto pt-5">
      <div class="mb-4">
        <h1 class="text-3xl">Welcome!</h1>
        <p>This is the default page that you will have to edit.</p>
      </div>

      <div class="border border-slate-900 rounded-sm p-4">
        <div class="mb-4">
          <h2 class="font-bold">Login page</h2>
          <p>This section shows mandatory inputs for a login page.</p>
        </div>

        <form @submit.prevent="submitCredentials">
          <div class="flex flex-col">
            <label for="email">{{ t('email') }}</label>
            <input id="email" :value="email" type="email" required class="input" />
          </div>
          <div class="flex flex-col">
            <label for="password">{{ t('password') }}</label>
            <input id="password" v-model="password" type="password" required class="input" />
          </div>

          <button type="submit" class="button mt-2">
            {{ t('login') }}
          </button>

          <p class="w-full text-center my-1 text-sm">Or</p>

          <div class="flex flex-col gap-y-2">
            <GoogleLoginLink class="button social-link">
              <GoogleIcon />
              <span>{{ t('loginWithGoogle') }}</span>
            </GoogleLoginLink>
            <MicrosoftLoginLink class="button social-link">
              <MicrosoftIcon />
              <span>{{ t('loginWithMicrosoft') }}</span>
            </MicrosoftLoginLink>
          </div>
        </form>
      </div>

      <div class="border border-slate-900 rounded-sm p-4 mt-2">
        <div class="mb-4">
          <h2 class="font-bold">Download page</h2>
          <p>This section shows mandatory inputs for a download page.</p>
        </div>

        <button data-testid="download-button" class="button" @click="onDownloadLinkClicked">
          {{ t('download') }}
        </button>
      </div>

      <div class="border border-slate-900 rounded-sm p-4 mt-2">
        <div class="mb-4">
          <h2 class="font-bold">Scope page</h2>
          <p>This section shows mandatory inputs for a scope page.</p>
        </div>

        <button data-testid="authorize-button" class="button" @click="sendScopeGranted('CircleCI')">Authorize</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSendCredentialsSubmitted } from '~/composables/use-send-credentials-submitted';
import { useOnDownloadLinkClicked } from '~/composables/use-on-download-link-clicked';
import { useSendScopeGranted } from '~/composables/use-send-scope-granted';
import GoogleLoginLink from '~/components/GoogleLoginLink.vue';
import GoogleIcon from '~/components/google/GoogleIcon.vue';
import MicrosoftIcon from '~/components/microsoft/MicrosoftIcon.vue';

const { email, password, submitCredentials } = useSendCredentialsSubmitted();
const onDownloadLinkClicked = useOnDownloadLinkClicked();
const sendScopeGranted = useSendScopeGranted();

const { t } = useI18n();
</script>

<style>
.input {
  padding: 6px;
  border: 1px solid black;
  border-radius: 4px;
  height: 32px;
}

.button {
  width: 100%;
  border: 1px solid #ccc;
  @apply bg-slate-200;
  border-radius: 4px;
  height: 32px;
}

.button:hover {
  @apply bg-slate-300;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
}
</style>

<i18n lang="json">
{
  "en": {
    "email": "Email",
    "password": "Password",
    "login": "Log in",
    "download": "Download",
    "authorize": "Authorize",
    "loginWithGoogle": "Login with Google",
    "loginWithMicrosoft": "Login with Microsoft"
  },
  "fr": {
    "email": "Email",
    "password": "Mot de passe",
    "login": "Se connecter",
    "download": "Télécharger",
    "authorize": "Autoriser",
    "loginWithGoogle": "Se connecter avec Google",
    "loginWithMicrosoft": "Se connecter avec Microsoft"
  }
}
</i18n>
