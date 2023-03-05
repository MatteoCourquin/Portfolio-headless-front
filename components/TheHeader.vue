<template>
  <div class="wrapper-header">
    <header class="header">
      <div class="geometry">
        <nuxt-link to="/">
          <div class="square"></div>
        </nuxt-link>
        <div class="line"></div>
      </div>
      <nav>
        <nuxt-link class="links" to="/projects">Projets</nuxt-link>
        <nuxt-link class="links" to="#">Contact</nuxt-link>
      </nav>
    </header>
  </div>
</template>

<script>
</script>

<style scoped lang='scss'>
@import '~/assets/scss/main.scss';

.wrapper-header{
  z-index: 999;
  width: 100vw;
  padding: $margin-xl;
  background-image: linear-gradient(180deg, $color-white 70%, #ffffffb9 85%, #ffffff00 100%);
  position: fixed;
  left: 0;
  top: 0;
}
.header{
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;
  max-width: 1920px;
  margin: 0 auto;
  .geometry{
    display: flex;
    align-items: center;
    gap: 20px;
    .square{
      width: 20px;
      aspect-ratio: 1/1;
      // background-color: $color-black;
      background-color: $color-main;
      transition: .2s ease-in-out;
      &:hover{
        transform: scale(1.1);
      }
    }
    .line{
      width: 10vw;
      height: 2px;
      background: $color-black;
    }
  }
  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
}
  
</style>