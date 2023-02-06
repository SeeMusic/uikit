import { SopDataTable, SopDataTableItem } from '../../../lib/components';
import { ElInput } from 'element-plus';
import type { Meta } from '@storybook/vue3';
import { sopDataTableItemCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/Layout 列 SopDataTableItem',
  component: SopDataTableItem,
  argTypes: {
    label: {
      type: 'string',
      description: '标签文本'
    },
    border: {
      type: 'boolean',
      description: '是否显示边框'
    },
    opt: {
      description: '顶部操作区域插槽',
      control: {
        type: 'text'
      },
      table: {
        category: 'Slots',
        type: {
          summary: 'html'
        }
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopDataTableItemCode
      }
    }
  },
  tags: ['autodocs']
} as Meta<typeof SopDataTableItem>;

export default meta;


export const Custom = {
  name: '自定义',
  render: (args: Record<string, string>) => ({
    components: {
      SopDataTable,
      SopDataTableItem,
      ElInput
    },
    setup() {
      return { args };
    },
    template: `
      <SopDataTableItem v-bind="args">
        <ElInput />
      </SopDataTableItem>
    `
  }),
  args: {
    label: '标签文本',
    border: false,
    opt: '<ElInput />'
  }
};
