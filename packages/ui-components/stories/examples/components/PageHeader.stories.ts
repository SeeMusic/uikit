import { PageHeader } from '../../../lib/components';
import { ElMessage, ElButton } from 'element-plus';
import { pageHeaderCode } from '../demo'
import type { Meta } from '@storybook/vue3';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/页头 PageHeader',
  argTypes: {
    title: {
      type: 'string',
      description: '标题'
    },
    back: {
      type: 'string',
      description: 'Route 对象或 router.go 参数'
    },
    opt: {
      description: '顶部操作区域插槽',
      type: 'string',
      target: 'slot',
      table: {
        category: 'Slots',
        type: {
          summary: 'html'
        }
      }
    }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: pageHeaderCode
      }
    }
  }
} as Meta<typeof PageHeader>;

export default meta;

export const Custom = {
  name: '自定义',
  render: (args: Record<string, string>) => ({
    components: { PageHeader, ElButton },
    setup() {
      return { args };
    },
    methods: {
      clickHandler() {
        ElMessage.success('click me...');
      }
    },
    template: `
      <PageHeader v-bind="args">
        <template #opt>
          <ElButton
            type="primary"
            @click="clickHandler"
          >
            + 新增
          </ElButton>
        </template>
      </PageHeader>
    `
  }),
  args: {
    title: '客户详情页',
    back: '-1',
    opt: '<ElButton type="primary"> + 新增 </ElButton>'
  }
};
