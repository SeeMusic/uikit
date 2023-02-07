import { SopStatus } from '../../../lib/components';
import type { Meta, StoryObj } from '@storybook/vue3';
import { sopStatusCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/状态 SopStatus',
  component: SopStatus,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'warning', 'info', 'danger', 'all', 'success'],
      description: '类型',
      defaultValue: 'success'
    },
    text: {
      description: '内容',
      defaultValue: '成功'
    },
    color: {
      control: 'color',
      defaultValue: 'pink',
      description: '支持16进制、Rgb、单词'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopStatusCode
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SopStatus>;

export default meta;

type Story = StoryObj<typeof SopStatus>;

export const Custom: Story = {
  name: '自定义',
  render: (args: unknown ) => ({
    components: { SopStatus },
    setup() {
      return { args };
    },
    template: `
      <SopStatus v-bind="args" />
    `
  }),
  args: {
    type: 'all',
    text: '信息'
  }
};
