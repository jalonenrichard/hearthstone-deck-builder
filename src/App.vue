<template>
  <ion-app>
    <ion-content :scrollEvents="true">
      <card-list-skeleton v-if="loading"></card-list-skeleton>
      <card-list v-else :allCards='allCards'></card-list>
    </ion-content>
  </ion-app>
</template>

<script>
import CardListSkeleton from "./components/CardListSkeleton";
import CardList from "./components/CardList";

export default {
  data() {
    return {
      loading: true,
      allCards: null
    };
  },
  components: { CardListSkeleton, CardList },
  mounted() {
    this.apiCall();
  },
  methods: {
    apiCall: function() {
      this.axios
        .get(
          "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards?collectible=1",
          {
            headers: {
              "X-RapidAPI-Key":
                "coaZWOMqDpmshwBk55IPC9OKOqBAp1ukmyujsny7vJxK5s0soN"
            }
          }
        )
        .then(
          res => (
            (this.allCards = res.data),
            (this.loading = false),
            console.log(this.allCards)
          )
        );
    }
  }
};
</script>

<style lang="scss">
</style>
