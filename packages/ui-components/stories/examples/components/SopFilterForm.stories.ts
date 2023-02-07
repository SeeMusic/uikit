import { SopFilterForm, SopDataTable, SopDataTableItem } from '../../../lib/components';
import { ElMessage, ElInput, ElButton } from 'element-plus';
import type { Meta } from '@storybook/vue3';
import { sopFilterFormCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/Form 容器 SopFilterForm',
  component: SopFilterForm,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopFilterFormCode
      }
    }
  },
  tags: ['autodocs']
} as Meta<typeof SopFilterForm>;

export default meta;


export const Custom = {
  name: '自定义',
  render: (args: Record<string, string>) => ({
    components: {
      SopFilterForm,
      SopDataTable,
      SopDataTableItem,
      ElInput,
      ElButton
    },
    setup() {
      return { args };
    },
    methods: {
      clickHandler() {
        ElMessage.success('click me...');
      }
    },
    template: sopFilterFormCode
  }),
  args: {
    opt: '<ElButton type="primary">查询</ElButton>'
  }
};
