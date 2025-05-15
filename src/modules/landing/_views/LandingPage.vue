<template>
  <div class="landing-page">
    <u-nav-bar
      :items="navItems"
      default-active="home"
      @nav-select="handleNavSelect"
      @action-click="handleActionClick"
    >
      <template #logo>
        <router-link to="/">
          <img src="@/assets/images/logo_ecommerce.jpg" alt="logo" />
          <span>StockMaster</span>
        </router-link>
      </template>
    </u-nav-bar>

    <main>
      <div class="main-content-wrapper">
        <section id="hero">
          <LandingHero />
        </section>

        <section id="features">
          <LandingFeatures />
        </section>

        <section id="demo">
          <LandingDemo />
        </section>

        <section id="pricing">
          <LandingPricing />
        </section>

        <section id="testimonials">
          <LandingTestimonials />
        </section>

        <section id="cta">
          <LandingCta />
        </section>
      </div>
    </main>

    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { UNavBar } from '@/modules/ui';
  import { NavItem } from '@/modules/ui/layout/navbar.types';
  import {
    LandingHero,
    LandingFeatures,
    LandingDemo,
    LandingPricing,
    LandingTestimonials,
    LandingCta,
    LandingFooter,
  } from '../_components';

  // Example data for nav items (adapt as needed)
  const navItems = computed<NavItem[]>(() => [
    { id: 'features', label: 'Fonctionnalités', type: 'link', value: '#features' },
    { id: 'pricing', label: 'Tarifs', type: 'link', value: '#pricing' },
    { id: 'testimonials', label: 'Témoignages', type: 'link', value: '#testimonials' },
    { id: 'contact', label: 'Contact', type: 'link', value: '#contact' },
    {
      id: 'demo-action',
      label: 'Demander une démo',
      type: 'button',
      align: 'right',
      action: 'scroll-to-demo',
      props: { type: 'primary' },
    },
  ]);

  const handleNavSelect = (value: string) => {
    console.log('Nav selected:', value);
    // Handle navigation logic if using vue-router links
  };

  const handleActionClick = (action: string, value?: any) => {
    console.log('Action clicked:', action, value);
    if (action === 'scroll-to-demo') {
      scrollToSection('demo');
    }
    // Handle other actions as needed
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<style lang="scss" scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-background-light);
  }
</style>
