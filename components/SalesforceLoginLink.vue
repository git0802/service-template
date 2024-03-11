<template>
  <a href="https://login.salesforce.com/" type="button" @click.prevent="sendSocialLinkClicked('Salesforce')">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
