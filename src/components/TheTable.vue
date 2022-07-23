<template>
  <div>
    <v-simple-table v-if="data.length">
      <thead>
        <tr>
          <th class="text-left">Название</th>
          <th class="text-left">Описание</th>
          <th class="text-left">Управление</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item._id">
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3">{{ item.description.technicheskiye_usloviya_expluat }}</td>
          <td class="py-3">
            <v-btn-toggle rounded>
              <v-btn @click="openPageItem(item._id)" small color="blue">
                <v-icon> mdi-link </v-icon>
              </v-btn>
              <DialogComponent :id="item._id" :dialog="true" />
            </v-btn-toggle>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-card-title
      v-else
      style="word-break: break-word"
      class="text-h3 justify-center mt-16"
    >
      К сожалению, элементов нет...
    </v-card-title>
  </div>
</template>

<script>
import DialogComponent from "@/components/DialogComponent.vue";
export default {
  props: ["data"],
  components: {
    DialogComponent,
  },
  methods: {
    openPageItem(id) {
      //чтобы сверху не кастомизировать стили router link, я решил сделать отдельным методом, хотя правильнее было бы делать это ссылкой, а не кнопкой
      this.$router.push(`/item/${id}`);
    },
  },
};
</script>
