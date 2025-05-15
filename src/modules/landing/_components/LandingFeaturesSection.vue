<template>
  <section class="features-section">
    <div class="container">
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-item">
          <div class="icon-wrapper">
            <icon-base :icon="feature.icon" :size="32" color="var(--color-primary-600)" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IconBase } from '@/modules/ui';

  interface Feature {
    icon: string;
    title: string;
    description: string;
  }

  const features = ref<Feature[]>([
    {
      icon: 'icon-delivery',
      title: 'Livraison rapide',
      description: 'Livraison express en 24-48h partout en France.',
    },
    {
      icon: 'icon-reset',
      title: 'Retours faciles',
      description: "30 jours pour changer d'avis, sans frais.",
    },
    {
      icon: 'icon-locked',
      title: 'Paiement sécurisé',
      description: 'Transactions 100% sécurisées.',
    },
  ]);
</script>

<style lang="scss" scoped>
  .features-section {
    padding: 40px 20px;
    background-color: var(--color-background-white, #ffffff);

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .feature-item {
      text-align: center;
      padding: 1.5rem;
      border-radius: 0.5rem;
      // background-color: var(--color-neutral-50); // Si un fond léger est souhaité pour chaque item

      .icon-wrapper {
        background-color: var(--color-primary-100);
        width: 64px;
        height: 64px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }

      .feature-title {
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--color-text-primary);
      }

      .feature-description {
        font-size: 1rem;
        color: var(--color-text-secondary, #606266);
        line-height: 1.6;
      }
    }
  }
</style>
