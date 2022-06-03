import { ElTabs, ElTabPane } from "element-plus";

export default {
  title: 'Navigation/Tabs 标签页',
  argTypes: {
    type: {
      description: '类型',
      control: { type: 'select' },
      options: ['card', '', 'border-card'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    tabPosition: {
      description: 'Tab 位置',
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'top',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'element-ui 中使用了 `ElTabs class="outter"` 实现多层嵌套的外层 tab 样式， element-plus 中直接使用 `ElTabs type="card"` 即可',
      },
    },
  },
};

const Template = (args) => ({
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
});

export const Overview = Template.bind({});
