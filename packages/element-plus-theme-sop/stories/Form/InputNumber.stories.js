import { ElInputNumber } from 'element-plus';

export default {
  title: 'Form/Input Number 数字输入框',
  argTypes: {
    size: {
      options: ['large', 'default', 'small'],
      control: {
        type: 'radio',
      },
      description: '计数器尺寸',
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
    controls: {
      control: { type: 'boolean' },
      description: '是否使用控制按钮',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
  },
};

const Template = (args) => ({
  components: {
    ElInputNumber,
  },
  data() {
    return {
      value: 0,
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElInputNumber
      v-model="value"
      v-bind="args"
    />
  `,
});

export const Overview = Template.bind({});
Overview.args = {
  size: 'default',
  disabled: false,
  controls: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithOutControls = Template.bind({});
WithOutControls.args = {
  controls: false,
};
