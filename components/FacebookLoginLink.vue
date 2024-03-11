<template>
  <a href="https://www.facebook.com/login.php" type="button" @click.prevent="sendSocialLinkClicked('Facebook')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
