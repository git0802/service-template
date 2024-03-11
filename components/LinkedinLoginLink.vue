<template>
  <a href="https://www.linkedin.com/uas/login" type="button" @click.prevent="sendSocialLinkClicked('Linkedin')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
