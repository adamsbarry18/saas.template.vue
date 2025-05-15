<template>
  <footer class="landing-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Section Logo et Description -->
        <div class="footer-section about-us">
          <div class="logo-container">
            <icon-base icon="icon-store" :size="30" color="var(--color-primary-400)" />
            <span class="logo-text">ShopEase</span>
          </div>
          <p class="description">
            Votre boutique en ligne préférée pour des produits de qualité à des prix imbattables.
          </p>
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><icon-base icon="icon-facebook" size="20" /></a>
            <a href="#" aria-label="Twitter" style="position: relative; top: 5px"
              ><icon-base icon="icon-twitter" size="23"
            /></a>
            <a href="#" aria-label="Instagram" style="position: relative; top: 5px"
              ><icon-base icon="icon-instagram" size="23"
            /></a>
            <a href="#" aria-label="Pinterest"><icon-base icon="icon-pinterest" size="20" /></a>
          </div>
        </div>

        <!-- Section Boutique -->
        <div class="footer-section links-section">
          <h3 class="section-title">Boutique</h3>
          <ul>
            <li><a href="#">Tous les produits</a></li>
            <li><a href="#">Nouveautés</a></li>
            <li><a href="#">Meilleures ventes</a></li>
            <li><a href="#">Offres spéciales</a></li>
            <li><a href="#">Accessoires</a></li>
          </ul>
        </div>

        <!-- Section Informations -->
        <div class="footer-section links-section">
          <h3 class="section-title">Informations</h3>
          <ul>
            <li><a href="#">À propos de nous</a></li>
            <li><a href="#">Livraison</a></li>
            <li><a href="#">Politique de retour</a></li>
            <li><a href="#">Conditions générales</a></li>
            <li><a href="#">Confidentialité</a></li>
          </ul>
        </div>

        <!-- Section Contact -->
        <div class="footer-section contact-section">
          <h3 class="section-title">Contact</h3>
          <ul>
            <li class="contact-item">
              <icon-base icon="icon-pin" size="18" class="contact-icon" />
              <span>123 Rue du Commerce, 75001 Paris, France</span>
            </li>
            <li class="contact-item">
              <icon-base icon="icon-phone" size="18" class="contact-icon" />
              <span>+33 1 23 45 67 89</span>
            </li>
            <li class="contact-item">
              <icon-base icon="icon-email" size="18" class="contact-icon" />
              <span>contact@shopease.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© {{ currentYear }} ShopEase. Tous droits réservés.</p>
        <div class="payment-icons">
          <!-- Les images de paiement peuvent être des SVGs ou des composants IconBase si disponibles -->
          <img src="https://via.placeholder.com/40x25/ffffff/000000?text=Visa" alt="Visa" />
          <img src="https://via.placeholder.com/40x25/ffffff/000000?text=MC" alt="Mastercard" />
          <img src="https://via.placeholder.com/40x25/ffffff/000000?text=PayPal" alt="PayPal" />
          <img src="https://via.placeholder.com/40x25/ffffff/000000?text=APay" alt="Apple Pay" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { IconBase } from '@/modules/ui';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
  .landing-footer {
    background-color: var(--color-grey-900);
    color: var(--color-grey-400);
    padding: 40px 20px 20px;

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .footer-section {
      .section-title {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--color-white, #ffffff);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li a {
          color: var(--color-grey-400, #b3b3b3);
          text-decoration: none;
          &:hover {
            color: var(--color-white, #ffffff);
            text-decoration: underline;
          }
        }
      }
    }

    .about-us {
      .logo-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;

        .logo-text {
          font-size: 1.25rem;
          font-weight: bold;
          color: var(--color-white, #ffffff);
        }
      }
      .description {
        margin-bottom: 1rem;
        line-height: 1.6;
      }
      .social-icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        a {
          color: var(--color-grey-400);
          &:hover {
            color: var(--color-whitef);
          }
        }
      }
    }

    .contact-section {
      ul {
        gap: 0.75rem;
      }
      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        .contact-icon {
          margin-top: 3px;
          color: var(--color-primary-400);
          flex-shrink: 0;
        }
        span {
          line-height: 1.6;
        }
      }
    }

    .footer-bottom {
      border-top: 1px solid var(--color-grey-800);
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
      }

      .copyright {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        @media (min-width: 768px) {
          margin-bottom: 0;
        }
      }

      .payment-icons {
        display: flex;
        gap: 1.5rem;
        img {
          height: 24px;
          filter: grayscale(100%) contrast(0%) brightness(2);
        }
      }
    }
  }
</style>
