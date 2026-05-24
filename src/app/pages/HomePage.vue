<script setup lang="ts">
import { useRouter } from 'vue-router';
import ActionButton from '../components/Buttons/ActionButton.vue';
import ManifestoComponent from '../components/ManifestoComponent.vue';
import ShowcaseComponent from '../components/ShowcaseComponent.vue';
import HeroDevicesComponent from '../components/HeroDevicesComponent.vue';

const router = useRouter();

function apply() {
  router.push('/login');
}

const battles = [
  { name: 'Exalted', points: '5 pts' },
  { name: 'Eminent', points: '4 pts' },
  { name: 'Famed', points: '3 pts' },
  { name: 'Proud', points: '2 pts' },
]
</script>

<template>
  <main>
    <section class="first-section">
      <div class="left-section mw-1250">
        <span class="logo-styles f-size-large">ShadowclaN</span>
        <div class="warband pb-2">
          <h3 class="subtitle">Las Sombras reinarán</h3>
        </div>
        <ActionButton message="Ingresar" :action="apply"/>
      </div>
      <div class="right-section mw-1250">
        <HeroDevicesComponent />
      </div>
    </section>
    <div class="divider-top"></div>
    <ManifestoComponent />
    <div class="divider-bottom"></div>
    <section class="second-section">
      <h4>sistema de</h4>
      <h1 class="mb-1">Guerra Sombría</h1>
      <p class="war-description mw-800">Cada guerra se disputa en <span class="featured-text">jueves y sábados</span>. Consiste en una serie de batallas <span class="featured-text">8v8</span> repartidas entre cuatro categorías. El clan que acumule más puntos al final de la noche, gana.</p>
      <div class="battles-grid mt-2">
        <div class="battle-card" v-for="b in battles" :key="b.name">
          <h2>{{ b.name }}</h2>
          <span class="battle-points">{{ b.points }} por victoria</span>
        </div>
      </div>
      <h3 class="subtitle mw-800 mt-2">Confirma asistencia, registra resultados de cada batalla y consulta el historial de guerras desde un panel centralizado.</h3>
    </section>
    <section class="third-section">
      <h4>coordina tu</h4>
      <h1 class="mb-1">Clan y Tareas</h1>
      <div class="clan-pillars mt-2">
        <div class="clan-pillar">
          <i class="fa-solid fa-list-check pillar-icon"></i>
          <h2>Tareas</h2>
          <p class="subtitle">Diarias y de clan con registro de completitud por miembro.</p>
        </div>
        <div class="clan-pillar">
          <i class="fa-solid fa-users pillar-icon"></i>
          <h2>Miembros</h2>
          <p class="subtitle">Gestión de roles: líder, oficiales y guerreros activos.</p>
        </div>
        <div class="clan-pillar">
          <i class="fa-solid fa-scroll pillar-icon"></i>
          <h2>Historial</h2>
          <p class="subtitle">Revisa el rendimiento del clan en guerras pasadas.</p>
        </div>
      </div>
      <ShowcaseComponent />
    </section>
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

.first-section {
  height: 100vh;
  min-height: 800px;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, transparent 1%, black 90%);
}

.second-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.1rem;
  background: linear-gradient(to bottom, black 20%, var(--color-secondary-bg) 100%);
}

.third-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.1rem;
  background: linear-gradient(to bottom, var(--color-secondary-bg) 30%, var(--color-red-action) 300%);
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
  min-height: 300px;
  position: relative;
  isolation: isolate;
}

.warband {
  text-align: center;
  max-width: 500px;
  margin-top: 1rem;
}

.subtitle {
  color: antiquewhite;
  font-weight: 400;
}

/* Shadow War battles */
.war-description {
  margin: 1rem 0 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  text-align: center;
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

/* Clan pillars */
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

@media (max-width: 1100px) {
  .first-section {
    align-items: center;
    flex-direction: column;
  }

  .left-section {
    justify-content: center;
  }

  .right-section {
    width: 85%;
    max-width: 380px;
    height: 34vh;
    min-height: 200px;
  }

  .left-section {
    width: 100%;
    max-width: 400px;
  }

  .subtitle {
    font-size: 15px;
  }

  .battles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .battles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .clan-pillars {
    flex-direction: column;
  }

  .warband h3.subtitle {
    font-size: 13px;
  }
}
</style>
