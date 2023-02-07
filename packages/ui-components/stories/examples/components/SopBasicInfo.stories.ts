import { SopBasicInfo, SopCover, SopStatus } from '../../../lib/components';
import { ElButton, ElTag } from 'element-plus';
import type { Meta } from '@storybook/vue3';
import { sopBasicInfoCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/基本信息 SopBasicInfo',
  component: SopBasicInfo,
  argTypes: {
    title: {
      type: 'string',
      description: '标题'
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
    cover: {
      description: '头像插槽，推荐使用 SopCover 组件',
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
        code: sopBasicInfoCode
      }
    }
  },
  tags: ['autodocs']
} as Meta<typeof SopBasicInfo>;

export default meta;


export const Custom = {
  name: '自定义',
  render: (args: Record<string, string>) => ({
    components: {
      SopBasicInfo,
      SopCover,
      SopStatus,
      ElButton,
      ElTag
    },
    setup() {
      return { args };
    },
    template: `
      <SopBasicInfo v-bind="args">
        <template #cover>
          <SopCover type="album" width="60" :height="60" />
        </template>

        <span>
          <ElTag>SP</ElTag>
        </span>
        <span>
          <SopStatus type="danger" text="禁用"/>
        </span>
        <span>创建时间：2023-03-03 20:20:20</span>
        <span>更新时间：2023-03-03 20:20:20</span>
        <span>创建人：杨国福麻辣烫</span>

        <template #opt>
          <ElDropdown trigger="click">
            <ElButton type="primary">操作</ElButton>
            <template #dropdown>
              <ElDropdownMenu>
                <ElDropdownItem>启用</ElDropdownItem>
                <ElDropdownItem>禁用</ElDropdownItem>
              </ElDropdownMenu>
            </template>
          </ElDropdown>
        </template>
      </SopBasicInfo>
    `
  }),
  args: {
    title: '九和速格面火率 for 运营手动交付类',
    opt: `<ElDropdown trigger="click">
  <ElButton type="primary">操作</ElButton>
  <template #dropdown>
    <ElDropdownMenu>
      <ElDropdownItem>启用</ElDropdownItem>
      <ElDropdownItem>禁用</ElDropdownItem>
    </ElDropdownMenu>
  </template>
</ElDropdown>`,
    cover: '<SopCover type="album" width="60" :height="60" />',
    default: `
<span>
  <ElTag>SP</ElTag>
</span>
<span>
  <SopStatus type="danger" text="禁用"/>
</span>
<span>创建时间：2023-03-03 20:20:20</span>
<span>更新时间：2023-03-03 20:20:20</span>
<span>创建人：杨国福麻辣烫</span>`
  }
};
