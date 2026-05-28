<script setup lang="ts">
import imgDesktop from '../../assets/screenshots/image.png';
import imgMobile from '../../assets/screenshots/image copy 3.png';
</script>

<template>
  <div class="devices-wrap">
    <div class="glow-bg"></div>

    <div class="browser">
      <div class="browser-bar">
        <div class="dots"><span /><span /><span /></div>
        <div class="url-pill"></div>
      </div>
      <img :src="imgDesktop" alt="Vista de escritorio" />
    </div>

    <div class="phone">
      <div class="phone-pill"></div>
      <img :src="imgMobile" alt="Vista móvil" />
      <div class="phone-home"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.devices-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.glow-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 45% 55%, rgba(140, 0, 0, .22) 0%, transparent 65%);
  pointer-events: none;
}

/* ── Browser mockup ── */
.browser {
  position: absolute;
  width: 80%;
  top: 50%;
  left: 0;
  transform: translateY(-52%);
  background: #0d0d0d;
  border-radius: 10px;
  border: 1px solid rgba(227, 210, 168, .14);
  box-shadow:
    0 0 0 1px rgba(0,0,0,.6),
    0 24px 64px rgba(0,0,0,.65);
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

.browser-bar {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .45rem .75rem;
  background: rgba(255, 255, 255, .03);
  border-bottom: 1px solid rgba(255, 255, 255, .06);

  .dots {
    display: flex;
    gap: .3rem;
    flex-shrink: 0;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, .14);
    }
  }

  .url-pill {
    flex: 1;
    height: 12px;
    background: rgba(255, 255, 255, .05);
    border-radius: 4px;
  }
}

/* ── Phone mockup ── */
.phone {
  position: absolute;
  width: 18%;
  left: 68%;
  bottom: 4%;
  background: #0d0d0d;
  border-radius: 10px;
  border: 1px solid rgba(227, 210, 168, .2);
  box-shadow:
    0 0 0 1px rgba(0,0,0,.7),
    0 12px 32px rgba(0,0,0,.8);
  overflow: hidden;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 5px 3px 6px;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4%;
  }
}

.phone-pill {
  width: 38%;
  height: 3px;
  background: rgba(255, 255, 255, .1);
  border-radius: 99px;
  margin: 0 auto 4px;
  flex-shrink: 0;
}

.phone-home {
  width: 34%;
  height: 2px;
  background: rgba(255, 255, 255, .12);
  border-radius: 99px;
  margin: 4px auto 0;
  flex-shrink: 0;
}

@media (max-width: 1100px) {
  .browser {
    left: 10%;
  }

  .phone {
    left: 70%;
  }
}
</style>
