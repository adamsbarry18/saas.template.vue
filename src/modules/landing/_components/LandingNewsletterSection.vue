<template>
  <section class="newsletter-section">
    <div class="container">
      <h2 class="section-title">Abonnez-vous à notre newsletter</h2>
      <p class="section-subtitle">
        Recevez 10% de réduction sur votre première commande et soyez informé de nos offres exclusives.
      </p>

      <form class="newsletter-form" @submit.prevent="handleSubscribe">
        <u-form-input
          v-model="email"
          placeholder="Votre adresse email"
          type="string"
          class="email-input"
          input-name="newsletter-email"
          :error="emailError"
          @blur="validateEmail"
        />
        <u-button type="primary" native-type="submit" class="subscribe-button" size="large">
          S'abonner
        </u-button>
      </form>
      <p v-if="emailError" class="error-message">{{ emailError }}</p>
      <p class="form-footer-text">Nous ne partagerons jamais votre email. Désabonnez-vous à tout moment.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { UFormInput, UButton } from '@/modules/ui';

  const email = ref('');
  const emailError = ref<string>('');
  const emit = defineEmits(['subscribe']);

  const validateEmail = () => {
    if (!email.value) {
      emailError.value = "L'adresse email est requise.";
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.value = "L'adresse email n'est pas valide.";
    } else {
      emailError.value = '';
    }
    return !emailError.value;
  };

  const handleSubscribe = () => {
    if (validateEmail()) {
      emit('subscribe', email.value);
      // email.value = ''; // Optionnel: réinitialiser après soumission
      alert(`Merci de vous être abonné avec ${email.value}! (Simulation)`);
    }
  };
</script>

<style lang="scss" scoped>
  .newsletter-section {
    padding: 40px 20px;
    background-color: var(--color-primary-600);
    color: var(--color-white);

    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      color: var(--color-primary-100);
      margin-bottom: 2rem;
      font-size: 1.125rem;
    }

    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: center;
      max-width: 500px;
      margin: 0 auto 1rem;

      @media (min-width: 640px) {
        flex-direction: row;
        align-items: center;
        gap: 0;
      }

      .email-input {
        flex-grow: 1;
        :deep(input.default-type-input) {
          border-radius: 9999px;
          padding-left: 1.5rem;
          min-height: 48px;

          @media (min-width: 640px) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      }

      .subscribe-button {
        width: 100%;

        @media (min-width: 640px) {
          width: auto;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
    .error-message {
      color: var(--color-red-300);
      font-size: 0.875rem;
      margin-top: -0.5rem;
      margin-bottom: 1rem;
    }

    .form-footer-text {
      color: var(--color-primary-200);
      font-size: 0.875rem;
      margin-top: 1rem;
    }
  }
</style>
