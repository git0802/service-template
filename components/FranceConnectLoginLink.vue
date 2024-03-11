<template>
  <a
    href="https://app.franceconnect.gouv.fr/api/v1/authorize"
    type="button"
    aria-label="France Connect"
    @click.prevent="sendSocialLinkClicked('FranceConnect')"
  >
    <slot>
      <img src="/img/france-connect/france-connect.png" alt="France Connect" />
    </slot>
  </a>
</template>

<script setup lang="ts">
import { useSendSocialLinkClicked } from '~/composables/use-send-social-link-clicked';

const sendSocialLinkClicked = await useSendSocialLinkClicked();
</script>
