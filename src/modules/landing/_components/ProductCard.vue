<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.imageUrl" :alt="product.name" class="product-image" />
      <span v-if="product.isNew" class="badge new-badge">Nouveau</span>
      <span v-if="product.promoLabel" class="badge promo-badge">{{ product.promoLabel }}</span>
    </div>
    <div class="info-container">
      <h3 class="product-name">{{ product.name }}</h3>
      <div v-if="product.rating" class="rating-container">
        <u-rate
          :model-value="product.rating"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} étoiles"
          size="small"
        />
        <span class="review-count">({{ product.reviewCount }} avis)</span>
      </div>
      <div class="price-container">
        <span class="current-price">{{ formatPrice(product.currentPrice) }}</span>
        <span v-if="product.originalPrice" class="original-price">{{
          formatPrice(product.originalPrice)
        }}</span>
      </div>
      <u-button type="primary" class="add-to-cart-btn" @click="emit('add-to-cart', product.id)">
        Ajouter au panier
      </u-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  import { URate, UButton } from '@/modules/ui';

  interface Product {
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
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  });

  const emit = defineEmits(['add-to-cart']);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };
</script>

<style lang="scss" scoped>
  .product-card {
    background-color: var(--color-background-white, #ffffff);
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--el-box-shadow-light, 0 2px 12px 0 rgba(0, 0, 0, 0.1));
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--el-box-shadow-darker, 0 4px 20px 0 rgba(0, 0, 0, 0.15));
    }

    .image-container {
      position: relative;
      width: 100%;
      height: 250px;

      .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .badge {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: var(--color-primary-600, #0284c7);
        color: var(--color-white, #ffffff);
        font-size: 0.75rem;
        font-weight: bold;
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
      }
      .promo-badge {
        background-color: var(--color-red-500, #ff6b6b);
      }
    }

    .info-container {
      padding: 1rem;

      .product-name {
        font-weight: 700;
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
        color: var(--color-text-primary);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .rating-container {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        .el-rate {
          margin-right: 0.5rem;
        }
        .review-count {
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          margin-left: 0.5rem;
        }
      }

      .price-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .current-price {
          font-weight: bold;
          font-size: 1.2rem;
          color: var(--color-primary-600);
        }

        .original-price {
          font-size: 0.875rem;
          color: var(--color-text-placeholder);
          text-decoration: line-through;
        }
      }

      .add-to-cart-btn {
        width: 100%;
        // Le style de UButton est déjà défini, mais on peut surcharger si besoin.
        // background-color: var(--color-primary-600);
        // &:hover {
        //   background-color: var(--color-primary-700);
        // }
      }
    }
  }
</style>
