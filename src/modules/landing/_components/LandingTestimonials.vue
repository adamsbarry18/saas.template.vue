<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-subtitle">Témoignages</h2>
        <p class="section-title">Ce que nos clients disent</p>
      </div>

      <div class="testimonials-grid">
        <testimonial-card
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import TestimonialCard from './TestimonialCard.vue';

  interface TestimonialData {
    id: string | number;
    rating: number;
    text: string;
    authorImageUrl: string;
    authorName: string;
    authorLocation: string;
  }

  const testimonials = ref<TestimonialData[]>([
    {
      id: 't1',
      rating: 5,
      text: "StockMaster a révolutionné notre gestion d'inventaire. Nous avons réduit nos stocks excédentaires de 30% tout en améliorant notre disponibilité produit.",
      authorImageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
      authorName: 'Sarah K.',
      authorLocation: 'Directrice, Boutique de Mode',
    },
    {
      id: 't2',
      rating: 5,
      text: "La gestion multi-devises nous a permis d'étendre nos activités à l'international sans soucis de conversion. Un gain de temps considérable!",
      authorImageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
      authorName: 'Jean L.',
      authorLocation: "Gérant, Magasin d'Électronique",
    },
    {
      id: 't3',
      rating: 5,
      text: "La gestion centralisée de nos 12 magasins est maintenant un jeu d'enfant. Les rapports automatisés nous font gagner des dizaines d'heures chaque mois.",
      authorImageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
      authorName: 'Pierre M.',
      authorLocation: 'PDG, Chaîne de Supermarchés',
    },
  ]);
</script>

<style lang="scss" scoped>
  .testimonials-section {
    padding: 60px 20px;
    background-color: var(--color-neutral-50);
    overflow: hidden;

    @media (min-width: 640px) {
      // sm
      padding: 80px 20px;
    }

    @media (min-width: 1024px) {
      // lg
      padding: 100px 20px;
    }
  }

  .testimonials-section .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .testimonials-section .text-center {
    text-align: center;
  }

  .testimonials-section .section-subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .testimonials-section .section-title {
    margin-top: 8px;
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1.1;
    color: var(--color-text-primary);

    @media (min-width: 640px) {
      // sm
      font-size: 2.625rem;
    }
  }

  .testimonials-section .testimonials-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 32px; // gap-8

    @media (min-width: 640px) {
      // sm
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      // lg
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
