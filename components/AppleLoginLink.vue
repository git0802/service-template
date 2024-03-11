<template>
  <a href="https://appleid.apple.com/auth/authorize" type="button" @click.prevent="sendSocialLinkClicked('Apple')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
