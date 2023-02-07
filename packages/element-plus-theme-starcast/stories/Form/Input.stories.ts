// TODO
// * prefix、suffix 两种 slot
import { ElInput, ElForm } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElInput> = {
  title: 'Form/Input 输入框',
  component: ElInput,
  argTypes: {
    type: {
      options: ['text', 'password', 'textarea'],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    disabled: false,
  },
}

export default meta;

type Story = StoryObj<typeof ElInput>;

const OverviewTemplate = (args) => ({
  components: {
    ElForm,
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
    <ElForm>
      <ElInput
        :placeholder="placeholder"
        v-model="value"
        v-bind="args"
      />
    </ElForm>
  `,
});

export const Overview:Story = {
  render: OverviewTemplate,
  args: {
    type: 'text',
  }
};

export const Disabled:Story = {
  render: OverviewTemplate,
  args: {
    disabled: true,
  }
}

export const Password:Story = {
  render: OverviewTemplate,
  args: {
    type: 'password',
  }
}

export const Textarea:Story = {
  render: OverviewTemplate,
  args: {
    type: 'textarea',
    autosize: {
      minRows: 3,
      maxRows: 6,
    }
  }
}

const SlotTemplate = (args) => ({
  components: {
    ElInput,
  },
  setup() {
    return { args };
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
      v-bind="args"
    >
      <template #prepend>Https://</template>
      <template #append>.com</template>
    </ElInput>
  `,
});

export const Slot:Story = {
  render: SlotTemplate,
}
