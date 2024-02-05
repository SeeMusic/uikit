import { ElPopconfirm, ElButton } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElPopconfirm> = {
  title: 'Feedback/Popconfirm 气泡确认框'
};

export default meta;

type Story = StoryObj<typeof ElPopconfirm>;

export const Overview:Story = {
  render: (args) => ({
    components: {
      ElPopconfirm,
      ElButton
    },
    setup() {
      return { args };
    },
    template: `
      <ElPopconfirm
        cancel-button-type="default"
        hide-icon
        title="Are you sure to delete this?"
        :width="180"
      >
        <template #reference>
          <ElButton>Confirm</ElButton>
        </template>
      </ElPopconfirm>
    `
  })
};
