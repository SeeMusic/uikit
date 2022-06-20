// TODO
// * MD 备注导入 import InputMD from './Input.md';
// * 禁止参数（静态设定）
// * prefix、suffix 两种 slot
import { ElInput } from 'element-plus';

export default {
  title: 'Form/Input 输入框',
  argTypes: {
    type: {
      options: ['text', 'password', 'textarea'],
      control: {
        type: 'radio',
      },
      description: '类型',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
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
  },
};

const Template = (args) => ({
  components: {
    ElInput,
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    placeholder() {
      return args.type === 'password' ? '请输入密码' : '请输入内容';
    },
  },
  setup() {
    return { args };
  },
  template: `
    <ElInput
      :placeholder="placeholder"
      v-model="value"
      v-bind="args"
    />
  `,
});

export const Overview = Template.bind({});
Overview.args = {
  type: 'text',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: 'textarea',
  autosize: {
    minRows: 3,
    maxRows: 6,
  }
};

const SlotTemplate = () => ({
  components: {
    ElInput,
  },
  data() {
    return {
      value: '',
    };
  },
  template: `
    <ElInput
      placeholder="请输入内容"
      v-model="value"
    >
      <template #prepend>Https://</template>
      <template #append>.com</template>
    </ElInput>
  `,
});


export const Slot = SlotTemplate.bind({});
