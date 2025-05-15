<template>
  <section class="featured-products-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nos produits vedettes</h2>
        <p class="section-subtitle">Découvrez nos meilleurs produits sélectionnés avec soin pour vous.</p>
      </div>

      <div class="products-grid">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <div v-if="showViewAllButton" class="view-all-action">
        <u-button type="secondary" size="large" @click="emit('view-all-products')">
          Voir tous les produits
        </u-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import ProductCard from './ProductCard.vue';
  import UButton from '@/modules/ui/basic/UButton.vue';

  interface ProductData {
    id: string | number;
    imageUrl: string;
    name: string;
    isNew?: boolean;
    promoLabel?: string;
    rating?: number;
    reviewCount?: number;
    currentPrice: number;
    originalPrice?: number;
  }

  defineProps({
    products: {
      type: Array as PropType<ProductData[]>,
      required: true,
      default: () => [],
    },
    showViewAllButton: {
      type: Boolean,
      default: true,
    },
  });

  const emit = defineEmits(['add-product-to-cart', 'view-all-products']);

  const handleAddToCart = (productId: string | number) => {
    emit('add-product-to-cart', productId);
    console.log('Add to cart:', productId);
  };
</script>

<style lang="scss" scoped>
  .featured-products-section {
    padding: 40px 20px;
    background-color: var(--color-grey-50);

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
        color: var(--color-grey-900);
        margin-bottom: 1rem;
      }

      .section-subtitle {
        font-size: 1.125rem;
        color: var(--color-grey-700);
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .view-all-action {
      text-align: center;
      margin-top: 3rem;
    }
  }
</style>
