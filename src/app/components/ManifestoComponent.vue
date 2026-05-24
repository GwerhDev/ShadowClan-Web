<style scoped lang="scss" src="./ManifestoComponent.scss" />
<script setup lang="ts">
const features = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Guerra Sombría',
    desc: 'Administra batallas en 4 tiers: Exalted, Eminent, Famed y Proud. Registra participación y resultados en tiempo real.',
  },
  {
    icon: 'fa-solid fa-chess-rook',
    title: 'Torre Maldita',
    desc: 'Seguimiento de progreso individual y colectivo por nivel y temporada.',
  },
  {
    icon: 'fa-solid fa-list-check',
    title: 'Tareas de clan',
    desc: 'Crea y completa tareas diarias y de clan. Cada miembro lleva registro de su propia participación.',
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Gestión de clan',
    desc: 'Administra miembros, asigna oficiales y líderes. Consulta el historial completo de guerras.',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Guía con IA',
    desc: 'Asistente integrado potenciado por IA para resolver dudas sobre el juego y la plataforma.',
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Panel de administración',
    desc: 'Control total sobre usuarios, personajes, clanes y guerras desde un dashboard centralizado.',
  },
]
</script>

<template>
  <section class="manifesto-section pt-3 pb-3">
    <div class="default-container">
      <div class="left-section">
        <img src="../../assets/webp/di-bloodknight-cinematic-trailer.webp" width="100%" alt="">
      </div>
      <div class="right-section">
        <h4>la plataforma</h4>
        <h1>Funcionalidades</h1>
        <div class="features-grid">
          <div class="feature-card" v-for="f in features" :key="f.title">
            <i :class="f.icon" class="feature-icon"></i>
            <div class="feature-body">
              <h2 class="feature-title">{{ f.title }}</h2>
              <p class="feature-desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
