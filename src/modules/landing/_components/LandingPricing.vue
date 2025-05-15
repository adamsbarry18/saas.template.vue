<template>
  <section class="pricing-section">
    <div class="container">
      <div class="text-center">
        <h2 class="section-title">Des tarifs adaptés à votre entreprise</h2>
        <p class="section-description">
          Choisissez le plan qui correspond à vos besoins. Évoluez à tout moment.
        </p>
        <div class="billing-toggle">
          <u-toggle-button v-model="billingPeriod" :options="billingOptions" />
        </div>
      </div>

      <div class="pricing-grid">
        <!-- Basic Plan -->
        <u-card
          class="pricing-card"
          title-background-color="var(--color-primary-600)"
          title-color="var(--color-white)"
        >
          <template #title>
            <span class="plan-title">Starter</span>
          </template>
          <div class="card-content">
            <p class="plan-subtitle">Parfait pour les petites entreprises</p>
            <p class="plan-price">
              <span class="price-value">€29</span>
              <span class="price-period">/mois</span>
            </p>
            <u-button type="default" size="medium" class="plan-button" @click="scrollToSection('demo')">
              Essai gratuit
            </u-button>
          </div>
          <div class="card-features">
            <h3 class="features-title">Ce qui est inclus</h3>
            <ul class="features-list">
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Jusqu'à 1 000 produits</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>1 entrepôt</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Gestion des achats et ventes</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Support par email</span>
              </li>
            </ul>
          </div>
        </u-card>

        <!-- Pro Plan -->
        <u-card
          class="pricing-card featured"
          title-background-color="var(--color-primary-600)"
          title-color="var(--color-white)"
        >
          <template #title>
            <span class="plan-title">Professionnel</span>
          </template>
          <div class="card-content">
            <p class="plan-subtitle">Pour les entreprises en croissance</p>
            <p class="plan-price">
              <span class="price-value">€79</span>
              <span class="price-period">/mois</span>
            </p>
            <u-button type="primary" size="medium" class="plan-button" @click="scrollToSection('demo')">
              Essai gratuit
            </u-button>
          </div>
          <div class="card-features">
            <h3 class="features-title">Ce qui est inclus</h3>
            <ul class="features-list">
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Jusqu'à 10 000 produits</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Jusqu'à 3 entrepôts</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Multi-devises</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Gestion des comptes bancaires</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Support prioritaire</span>
              </li>
            </ul>
          </div>
        </u-card>

        <!-- Enterprise Plan -->
        <u-card
          class="pricing-card"
          title-background-color="var(--color-primary-600)"
          title-color="var(--color-white)"
        >
          <template #title>
            <span class="plan-title">Entreprise</span>
          </template>
          <div class="card-content">
            <p class="plan-subtitle">Pour les grandes organisations</p>
            <p class="plan-price">
              <span class="price-value">Personnalisé</span>
            </p>
            <u-button type="default" size="medium" class="plan-button" @click="scrollToSection('contact')">
              Nous contacter
            </u-button>
          </div>
          <div class="card-features">
            <h3 class="features-title">Ce qui est inclus</h3>
            <ul class="features-list">
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Produits illimités</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Entrepôts illimités</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Multi-devises avancé</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>API et intégrations</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Support dédié 24/7</span>
              </li>
              <li>
                <icon-base icon="icon-success" :size="20" color="var(--color-green-500)" />
                <span>Personnalisation avancée</span>
              </li>
            </ul>
          </div>
        </u-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { UButton, IconBase, UToggleButton, UCard } from '@/modules/ui';

  const billingPeriod = ref('monthly'); // Default to monthly

  const billingOptions = [
    { label: 'Facturation mensuelle', value: 'monthly' },
    { label: 'Facturation annuelle', value: 'annual' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<style lang="scss" scoped>
  .pricing-section {
    padding: 60px 20px;
    background-color: var(--color-background-white);

    @media (min-width: 640px) {
      // sm
      padding: 80px 20px;
    }

    @media (min-width: 1024px) {
      // lg
      padding: 100px 20px;
    }
  }

  .pricing-section .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .pricing-section .text-center {
    text-align: center;
  }

  .pricing-section .section-title {
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1.1;
    color: var(--color-text-primary);
  }

  .pricing-section .section-description {
    margin-top: 20px;
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .pricing-section .billing-toggle {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }

  .pricing-section .pricing-grid {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;

    @media (min-width: 640px) {
      // sm
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }

    @media (min-width: 1024px) {
      // lg
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      max-width: 1280px; // xl:max-w-none
      margin-left: auto; // xl:mx-0
      margin-right: auto; // xl:mx-0
    }
  }

  .pricing-section .pricing-card {
    border: 1px solid var(--color-neutral-200);
    border-radius: 8px;
    box-shadow: var(--box-shadow-s);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.featured {
      border-width: 2px;
      border-color: var(--color-primary-500);
    }

    .card-content {
      padding: 24px;
      text-align: center;
    }

    .plan-title {
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 500;
    }

    .plan-subtitle {
      margin-top: 16px;
      font-size: 0.875rem;
      color: var(--color-text-secondary);
    }

    .plan-price {
      margin-top: 32px;
      .price-value {
        font-size: 2.25rem;
        font-weight: 800;
        color: var(--color-text-primary);
      }
      .price-period {
        font-size: 1rem;
        font-weight: 500;
        color: var(--color-text-secondary);
      }
    }

    .plan-button {
      margin-top: 32px;
      width: 100%;
      justify-content: center;
    }

    .card-features {
      padding: 24px;
      border-top: 1px solid var(--color-neutral-200);
      background-color: var(--color-background-white);

      .features-title {
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--color-text-primary);
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      .features-list {
        margin-top: 24px;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;

        li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: var(--color-text-secondary);
        }
      }
    }
  }
</style>
