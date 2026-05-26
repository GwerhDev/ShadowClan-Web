<script setup lang="ts">
import { useRouter } from 'vue-router';
import ActionButton from '../components/Buttons/ActionButton.vue';
import ManifestoComponent from '../components/ManifestoComponent.vue';
import ShowcaseComponent from '../components/ShowcaseComponent.vue';
import HeroDevicesComponent from '../components/HeroDevicesComponent.vue';
import { useStore } from '../../middlewares/store/index';
import { APP_CLIENT_URL } from '../../middlewares/misc/const';

const router = useRouter();
const store = useStore();

function scrollTo(hash: string) {
  router.push({ path: '/', hash });
}

function apply() {
  if (store.currentUser?.logged) {
    window.location.href = APP_CLIENT_URL;
  } else {
    router.push('/login');
  }
}

const battles = [
  { name: 'Exalted', points: '5 pts' },
  { name: 'Eminent', points: '4 pts' },
  { name: 'Famed', points: '3 pts' },
  { name: 'Proud', points: '2 pts' },
]

const warCards = [
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Programación',
    desc: 'Registra la fecha y el clan rival del próximo enfrentamiento. Todos los miembros ven el evento con antelación.',
  },
  {
    icon: 'fa-solid fa-users-rectangle',
    title: 'Nómina',
    desc: 'Gestiona la lista de confirmados para la guerra y desasigna ausentes antes de la batalla.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Formaciones',
    desc: 'Asigna guerreros a cada categoría y posición: Exalted, Eminent, Famed y Proud.',
  },
]

const torreCards = [
  {
    icon: 'fa-solid fa-hand-fist',
    title: 'Ataque',
    desc: 'Arma el equipo de 10 para asaltar una torre enemiga y asigna cada guerrero a su rol antes del enfrentamiento.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Defensa',
    desc: 'Cuando un rival desafía tu torre, organiza rápidamente la respuesta y coordina la rotación de defensores.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Aliados',
    desc: 'Coordina con clanes aliados para reforzar torres en disputa y consolidar el control territorial del ciclo.',
  },
]
</script>

<template>
  <main>
    <section id="hero" class="first-section">
      <div class="left-section mw-1250">
        <span class="logo-styles f-size-large" v-animate="'fade'">ShadowclaN</span>
        <div class="shadowclan" v-animate="{ delay: 200 }">
          <h3 class="subtitle">Las Sombras reinarán</h3>
        </div>
        <p class="hero-desc" v-animate="{ delay: 290 }">La plataforma de gestión para tu clan de <span
            class="featured-text">Diablo Immortal</span>. Coordina guerras sombrías, tareas diarias y miembros desde un
          solo lugar.</p>
        <div class="hero-cta-desktop" v-animate="{ delay: 420 }">
          <ActionButton :message="store.currentUser?.logged ? 'Ir a la app' : 'Ingresar'" :action="apply" />
        </div>
      </div>
      <div class="right-section mw-1250" v-animate="{ effect: 'fade', delay: 150 }">
        <HeroDevicesComponent />
      </div>
      <div class="hero-cta-mobile" v-animate="{ delay: 420 }">
        <ActionButton :message="store.currentUser?.logged ? 'Ir a la app' : 'Ingresar'" :action="apply" />
      </div>
    </section>

    <div class="divider-top"></div>
    <div id="features">
      <ManifestoComponent />
    </div>
    <div class="divider-bottom"></div>

    <section class="second-section">
      <h4 id="shadow-war" v-animate="'fade'">sistema de</h4>
      <h1 class="mb-1" v-animate="{ delay: 100 }">Guerra Sombría</h1>
      <p class="section-description mw-800" v-animate="{ delay: 200 }">Cada guerra se disputa en <span
          class="featured-text">jueves y sábados</span>. Consiste en una serie de batallas <span
          class="featured-text">8v8</span> repartidas entre cuatro categorías. El clan que acumule más puntos al final
        de la noche, gana.</p>
      <div class="battles-grid mt-2">
        <div class="battle-card" v-for="(b, i) in battles" :key="b.name" v-animate="{ delay: 150 + i * 100 }">
          <h2>{{ b.name }}</h2>
          <span class="battle-points">{{ b.points }} por victoria</span>
        </div>
      </div>
      <div class="war-cards mt-2">
        <div class="war-card" v-for="(c, i) in warCards" :key="c.title" v-animate="{ delay: i * 120 }">
          <i :class="c.icon" class="war-icon"></i>
          <h2>{{ c.title }}</h2>
          <p class="subtitle">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <section class="torre-section">
      <h4 id="accursed-tower" v-animate="'fade'">conquista de</h4>
      <h1 class="mb-1" v-animate="{ delay: 100 }">Torre Maldita</h1>
      <p class="section-description mw-800" v-animate="{ delay: 200 }">Organiza los equipos de ataque y defensa de
        torres para cada ventana de combate. Coordina con tus <span class="featured-text">clanes aliados</span> para
        consolidar el control territorial del ciclo.</p>
      <div class="torre-cards mt-2">
        <div class="torre-card" v-for="(c, i) in torreCards" :key="c.title" v-animate="{ delay: i * 150 }">
          <i :class="c.icon" class="torre-icon"></i>
          <h2>{{ c.title }}</h2>
          <p class="subtitle">{{ c.desc }}</p>
        </div>
      </div>
    </section>

    <section class="third-section">
      <h4 id="clan-tasks" v-animate="'fade'">coordina tu</h4>
      <h1 class="mb-1" v-animate="{ delay: 100 }">Clan y Tareas</h1>
      <div class="clan-pillars mt-2">
        <div class="clan-pillar" v-animate="{ delay: 0 }">
          <i class="fa-solid fa-list-check pillar-icon"></i>
          <h2>Tareas</h2>
          <p class="subtitle">Diarias y de clan con registro de completitud por miembro.</p>
        </div>
        <div class="clan-pillar" v-animate="{ delay: 150 }">
          <i class="fa-solid fa-users pillar-icon"></i>
          <h2>Miembros</h2>
          <p class="subtitle">Gestión de roles: líder, oficiales y guerreros activos.</p>
        </div>
        <div class="clan-pillar" v-animate="{ delay: 300 }">
          <i class="fa-solid fa-scroll pillar-icon"></i>
          <h2>Historial</h2>
          <p class="subtitle">Revisa el rendimiento del clan en guerras pasadas.</p>
        </div>
      </div>
    </section>

    <div class="divider-top"></div>
    <div class="showcase-wrapper">
      <ShowcaseComponent />
    </div>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="logo-styles footer-logo">ShadowclaN</span>
          <p class="footer-tagline">La plataforma de gestión para tu clan de <span class="featured-text">Diablo
              Immortal</span>.</p>
        </div>
        <nav class="footer-nav">
          <p class="footer-nav-title">Secciones</p>
          <ul>
            <li @click="scrollTo('#features')">Funcionalidades</li>
            <li @click="scrollTo('#shadow-war')">Guerra Sombría</li>
            <li @click="scrollTo('#accursed-tower')">Torre Maldita</li>
            <li @click="scrollTo('#clan-tasks')">Clan y Tareas</li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <p>ShadowClan no está afiliado ni asociado con Blizzard Entertainment.</p>
        <p>© 2025 ShadowClan · Todos los derechos reservados</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
main {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  position: absolute;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(../../assets/avif/background.avif);
}

/* scroll-margin-top: offset para nav fija (~90px) */
#hero,
#features,
#shadow-war,
#accursed-tower,
#clan-tasks,
.second-section,
.torre-section,
.third-section {
  scroll-margin-top: 90px;
}

/* ── Hero ── */
.first-section {
  height: 100vh;
  min-height: 800px;
  max-height: 960px;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, transparent 1%, black 90%);
}

.left-section {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.right-section {
  width: 100%;
  height: 55vh;
  max-height: 520px;
  min-height: 300px;
  position: relative;
  isolation: isolate;
}

.shadowclan {
  text-align: center;
  max-width: 500px;
  margin-top: -2rem;
}

.hero-desc {
  margin: .9rem 0 1.5rem;
  color: rgba(255, 255, 255, .55);
  line-height: 1.7;
  text-align: center;
  max-width: 400px;
}

.subtitle {
  color: antiquewhite;
  font-weight: 400;
}

/* ── Shared ── */
.section-description {
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  text-align: center;
}

/* ── Guerra Sombría ── */
.second-section {
  height: 100vh;
  min-height: 600px;
  max-height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.1rem;
  background: linear-gradient(to bottom, black 10%, var(--color-secondary-bg) 100%);
}

.war-cards {
  display: flex;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
}

.war-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  padding: 1.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(227, 210, 168, 0.2);
  border-radius: 8px;
  text-align: center;
}

.war-icon {
  font-size: 2rem;
  color: rgb(227, 210, 168);
  filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.245));
}

.battles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  max-width: 760px;
  width: 100%;
}

.battle-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(227, 210, 168, 0.2);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.battle-points {
  font-size: .8rem;
  color: rgba(227, 210, 168, 0.7);
  font-family: 'Cinzel', serif;
}

/* ── Torre Maldita ── */
.torre-section {
  height: 100vh;
  min-height: 500px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.1rem;
  background: var(--color-secondary-bg);
}

.torre-cards {
  display: flex;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
}

.torre-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  padding: 2rem 1.5rem;
  background: rgba(123, 41, 23, 0.08);
  border: 1px solid rgba(123, 41, 23, 0.45);
  border-radius: 8px;
  text-align: center;
}

.torre-icon {
  font-size: 2.2rem;
  color: rgb(227, 210, 168);
  filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.245));
}

/* ── Clan y Tareas ── */
.third-section {
  height: 100vh;
  min-height: 500px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 1.1rem;
  background: linear-gradient(to bottom, var(--color-secondary-bg) 30%, var(--color-red-action) 300%);
}

.clan-pillars {
  display: flex;
  gap: 1.5rem;
  max-width: 900px;
  width: 100%;
}

.clan-pillar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(227, 210, 168, 0.2);
  border-radius: 8px;
  text-align: center;
}

.pillar-icon {
  font-size: 2.2rem;
  color: rgb(227, 210, 168);
  filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.245));
}

/* ── Responsive ── */
.hero-cta-mobile {
  display: none;
}

@media (max-width: 1100px) {
  .first-section {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 33vh;
    height: auto;
    min-height: 100vh;
    max-height: unset;
  }

  .hero-cta-desktop {
    display: block;
  }

  .hero-cta-mobile {
    display: none;
  }

  .second-section,
  .torre-section,
  .third-section {
    height: auto;
    max-height: unset;
  }

  .left-section {
    justify-content: center;
    width: 100%;
    max-width: 400px;
  }

  .hero-desc {
    margin-bottom: 1rem;
  }

  .right-section {
    display: none;
  }

  .subtitle {
    font-size: 15px;
  }

  .battles-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .war-cards {
    flex-direction: column;
    align-items: center;
  }

  .war-card {
    max-width: 400px;
    width: 100%;
  }

  .torre-cards {
    flex-direction: column;
    align-items: center;
  }

  .torre-card {
    max-width: 400px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .battles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .clan-pillars {
    flex-direction: column;
  }

  .shadowclan h3.subtitle {
    font-size: 13px;
  }
}

/* ── Showcase ── */
.showcase-wrapper {
  background: var(--color-primary-bg);
}

/* ── Footer ── */
.site-footer {
  background: var(--color-primary-bg);
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding: 3rem 2rem 1.5rem;
  text-align: left;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: .75rem;
  max-width: 340px;
}

.footer-logo {
  font-size: 28px;
}

.footer-tagline {
  margin: 0;
  font-size: .875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  text-align: center;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .75rem;
  min-width: 160px;
}

.footer-nav-title {
  margin: 0;
  font-family: 'Cinzel', serif;
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: rgba(227, 210, 168, 0.6);
}

.footer-nav ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .4rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.footer-nav li {
  font-size: .9rem;
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  transition: color 0.2s;
  text-align: left;
}

.footer-nav li:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer-bottom {
  max-width: 900px;
  margin: 1.5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-bottom p {
  margin: 0;
  font-size: .78rem;
  color: rgba(255, 255, 255, 0.3);
  text-align: left;
}

@media (max-width: 700px) {
  .footer-inner {
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: .4rem;
  }
}
</style>
