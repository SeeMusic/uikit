// TODO
// custom control with optional default value
// pop confirm 中默认使用了 small 且不可自定义 size
import { ElButton } from 'element-plus';

export default {
  title: 'Basic/Button 按钮',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      description: '类型',
      control: { type: 'select' },
      options: ['primary', ''],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
    },
    size: {
      control: { type: 'select' },
      description: '尺寸',
      options: ['large', '', 'small'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '禁用',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '目前设计规范中， `size` 只用到了 `default` 和 `small` 两种; `type` 只用到了 `primary` 和 `default` 两种。暂时不对其余属性做额外兼容测试',
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
