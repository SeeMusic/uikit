import { ElButton } from 'element-plus';

export default {
  title: 'Basic/Button 按钮',
  argTypes: {
    type: {
      control: { type: 'select' },
      // description: '类型',
      options: ['primary', 'default'],
      // table: {
      //   type: {
      //     summary: 'string',
      //   },
      //   defaultValue: {
      //     summary: 'primary',
      //   },
      // },
    },
    size: {
      control: { type: 'select' },
      // description: '尺寸',
      options: ['large', 'default', 'small'],
      // table: {
      //   type: {
      //     summary: 'string',
      //   },
      //   defaultValue: {
      //     summary: 'default',
      //   },
      // },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '目前设计规范中， `size` 只用到了 `default` 和 `mini` 两种; ElementUI 自带的弹窗混用了 mini 和 small，自定义样式中直接覆写统一',
      },
    },
  },
};

const Template = (args) => ({
  components: {
    ElButton,
  },
  setup() {
    return { args };
  },
  template: `
    <ElButton
      v-bind="args"
    >
      按钮
    </ElButton>
  `,
});

export const Overview = Template.bind({});
Overview.args = {
  type: 'primary',
  size: 'default'
};
