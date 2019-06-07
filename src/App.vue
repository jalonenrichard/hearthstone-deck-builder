<template>
  <ion-app>
    <ion-content :scrollEvents="true">
      <card-list-skeleton></card-list-skeleton>
    </ion-content>
  </ion-app>
</template>

<script>
import CardListSkeleton from "./components/CardListSkeleton";
export default {
  components: { CardListSkeleton }
};
</script>

<style lang="scss">
</style>
