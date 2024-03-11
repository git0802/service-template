<template>
  <a
    href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
    type="button"
    @click.prevent="sendSocialLinkClicked('Microsoft')"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
