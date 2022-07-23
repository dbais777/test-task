<template>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-center"></th>
        <th class="text-left">Название</th>
        <th class="text-left">Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, key) in item" :key="key">
        <td>{{ ++key }}</td>
        <td>
          {{ i.title }}
        </td>
        <td width="80%">
          {{ i.descr }}
        </td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "TableItem",
  props: ["item"],
};
</script>

<style></style>
