import { ElButton, ElMessage, ElSkeleton } from 'element-plus';
import { SopCard } from '../../../lib/components';
import type { Meta } from '@storybook/vue3';
import { sopCardCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/卡片 SopCard',
  component: SopCard,
  argTypes: {
    title: {
      type: 'string',
      description: '标题'
    },
    default: {
      description: '默认插槽',
      control: {
        type: 'text'
      },
      table: {
        category: 'Slots',
        type: {
          summary: 'html'
        }
      }
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
    },
    footer: {
      description: '底部操作区域插槽',
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
        code: sopCardCode
      }
    }
  },
  tags: ['autodocs']
} as Meta<typeof SopCard>;

export default meta;

// type Story = StoryObj<typeof SopCard>;

export const Custom = {
  name: '自定义',
  render: (args: Record<string, string> ) => ({
    components: { SopCard, ElButton, ElSkeleton },
    setup() {
      return { args };
    },
    methods: {
      clickHandler() {
        ElMessage.success('click me...');
      }
    },
    template: `
      <SopCard v-bind="$props.title">
        <template v-if="${'opt' in args}" #opt>
          <ElButton type="primary" @click="clickHandler">操作</ElButton>
        </template>
        <template v-if="${'default' in args}" #default>
          <ElSkeleton :row="5" animated />
        </template>
        <template v-if="${'footer' in args}" #footer>
          <ElButton type="primary" @click="clickHandler">提交</ElButton>
        </template>
      </SopCard>
    `
  }),
  args: {
    title: '卡片标题',
    default: '<ElSkeleton :row="5" animated />',
    opt: '<ElButton type="primary">操作</ElButton>',
    footer: '<ElButton type="primary">提交</ElButton>'
  }
};
