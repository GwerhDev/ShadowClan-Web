<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imgProfile from '../../assets/screenshots/image copy 3.png';
import imgTasks from '../../assets/screenshots/image copy 2.png';
import imgWar from '../../assets/screenshots/image copy.png';
import imgMobile from '../../assets/screenshots/image.png';

const swiperInstance = ref<any>(null);
const sectionRef = ref<HTMLElement | null>(null);
let visibilityObserver: IntersectionObserver | null = null;

function onSwiper(sw: any) {
  swiperInstance.value = sw;
}

onMounted(() => {
  visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      if (!swiperInstance.value) return;
      if (entry.isIntersecting) {
        swiperInstance.value.autoplay.resume();
      } else {
        swiperInstance.value.autoplay.pause();
      }
    },
    { threshold: 0.2 }
  );
  if (sectionRef.value) visibilityObserver.observe(sectionRef.value);
});

onUnmounted(() => {
  visibilityObserver?.disconnect();
});

const slides = [
  {
    img: imgProfile,
    title: 'Perfil de Personaje',
    desc: 'Vincula tus personajes de Diablo Immortal, gestiona tu personaje activo y consulta tu estado en el clan.',
    tag: 'Perfil',
  },
  {
    img: imgTasks,
    title: 'Mis Tareas',
    desc: 'Registra tus tareas diarias y de clan con seguimiento por fecha y marca de completitud.',
    tag: 'Tareas',
  },
  {
    img: imgWar,
    title: 'Guerra Sombría',
    desc: 'Panel de administración para gestionar batallas 8v8, asignar guerreros y registrar resultados en tiempo real.',
    tag: 'Administración',
  },
  {
    img: imgMobile,
    title: 'Diseño Responsivo',
    desc: 'Accede desde cualquier dispositivo. Confirma asistencia y consulta las guerras desde tu móvil.',
    tag: 'Móvil',
  },
];
</script>

<template>
  <section class="showcase-section" ref="sectionRef">
    <h4 v-animate="'fade'">la plataforma</h4>
    <h1 class="mb-1" v-animate="{ delay: 100 }">En Acción</h1>
    <p class="showcase-lead" v-animate="{ delay: 200 }">Una sola app para coordinar guerras, tareas y miembros de tu clan.</p>

    <div class="showcase-container mt-2" v-animate="{ effect: 'fade', delay: 250 }">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        @swiper="onSwiper"
        :pagination="{ clickable: true }"
        :navigation="true"
        class="showcase-swiper"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.title">
          <div class="slide-inner">
            <div class="screenshot-frame">
              <div class="frame-bar">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
              </div>
              <img :src="slide.img" :alt="slide.title" />
            </div>
            <div class="slide-caption">
              <span class="slide-tag">{{ slide.tag }}</span>
              <h2>{{ slide.title }}</h2>
              <p>{{ slide.desc }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped lang="scss">
.showcase-section {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.1rem 7rem;
  background: transparent;
  text-align: center;
  overflow-x: hidden;
  width: 100%;
  isolation: isolate;

  h4 {
    font-size: .75rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    margin: 0 0 .4rem;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    margin: 0;
    color: #fff;
  }
}

.showcase-lead {
  margin: .75rem 0 0;
  font-size: .95rem;
  color: rgba(255, 255, 255, .5);
  max-width: 480px;
  line-height: 1.6;
}

.showcase-container {
  width: 100%;
  max-width: 860px;
  position: relative;
}

.showcase-swiper {
  width: 100%;
  padding-bottom: 3.5rem !important;
}

.slide-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0 3rem;
}

.screenshot-frame {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(227, 210, 168, .12);
  background: #111;
  box-shadow: 0 8px 40px rgba(0, 0, 0, .6);

  .frame-bar {
    display: flex;
    gap: .4rem;
    align-items: center;
    padding: .5rem .75rem;
    background: rgba(255, 255, 255, .04);
    border-bottom: 1px solid rgba(255, 255, 255, .06);

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, .12);
    }
  }

  img {
    width: 100%;
    height: auto;
    max-height: 55vh;
    object-fit: contain;
    display: block;
  }
}

.slide-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;

  h2 {
    margin: 0;
    font-size: 1.3rem;
    color: #fff;
  }

  p {
    margin: 0;
    font-size: .875rem;
    color: rgba(255, 255, 255, .55);
    max-width: 480px;
    line-height: 1.65;
  }
}

.slide-tag {
  font-size: .65rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(227, 210, 168, .7);
  font-family: 'Cinzel', serif;
  background: rgba(227, 210, 168, .07);
  border: 1px solid rgba(227, 210, 168, .15);
  border-radius: 4px;
  padding: .2rem .6rem;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: rgba(227, 210, 168, .75);
  transition: color .2s;

  &::after {
    font-size: 1.1rem;
    font-weight: 700;
  }

  &:hover { color: rgb(227, 210, 168); }
}

:deep(.swiper-pagination-bullet) {
  background: rgba(227, 210, 168, .3);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: rgb(227, 210, 168);
}

@media (max-width: 600px) {
  .showcase-section {
    min-height: unset;
    padding: 3rem 1rem 5rem;
  }

  .showcase-lead {
    max-width: 100%;
  }

  .slide-inner {
    padding: 0 2.5rem;
    gap: .75rem;
  }

  .screenshot-frame img {
    max-height: 36vh;
  }

  .slide-caption h2 {
    font-size: 1.05rem;
  }

  .slide-caption p {
    font-size: .8rem;
  }
}
</style>
