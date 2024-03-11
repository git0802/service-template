<template>
  <a href="https://slack.com/workspace-signin" type="button" @click.prevent="sendSocialLinkClicked('Slack')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
