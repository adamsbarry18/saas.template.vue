<template>
  <section class="hero-section">
    <div class="container">
      <h1 class="title">Découvrez nos produits exceptionnels</h1>
      <p class="subtitle">
        Des articles de qualité à des prix imbattables. Livraison rapide et service client exceptionnel.
      </p>
      <div class="actions">
        <u-button type="primary" size="large" @click="emit('shop-now')"> Boutique maintenant </u-button>
        <u-button type="default" size="large" @click="emit('learn-more')"> En savoir plus </u-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import UButton from '@/modules/ui/basic/UButton.vue';

  const emit = defineEmits(['shop-now', 'learn-more']);
</script>

<style lang="scss" scoped>
  .hero-section {
    background-color: var(--color-primary-100);
    color: var(--color-text-primary);
    padding: 60px 20px;
    text-align: center;

    // Pour une image de fond, comme dans l'exemple HTML :
    // background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //   url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80');
    // background-size: cover;
    // background-position: center;
    // color: var(--color-white);

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .title {
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--color-text-secondary);
      margin-bottom: 2.5rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      @media (min-width: 640px) {
        flex-direction: row;
        justify-content: center;
      }
    }
  }
</style>
