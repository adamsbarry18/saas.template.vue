import { UVerticalSubStepper } from '@/modules/ui';
import { ref } from 'vue';

export default {
  title: 'Navigation/VerticalSubStepper',
};

export const VerticalSubStepper = () => ({
  components: {
    UVerticalSubStepper,
  },
  template: `
    <div style='background-color: var(--color-background-white); display: flex; flex-direction: column; padding: 160px'>
      <u-vertical-sub-stepper
        :steps="subSteps"
        :active-step-id="activeStepId"
        @sub-step-change="onSubStepChange"
      />
    </div>
  `,
  setup() {
    const activeStepId = ref(2);

    const subSteps = [
      { id: 1, label: 'Paramétrage', status: 'SUCCESS' },
      {
        id: 2,
        label: 'Conception',
        status: 'ERROR',
        message: "Tooltip message pour indiquer la raison de l'erreur",
      },
      { id: 3, label: 'Personnalisation', status: 'TODO', disabled: true },
      { id: 4, label: 'Simulation', status: 'WARNING' },
      { id: 5, label: 'Empty', status: 'EMPTY' },
    ];
    const onSubStepChange = (step: { id: number }) => {
      console.log('Sub-step changed:', step.id);
    };
    return {
      activeStepId,
      subSteps,
      onSubStepChange,
    };
  },
});
