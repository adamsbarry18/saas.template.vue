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
          <span>E-commerce</span>
        </router-link>
      </template>
    </u-nav-bar>

    <landing-hero-section @shop-now="navigateToShop" @learn-more="learnMore" />

    <landing-features-section />

    <landing-featured-products
      :products="featuredProducts"
      @add-product-to-cart="addProductToCart"
      @view-all-products="viewAllProducts"
    />

    <landing-testimonials-section :testimonials="testimonials" />

    <landing-newsletter-section @subscribe="handleNewsletterSubscription" />

    <landing-footer />
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import UNavBar from '@/modules/ui/layout/UNavBar.vue';
  import { NavItem } from '@/modules/ui/layout/navbar.types';
  import {
    LandingFooter,
    LandingHeroSection,
    LandingNewsletterSection,
    LandingFeaturesSection,
    LandingFeaturedProducts,
    LandingTestimonialsSection,
  } from '@/modules/landing/_components/index';
  import { useRouter } from 'vue-router';

  // État du panier (exemple)
  const cartItems = ref([
    { id: 1, name: 'Produit 1', price: 10 },
    { id: 2, name: 'Produit 2', price: 20 },
  ]);

  const searchQuery = ref(''); // Added for search bar

  const router = useRouter();

  const featuredProducts = ref([
    {
      id: 'prod1',
      imageUrl:
        'https://images.unsplash.com/photo-1546868871-7041f2d55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      name: 'Montre Connectée Pro',
      isNew: true,
      rating: 4.5,
      reviewCount: 128,
      currentPrice: 199.99,
      originalPrice: 249.99,
    },
    {
      id: 'prod2',
      imageUrl:
        'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      name: 'Casque Audio Premium',
      rating: 5,
      reviewCount: 256,
      currentPrice: 149.99,
    },
    {
      id: 'prod3',
      imageUrl:
        'https://images.unsplash.com/photo-1601784551446-66c9e1e3b033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      name: 'Appareil Photo 4K',
      promoLabel: 'Promo',
      rating: 4,
      reviewCount: 89,
      currentPrice: 349.99,
      originalPrice: 429.99,
    },
    {
      id: 'prod4',
      imageUrl:
        'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      name: 'Laptop Ultra Léger',
      rating: 4.5,
      reviewCount: 312,
      currentPrice: 899.99,
    },
  ]);

  const testimonials = ref([
    {
      id: 't1',
      rating: 5,
      text: "J'ai commandé un casque audio et je suis impressionné par la qualité sonore. La livraison a été ultra rapide et l'emballage soigné. Je recommande vivement!",
      authorImageUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
      authorName: 'Sophie Martin',
      authorLocation: 'Paris, France',
    },
    {
      id: 't2',
      rating: 5,
      text: "Service client exceptionnel! J'ai eu un problème avec ma commande et tout a été résolu en moins de 24h. Les produits sont de très bonne qualité.",
      authorImageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      authorName: 'Thomas Dubois',
      authorLocation: 'Lyon, France',
    },
    {
      id: 't3',
      rating: 4.5,
      text: 'Ma montre connectée est arrivée avant la date prévue. Elle correspond parfaitement à la description et fonctionne impeccablement. Très satisfait!',
      authorImageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      authorName: 'Émilie Leroy',
      authorLocation: 'Marseille, France',
    },
  ]);

  // Définition des éléments de la barre de navigation et des actions
  const navItems = computed<NavItem[]>(() => [
    { id: 'home', label: 'Accueil', type: 'link', value: '/' }, // Assuming '/' is the route for home
    { id: 'shop', label: 'Boutique', type: 'link', value: '/shop' }, // Assuming '/shop' is the route for shop
    { id: 'news', label: 'Nouveautés', type: 'link', value: '/news' }, // Assuming '/news' is the route for news
    { id: 'contact', label: 'Contact', type: 'link', value: '/contact' }, // Assuming '/contact' is the route for contact
    {
      id: 'search',
      label: 'Rechercher',
      type: 'search', // Changed type to search
      align: 'right',
      action: 'search', // Changed action to search
      props: { placeholder: 'Rechercher...', modelValue: searchQuery.value, overflowSideShow: true }, // Added props for search bar and overflowSideShow
    },
    {
      id: 'cart',
      label: 'Panier',
      type: 'badge',
      icon: 'icon-shopping',
      align: 'right',
      action: 'cart-click',
      count: cartItems.value.length,
      props: { text: true, circle: true },
    },
    {
      id: 'login',
      label: 'Connexion',
      type: 'button',
      icon: 'icon-user',
      align: 'right',
      action: 'login-click',
      props: { text: true },
    },
    {
      id: 'signup',
      label: 'Créer un compte',
      type: 'button',
      icon: 'icon-account',
      align: 'right',
      action: 'signup-click',
      props: { text: true },
    },
  ]);

  const handleNavSelect = (value: string) => {
    console.log('Nav selected:', value);
    // alert(`Navigation vers: ${value} (À implémenter)`);
    // Exemple: router.push(value);
  };

  const handleActionClick = (action: string, value?: any) => {
    console.log('Action clicked:', action, value);
    if (action === 'search') {
      // Handle search action
      console.log('Search initiated with query:', value);
      alert(`Recherche lancée pour : ${value} (À implémenter)`);
      // Implement search logic here
    } else if (action === 'search-update') {
      // Handle search input update
      searchQuery.value = value;
      console.log('Search query updated:', searchQuery.value);
    } else if (action === 'cart-click') {
      handleCart();
    } else if (action === 'login-click') {
      redirectToLogin();
    } else if (action === 'signup-click') {
      redirectToSignup();
    }
    // Handle other actions as needed
  };

  const handleCart = () => {
    console.log('Cart clicked');
    alert('Panier cliqué ! (À implémenter)');
  };

  const redirectToLogin = async () => {
    await router.push({ name: 'login' });
  };

  const redirectToSignup = async () => {
    await router.push({ name: 'signup' });
  };

  const navigateToShop = () => {
    alert('Navigation vers la boutique (À implémenter)');
  };

  const learnMore = () => {
    alert('En savoir plus (À implémenter)');
  };

  const addProductToCart = (productId: string | number) => {
    console.log('Add product to cart in LandingPage:', productId);
    // Logique pour ajouter au panier global de l'application
    const product = featuredProducts.value.find((p) => p.id === productId);
    if (product) {
      // Simuler l'ajout au panier
      cartItems.value.push({
        id: cartItems.value.length + 1,
        name: product.name,
        price: product.currentPrice,
      });
      alert(`${product.name} ajouté au panier !`);
    }
  };

  const viewAllProducts = () => {
    alert('Voir tous les produits (À implémenter)');
    // router.push('/shop');
  };

  const handleNewsletterSubscription = (email: string) => {
    console.log('Newsletter subscription for:', email);
    alert(`Merci de vous être abonné avec ${email} ! (Simulation)`);
  };
</script>

<style lang="scss" scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--color-background-light);
  }
  .login-dialog,
  .signup-dialog {
    :deep(.u-dialog-content) {
      padding: 0;
      overflow-y: auto;
    }
    :deep(.u-dialog-body) {
      display: block;
      width: auto;
      height: auto;
      max-height: 90vh;
    }
  }
</style>
