import { ElPopover, ElButton } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElPopover> = {
  title: 'Feedback/Popover 弹出框'
};

export default meta;

type Story = StoryObj<typeof ElPopover>;

export const Overview:Story = {
  render: (args) => ({
    components: {
      ElPopover,
      ElButton
    },
    setup() {
      return { args };
    },
    template: `
      <ElPopover
        placement="bottom"
        title="Title"
        :width="200"
        trigger="click"
        content="this is content, this is content, this is content"
      >
        <template #reference>
          <ElButton>点击激活</ElButton>
        </template>
      </ElPopover>
    `
  })
};
