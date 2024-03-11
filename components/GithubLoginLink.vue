<template>
  <a href="https://github.com/login" type="button" @click.prevent="sendSocialLinkClicked('Github')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
