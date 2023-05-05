/**
 * TODO
 *
 * 点击后鼠标移出，颜色需要重置（目前 active 在离开后不会取消）
 */

import { ElButton } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElButton> = {
  title: 'Basic/Button 按钮',
  component: ElButton,
  argTypes: {
    type: {
      control: { type: 'select'},
      options: ['primary', undefined],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default'],
    },
  },
  args: {
    disabled: false,
    text: false,
  },
}

export default meta;

type Story = StoryObj<typeof ElButton>;

export const Overview: Story = {
  render: (args) => ({
    components: { ElButton },
    setup() {
      return { args };
    },
    template: `
      <ElButton
        v-bind="args"
      >
        按钮
      </ElButton>
    `,
  }),
}
