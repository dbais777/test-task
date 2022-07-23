<template>
  <v-container class="my-8">
    <TheSearch v-model="searchText" />
    <TheTable :data="filtered" />
  </v-container>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import TheTable from "@/components/TheTable.vue";
import { mapState } from "vuex";
export default {
  components: {
    TheTable,
    TheSearch,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    formatedText(str) {
      return str.toLowerCase().trim();
    },
  },
  computed: {
    ...mapState(["mainData"]),
    filtered() {
      return this.mainData.filter((el) => {
        return (
          this.formatedText(el.name).includes(
            this.formatedText(this.searchText)
          ) ||
          this.formatedText(
            el.description.technicheskiye_usloviya_expluat
          ).includes(this.formatedText(this.searchText))
        );
      });
    },
  },
};
</script>
