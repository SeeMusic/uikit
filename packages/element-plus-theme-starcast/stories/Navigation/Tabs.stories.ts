import { ElTabs, ElTabPane } from "element-plus";

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElTabs> = {
  title: 'Navigation/Tabs 标签页',
  component: ElTabs,
  argTypes: {
    type: {
      description: '类型',
      control: { type: 'select' },
      options: ['card', 'border-card', undefined],
    },
    tabPosition: {
      description: 'Tab 位置',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  args: {
    type: 'card',
    tabPosition: 'top',
  }
}

export default meta;

type Story = StoryObj<typeof ElTabs>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElTabs,
      ElTabPane,
    },
    setup() {
      return { args };
    },
    data() {
      return {
        activeTab: 'first',
      };
    },
    template: `
      <ElTabs
        v-model="activeTab"
        v-bind="args"
      >
        <ElTabPane
          name="first"
          label="待审核"
        >
          第一个标签页
        </ElTabPane>
        <ElTabPane
          name="second"
          label="审核未通过"
        >
          第二个标签页
        </ElTabPane>
        <ElTabPane
          name="third"
          disabled
          label="审核已通过"
        >
          第三个标签页
        </ElTabPane>
        <ElTabPane
          name="fourth"
          label="审核中"
        >
          第四个标签页
        </ElTabPane>
      </ElTabs>
    `,
  }),
}
