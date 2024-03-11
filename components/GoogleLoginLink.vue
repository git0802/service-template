<template>
  <a
    href="https://accounts.google.com/v3/signin"
    type="button"
    aria-label="Google"
    @click.prevent="sendSocialLinkClicked('Google')"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
