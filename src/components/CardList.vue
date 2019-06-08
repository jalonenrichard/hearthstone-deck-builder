<template>
  <ion-list>
    <ion-item v-for="card in allCards.Basic" :key="card.cardId">
      <div
        class="card-image"
        :style="{ backgroundImage: 'url(' + card.img + ')',  width: '100px',height: '100px', backgroundPosition: '50% 25%', borderRadius: '50%'}"
      ></div>
      <ion-label class="card-texts" color="secondary">
        <ion-text color="danger">
          <section class="card-header">{{card.name}}</section>
        </ion-text>
        <ion-text color="primary">
          <section class="card-text" v-html="card.text"></section>
        </ion-text>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
export default {
  props: ["allCards"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.allCards.Basic[22]);
  }
};
</script>

<style>
.card-list {
  background: black;
}
.card-image {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.card-texts {
  margin-left: 1em;
}
.card-header {
  max-width: 10em;
  margin-bottom: .5em;
  font-size: 1.5em;
}
.card-text {
}
</style>