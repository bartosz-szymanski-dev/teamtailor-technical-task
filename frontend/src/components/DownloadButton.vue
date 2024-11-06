<template>
  <v-btn
    color="success"
    :href="downloadCandidatesUrl"
    size="x-large"
    variant="tonal"
    @click="$emit('fileDownload')"
  >
    Download candidates data

    <v-icon end>mdi-account-arrow-down-outline</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
  defineEmits(['fileDownload'])

  const downloadCandidatesUrl = computed<string>((): string => {
    return new URL('/api/candidate/list/download', window.origin).toString()
  })
</script>
