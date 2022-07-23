<template>
  <v-dialog max-width="400px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small color="red">
        <v-icon dark> mdi-delete </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title style="word-break: break-word" class="text-h5">
        Вы действительно хотите удалить элемент?
      </v-card-title>
      <v-card-text
        >Элемент с id - {{ id }} будет полностью удален из вашей программы
        (вернуть элемент - на кнопку f5)</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Оставить
        </v-btn>
        <v-btn color="green darken-1" text @click="deleteElement">
          Удалить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteElement() {
      this.$store.commit("DELETE_ITEM", this.id);
      //по-хорошему, если бы было api, я бы сначала откравлял запрос на сервер с delete и только в случае успешного ответа удалял бы
      this.dialog = false;
    },
  },
};
</script>
