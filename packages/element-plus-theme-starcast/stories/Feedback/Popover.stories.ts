import { ElPopover, ElButton } from 'element-plus';

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElPopover> = {
  title: 'Feedback/Popover 弹出框',
}

export default meta;

type Story = StoryObj<typeof ElPopover>;

export const Overview:Story = {
  render: (args) => ({
    components: {
      ElPopover,
      ElButton,
    },
    setup() {
      return { args };
    },
    template: `
      <ElPopover
        placement="bottom"
        title="标题"
        :width="220"
        trigger="click"
        content="内容内容，内容内容，内容内容"
      >
        <template #reference>
          <ElButton>点击激活</ElButton>
        </template>
      </ElPopover>
    `,
  })
}
