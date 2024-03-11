<template>
  <a href="https://gitlab.com/users/sign_in" type="button" @click.prevent="sendSocialLinkClicked('Gitlab')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
