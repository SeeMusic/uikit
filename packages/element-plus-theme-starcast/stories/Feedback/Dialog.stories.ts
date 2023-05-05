import { ElDialog, ElButton } from 'element-plus';

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElDialog> = {
  title: 'Feedback/Dialog 对话框',
  component: ElDialog,
}

export default meta;

type Story = StoryObj<typeof ElDialog>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElDialog,
      ElButton,
    },
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      showDialog() {
        this.isShow = true;
      },
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDialog">打开常规弹窗</ElButton>
        <ElDialog
          v-model="isShow"
          title="对话框标题"
          width="540px"
        >
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
        </ElDialog>
      </div>
    `,
  })
};

export const FooterSlot: Story = {
  render: (args) => ({
    components: {
      ElDialog,
      ElButton,
    },
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      showDialog() {
        this.isShow = true;
      },
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDialog">打开带 footer 的弹窗</ElButton>
        <ElDialog
          v-model="isShow"
          title="是否确定创建补充合同？"
          width="540px"
          align-center
        >
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>
          <p>内容</p>

          <template #footer>
            <ElButton
              size="large"
              @click="isShow = false"
            >
              取消
            </ElButton>
            <ElButton
              type="primary"
              size="large"
              @click.prevent
            >
              确定
            </ElButton>
          </template>
        </ElDialog>
      </div>
    `,
  })
};
