import { SopTheHeader } from '../../../lib/components';
import { ElMessage, ElPopover, ElButton } from 'element-plus';
import type { Meta, StoryObj } from '@storybook/vue3';
import { sopTheHeaderCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/页头 SopTheHeader',
  component: SopTheHeader,
  argTypes: {
    logo: {
      type: 'string',
      description: 'logo'
    },
    subTitle: {
      type: 'string',
      description: '文字或者图片'
    },
    rightOpt: {
      description: '右侧插槽',
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
    logoClick: {
      description: '右侧插槽',
      control: {
        type: 'text'
      },
      table: {
        category: 'Events',
        type: 'text'
      }
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopTheHeaderCode
      }
    }
  },
  tags: ['autodocs']
} as Meta<typeof SopTheHeader>;

export default meta;

type Story = StoryObj<typeof SopTheHeader>;

export const Custom: Story = {
  name: '自定义',
  render: (args: unknown ) => ({
    components: { SopTheHeader, ElPopover, ElButton },
    setup() {
      return { args };
    },
    methods: {
      clickHandler() {
        ElMessage.success('点击 logo...')
      }
    },
    template: `
      <SopTheHeader
        style="position: initial"
        v-bind="args"
        @logo-click="clickHandler"
      >
        <template #rightOpt>
          <ElPopover trigger="click" width="272px">
            <template #reference>
              <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #0040FF;">
              </div>
            </template>
            <ElButton>退出登录</ElButton>
          </ElPopover>
        </template>
      </SopTheHeader>
    `
  }),
  args: {
    logo: 'https://pics.kanjian.com/favicon/kanjian-logo-blue@2x.png',
    subTitle: '版权管理后台',
  }
};
