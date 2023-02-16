import { SopDataTable, SopDataTableItem, SopCard } from '../../../lib/components';
import type { Meta, StoryObj } from '@storybook/vue3';
import { sopDataTableCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/Layout 容器 SopDataTable',
  component: SopDataTable,
  argTypes: {
    title: {
      type: 'string',
      description: '标题'
    },
    cols: {
      type: 'number',
      description: '栅格的列数'
    },
    gap: {
      type: 'number',
      description: '栅格的间隔'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopDataTableCode
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SopDataTable>;

export default meta;

type Story = StoryObj<typeof SopDataTable>;

export const Custom: Story = {
  name: '自定义',
  render: (args: unknown ) => ({
    components: {
      SopDataTable,
      SopDataTableItem,
      SopCard
    },
    setup() {
      return { args };
    },
    template: `
      <SopCard>
        <SopDataTable v-bind="args">
          <SopDataTableItem label="label-1">内容1...</SopDataTableItem>
          <SopDataTableItem label="label-2">内容2...</SopDataTableItem>
          <SopDataTableItem label="label-3">内容3...</SopDataTableItem>
          <SopDataTableItem label="label-4">内容4...</SopDataTableItem>
        </SopDataTable>
      </SopCard>
    `
  }),
  args: {
    cols: 2,
    gap: 16
  }
};
