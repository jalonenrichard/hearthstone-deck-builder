<template>
  <ion-list>
    <ion-item v-for="index in 50" :key="index">
      <div
        class="card-image"
        :style="{ backgroundImage: 'url(' + image + ')',  width: '100px',height: '100px', backgroundPosition: '50% 25%', borderRadius: '50%'}"
      ></div>
      <ion-label class="card-texts">
        <section class="card-header">
          <ion-skeleton-text animated></ion-skeleton-text>
        </section>
        <ion-text>
          <section class="card-text">
            <ion-skeleton-text animated></ion-skeleton-text>
          </section>
        </ion-text>
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
export default {
  data() {
    return {
      image: "https://via.placeholder.com/150"
    };
  }
};
</script>

<style>
.card-image {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.card-texts {
  margin-left: 1em;
}
.card-header {
  max-width: 10em;
}
.card-text {
}
</style>