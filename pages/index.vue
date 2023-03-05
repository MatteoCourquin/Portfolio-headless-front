<template>
  <div class="hero">
    <div class="hero-description">
      <h1>Développeur Web</h1>
      <p>Développeur de passion, mon travail n'est qu'une partie de plaisir. Selon moi, c'est primordial pour faire des
        projets soignés et de qualité !</p>
      <p>Votre projet sera peut-être le prochain ?</p>
      <nuxt-link to="/projects"><button class="button">Voir les projets</button></nuxt-link>
    </div>
  </div>
</template>

<script></script>

<style lang='scss'>
@import '~/assets/scss/main.scss';

.hero {
  display: flex;
  align-items: center;
  height: 100vh;
  min-height: 800px;

  .hero-description {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: clamp(3rem, 8vw, 10rem);
      font-family: $font-roboto-black;
      color: $color-black;
    }

    p {
      margin: 20px 0;
      width: 60vw;

      @include screen-s {
        width: 90%;
      }
    }

    .button {
      margin-top: 20px;
    }
  }
}
</style>