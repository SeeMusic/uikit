import { ElTabs, ElTabPane } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElTabs> = {
  title: 'Navigation/Tabs 标签页',
  component: ElTabs,
  argTypes: {
    type: {
      description: '类型',
      control: { type: 'select' },
      options: ['card', '']
    }
  },
  args: {
    type: 'card'
  }
};

export default meta;

type Story = StoryObj<typeof ElTabs>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElTabs,
      ElTabPane
    },
    setup() {
      return { args };
    },
    data() {
      return {
        activeTab: 'first'
      };
    },
    template: `
      <ElTabs
        v-model="activeTab"
        v-bind="args"
      >
        <ElTabPane
          name="first"
          label="Pending"
        >
          Status: Pending
        </ElTabPane>
        <ElTabPane
          name="second"
          label="Failed"
        >
          Status: Failed
        </ElTabPane>
        <ElTabPane
          name="third"
          disabled
          label="Successful"
        >
          Status: Successful
        </ElTabPane>
        <ElTabPane
          name="fourth"
          label="Draft"
        >
          Status: Draft
        </ElTabPane>
      </ElTabs>
    `
  })
};
