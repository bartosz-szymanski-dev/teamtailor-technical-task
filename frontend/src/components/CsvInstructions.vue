<template>
  <div class="pa-1">
    <v-card-title class="text-white">{{ title }}</v-card-title>

    <v-card-text>
      <v-list style="background: rgba(0, 0, 0, 0)">
        <v-list-item
          v-for="(item, index) in listItems"
          :key="index"
          :lines="item.lines || 'one'"
          :subtitle="item.subtitle"
          :title="item.title"
        />
      </v-list>
    </v-card-text>
  </div>
</template>

<script setup lang="ts">
  import { ListItem } from '@/interfaces/list-item.interface'
  import { defineProps } from 'vue'

  interface CsvCardProps {
    title: string;
    listItems: ListItem[];
  }

  defineProps<CsvCardProps>()
</script>
