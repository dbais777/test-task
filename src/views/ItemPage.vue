<template>
  <v-container class="my-8">
    <v-btn class="mx-2" color="dark" @click="back">
      <v-icon> mdi-arrow-left-bold </v-icon>
      Назад
    </v-btn>
    <div v-if="item">
      <v-card-title style="word-break: break-word" class="text-h2 mt-16">
        {{ item.name }}
      </v-card-title>
      <v-card-title class="mt-16 text-h3">Описание</v-card-title>
      <TableItem :item="formatToTable(item.description)" />
      <v-card-title class="mt-16 text-h3">Информация о принтере</v-card-title>
      <TableItem :item="formatToTable(item.print_info)" />
    </div>
    <v-card-title
      v-else
      style="word-break: break-word"
      class="text-h3 justify-center mt-16"
    >
      К сожалению, ничего не найдено...
    </v-card-title>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import TableItem from "@/components/TableItem.vue";
export default {
  computed: {
    ...mapState(["mainData"]),
  },
  data() {
    return {
      item: null,
    };
  },
  components: {
    TableItem,
  },
  methods: {
    init() {
      const item = this.mainData.find((el) => el._id == this.$route.params.id);
      if (item) {
        this.item = item;
      } else this.item = null;
    },
    translate(str) {
      // ваш апи слегка не подходит под таблицу, я его этим методом подправил
      let transletingWords = "";
      switch (str) {
        case "bazovaya_otrasl":
          transletingWords = "Базовая отрасль";
          break;
        case "primenimost":
          transletingWords = "Применимость";
          break;
        case "technicheskiye_usloviya_expluat":
          transletingWords = "Тех условия";
          break;
        case "repernaya_stoimost":
          transletingWords = "Реперная стоимость";
          break;
        case "tsena_zakupki_detali":
          transletingWords = "Цена закупки";
          break;
        case "summa_zakupki":
          transletingWords = "Сумма закупки";
          break;
        case "sebestoimost_pechati":
          transletingWords = "Себестоимость печати";
          break;
        case "itogovie_zatrati_po_sebestoimosty_pechati":
          transletingWords = "Итог. затраты печати";
          break;

        case "bazovy_material":
          transletingWords = "Базовый материал";
          break;
        case "bazovaya_massa":
          transletingWords = "Базовая масса";
          break;
        case "vremya_izgotovleniya":
          transletingWords = "Время изготовления";
          break;
        case "dohod_20_diskont":
          transletingWords = "Доход";
          break;
        case "vreamya_pechati_opornoe_kolichestvo":
          transletingWords = "Время распечати";
          break;
        case "udelny_dohod":
          transletingWords = "Удельный доход";
          break;
        default:
          transletingWords = "Перевод не задан";
      }
      return transletingWords;
    },
    back() {
      //Тонкий момент, я возращаю не на / а на -1 ведь, если проект разрастется и заходи на эту страницу будет не только с главной - логика не нарушится
      this.$router.go(-1);
    },
    formatToTable(item) {
      // отформатировал данные для таблицы
      return Object.entries(item).map((el) => {
        return {
          title: this.translate(el[0]),
          descr: el[1],
        };
      });
    },
  },
  created() {
    // по хорошему, данные должны получатся с сервера, но я реализую поиск по стейту
    // Реализация именно такая, чтобы можно было зайти на страницу вбив url вручную или по ссылке извне
    this.init();
  },
};
</script>
