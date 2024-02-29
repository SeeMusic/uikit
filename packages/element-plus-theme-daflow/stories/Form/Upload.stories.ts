import { ElUpload, ElForm } from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElUpload> = {
  title: 'Form/Upload 上传',
  component: ElUpload,
  args: {
    drag: true
  }
};

export default meta;

type Story = StoryObj<typeof ElUpload>;

const OverviewTemplate = (args) => ({
  components: {
    ElForm,
    ElUpload
  },
  data() {
    return {
    };
  },
  computed: {
  },
  setup() {
    return { args };
  },
  template: `
    <ElForm size="large">
      <ElUpload
        v-bind="args"
      >
        <template #default>
          Default Slot Content
        </template>

        <template #tip>
          <div>Tips Slot</div>
        </template>
      </ElUpload>
    </ElForm>
  `
});

export const Overview:Story = {
  render: OverviewTemplate,
  args: {
    drag: true,
    showFileList: false
  }
};
