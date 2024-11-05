<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-center fill-height mx-auto"
      max-width="900"
    >
      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Technical Task</div>

        <h1 class="text-h2 font-weight-bold">Teamtailor</h1>

        <strong class="text-body-2 font-weight-light mt-1">by Bartosz Szymański</strong>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-btn
            class="mx-auto"
            :href="downloadCandidatesUrl"
          >Download candidates data</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  const downloadCandidatesUrl = computed<string>((): string => {
    return new URL('/api/candidate/list/download', window.origin).toString()
  })
</script>

<style>
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
