<template>
  <a href="https://twitter.com/i/flow/login" type="button" @click.prevent="sendSocialLinkClicked('Twitter')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
