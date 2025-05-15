import { UListColumnSettings, UButton, IconBase } from '@/modules/ui';
import { ref } from 'vue';
export default {
  title: 'Data/ListColumnSettings',
  component: UListColumnSettings,
};

export const ListColumnSettings = () => ({
  components: { UListColumnSettings, UButton, IconBase },
  setup() {
    const listKey = 'testList';
    const columns = ref([
      { key: 'col1', label: 'Column 1' },
      { key: 'col2', label: 'Column 2' },
      { key: 'col3', label: 'Column 3' },
    ]);
    const defaults = ref({
      col1: 'always',
      col2: 'visible',
      col3: 'invisible',
    });
    const columnVisibility = ref({
      'testList@col1': true,
      'testList@col2': true,
      'testList@col3': false,
    });
    const onColumnVisibilityChange = (columnId: string, isVisible: boolean) => {
      console.log(`Column ${columnId} visibility changed to ${isVisible}`);
    };

    const settingsRef = ref<InstanceType<typeof UListColumnSettings> | null>(null);
    const openSettings = () => {
      if (settingsRef.value) {
        settingsRef.value.showSettings?.();
      }
    };
    return {
      listKey,
      columns,
      defaults,
      columnVisibility,
      onColumnVisibilityChange,
      settingsRef,
      openSettings,
    };
  },
  template: `
    <div>
      <h3>List Column Settings Example</h3>
      <icon-base
        icon="icon-settings"
        class="column-settings-button -button-like"
        :size="24"
        @click="openSettings"
      />
      <u-list-column-settings
        ref="settingsRef"
        :list-key="listKey"
        :columns="columns"
        :defaults="defaults"
        @column-visibility-change="onColumnVisibilityChange"
      />
    </div>
  `,
});
