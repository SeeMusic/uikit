/**
 * TODO
 *
 * 1. type：warning | danger 样式
 * 2. round、circle、loading 属性支持及样例
 */

import { ElButton } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElButton> = {
  title: 'Basic/Button 按钮',
  component: ElButton,
  parameters: {
    docs: {
      description: {
        component: '目前设计规范中， `size` 只用到了 `default` 和 `small` 两种; `type` 只用到了 `primary` 和 `default` 两种。暂时不对其余属性做额外兼容测试',
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['primary', ''],
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
      description: 'ElPopconfirm 中的操作按钮，size 设置为 small，且不可修改，只能通过覆写 CSS 的方式统一',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
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
  args: {
    disabled: false,
  },
}
