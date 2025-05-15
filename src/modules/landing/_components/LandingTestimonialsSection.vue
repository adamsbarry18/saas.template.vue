<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Ce que disent nos clients</h2>
        <p class="section-subtitle">Des milliers de clients satisfaits nous font confiance.</p>
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
  import { PropType } from 'vue';
  import TestimonialCard from './TestimonialCard.vue';

  interface TestimonialData {
    id: string | number;
    rating: number;
    text: string;
    authorImageUrl: string;
    authorName: string;
    authorLocation: string;
  }

  defineProps({
    testimonials: {
      type: Array as PropType<TestimonialData[]>,
      required: true,
      default: () => [],
    },
  });

  // Les données réelles proviendront des props, mais voici un exemple si ce composant gérait ses propres données :
  // const sampleTestimonials = ref<TestimonialData[]>([
  //   {
  //     id: 't1',
  //     rating: 5,
  //     text: "J'ai commandé un casque audio et je suis impressionné par la qualité sonore. La livraison a été ultra rapide et l'emballage soigné. Je recommande vivement!",
  //     authorImageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
  //     authorName: 'Sophie Martin',
  //     authorLocation: 'Paris, France',
  //   },
  //   // ... autres témoignages
  // ]);
</script>

<style lang="scss" scoped>
  .testimonials-section {
    padding: 40px 20px;
    background-color: var(--color-background-white);

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 1rem;
      }

      .section-subtitle {
        font-size: 1.125rem;
        color: var(--color-text-secondary, #606266);
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
</style>
