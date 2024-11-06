<template>
  <v-container class="fill-height">
    <v-fade-transition>
      <v-responsive
        v-show="showContent"
        class="align-center fill-height mx-auto"
        max-width="900"
      >
        <intro />

        <div class="py-4" />

        <v-row justify="center">
          <v-col cols="auto">
            <download-button @file-download="onFileDownload" />
          </v-col>

          <v-col cols="12">
            <v-fade-transition>
              <thanks-for-download v-show="showThanksForDownload" />
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-responsive>
    </v-fade-transition>
  </v-container>
</template>

<script setup lang="ts">
  const showThanksForDownload = ref<boolean>(false)
  const showContent = ref<boolean>(false)

  onMounted((): void => {
    setTimeout((): void => {
      showContent.value = true
    }, 300)
  })

  const onFileDownload = (): void => {
    setTimeout((): void => {
      showThanksForDownload.value = true
    }, 800)
  }
</script>
