<template>
  <main role="main">
    <div ref="cursor" class="cursor"></div>
    <TheHeader />
    <slot />
    <TheFooter />
  </main>
</template>

<script>

export default {
  name: '',
  data() {
    return {};
  },
  methods: {
    onMouseMove() {
      window.addEventListener('mousemove', (e) => {
        this.$refs.cursor.style.left = e.pageX + 'px';
        this.$refs.cursor.style.top = e.pageY + 'px';
      })
    },
  },
  mounted() {
    this.onMouseMove()
  },
}

</script>

<style lang="scss">
@import '~/assets/scss/main.scss';

.cursor {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  opacity: .1;
  background: radial-gradient(circle, $color-main 0%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 9999;
  pointer-events: none;
}
</style>
