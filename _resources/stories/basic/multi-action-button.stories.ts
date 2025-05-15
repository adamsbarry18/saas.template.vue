import { action } from '@storybook/addon-actions';
import { UMultiActionButton } from '@/modules/ui';

export default {
  title: 'Basic/MultiActionButton',
};

export const MultiActionButton = () => ({
  components: {
    UMultiActionButton,
  },
  template: `
    <div style='height:100%;width:100%;padding: 200px'>
      <u-multi-action-button :items="items" />
    </div>
    `,
  data() {
    return {
      items: [
        {
          icon: 'icon-edit',
          label: 'Edit',
          onClick: () => {
            action('select')('Edit');
          },
        },
        {
          icon: 'icon-delete',
          label: 'Delete',
          onClick: () => {
            action('select')('Delete');
          },
        },
        {
          icon: 'icon-duplicate',
          label: 'Duplicate',
          disabled: true,
          onClick: () => {
            action('select')('Duplicate');
          },
        },
      ],
    };
  },
});
