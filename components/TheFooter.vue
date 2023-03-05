<template>
  <footer class="footer">
    <div class="line"></div>
    <nav>
      <a class="footer-icons" target="_blank" href="https://github.com/MatteoCourquin"><img src="/images/logos/github.svg" alt=""></a>
      <a class="footer-icons" target="_blank" href="https://www.linkedin.com/in/matteo-courquin"><img src="/images/logos/linkedin.svg" alt=""></a>
    </nav>
  </footer>
</template>

<script>
</script>

<style scoped lang='scss'>
@import '~/assets/scss/main.scss';
.footer{
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100vh;
  padding: $margin-xl;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: $margin-xl;
  .line{
    width: 2px;
    height: 10vh;
    background: $color-black;
    margin-bottom: 20px;
  }
  nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer-icons{
      margin-top: 20px;
      transition: all .2s ease-in-out;
      &:hover{
        scale: (1.2);
      }
    }
  }
}
  
</style>