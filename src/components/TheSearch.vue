<template>
  <v-toolbar>
    <v-toolbar-title>Тестовое задание - Байсупов Данила</v-toolbar-title>
    <v-text-field
      :value="value"
      @input="inputFilter"
      clearable
      class="mx-4"
      hide-details
      label="Поиск"
      solo-inverted
    ></v-text-field>
    <v-switch
      v-model="switchBtn"
      inset
      class="mt-4"
      @click="switchTheme"
      label="Dark Mode"
    ></v-switch>
  </v-toolbar>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  data() {
    return {
      switchBtn: true,
    };
  },
  props: ["value"],
  methods: {
    inputFilter: debounce(function (e) {
      //Вообще фильтры должны реализовываться на стороне сервера, если элементов много, поэтому на них нужно debounce, чтобы не нагружать сервер, представлю, так что, представлю, что тут все такие серверный фильтр
      this.$emit("input", e);
    }, 300),
    switchTheme() {
      //Можно было бы вынести в vuex
      this.$vuetify.theme.dark = this.switchBtn;
    },
  },
};
</script>
