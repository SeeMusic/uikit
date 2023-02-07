import { ElMessage, ElButton } from 'element-plus';

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElMessage> = {
  title: 'Feedback/Message 弹出框',
}

export default meta;

type Story = StoryObj<typeof ElMessage>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElButton,
    },
    setup() {
      return { args };
    },
    methods: {
      openError() {
        ElMessage.error({
          showClose: true,
          message: '失败信息文本'
        });
      },
      openSuccess() {
        ElMessage.success('成功信息文本')
      },
    },
    template: `
      <ElButton @click="openError">显示失败信息</ElButton>
      <ElButton @click="openSuccess">显示成功信息</ElButton>
    `,
  })
}
