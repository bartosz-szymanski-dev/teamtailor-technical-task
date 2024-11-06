<template>
  <v-card
    class="text-center"
    color="success"
    variant="tonal"
  >
    <v-card-title>
      <h2 class="text-h4 font-weight-bold">Thank you for downloading the data! 🚀</h2>
    </v-card-title>

    <v-card-text>
      <p>
        The data has been downloaded successfully. You can now view it in your favorite spreadsheet application.
      </p>

      <v-row class="text-left">
        <v-col
          class="mt-10"
          cols="12"
        >
          <strong class="text-h4 text-center">Instructions on how to use the file</strong>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <csv-instructions
            :list-items="excelInstructions"
            title="1. Opening a CSV File in Excel"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <csv-instructions
            :list-items="numbersInstrucions"
            title="2. Opening a CSV File in Numbers"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ListItem } from '@/interfaces/list-item.interface'

  const excelInstructions = computed<ListItem[]>(() => {
    return [
      {
        title: '1.1 Open Excel',
        subtitle: '',
        lines: 'one',
      },
      {
        title: '1.2 Go to the menu',
        subtitle: 'Click on File > Open.',
        lines: 'one',
      },
      {
        title: '1.3 Locate the CSV file',
        subtitle: 'Browse to the location of your CSV file. You may need to select \'All Files\' or \'CSV\' as the file type to view it.',
        lines: 'three',
      },
      {
        title: '1.4 Step through the Import Wizard',
        subtitle: 'Excel may open an Import Wizard. If so, select Delimited as the data type. Choose Comma as the delimiter. Click Finish to complete the import.',
        lines: 'three',
      },
    ]
  })

  const numbersInstrucions = computed<ListItem[]>(() => {
    return [
      {
        title: '2.1 Open Numbers',
        subtitle: '',
        lines: 'one',
      },
      {
        title: '2.2 Open the CSV file',
        subtitle: 'Drag and drop the CSV file directly into the Numbers window or go to File > Open, then locate and select your CSV file.',
        lines: 'one',
      },
      {
        title: '2.3 Data Formatting',
        subtitle: 'Numbers will automatically detect the comma delimiter and import the data into a new spreadsheet.',
        lines: 'three',
      },
    ]
  })
</script>
