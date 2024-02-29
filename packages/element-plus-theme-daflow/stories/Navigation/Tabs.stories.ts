import { ElTabs, ElTabPane } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElTabs> = {
  title: 'Navigation/Tabs 标签页',
  component: ElTabs,
  argTypes: {
    type: {
      description: '类型',
      control: { type: 'select' },
      options: ['card', undefined]
    },
    tabPosition: {
      description: 'Tab 位置',
      control: { type: 'select' },
      options: ['top', 'left']
    }
  },
  args: {
    type: 'card',
    tabPosition: 'top'
  }
};

export default meta;

type Story = StoryObj<typeof ElTabs>;

const NormalTemplate = (args) => ({
  components: {
    ElTabs,
    ElTabPane
  },
  data() {
    return {
      activeTab: 'first'
    };
  },
  setup() {
    return { args };
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
});

export const TabTop:Story = {
  render: NormalTemplate,
  args: {
    type: 'card',
    tabPosition: 'top'
  }
};

export const TabLeft:Story = {
  render: NormalTemplate,
  args: {
    type: undefined,
    tabPosition: 'left'
  }
};
