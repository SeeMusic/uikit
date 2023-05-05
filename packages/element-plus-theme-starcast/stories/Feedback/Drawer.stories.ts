import { ElDrawer, ElButton } from 'element-plus';

import type { StoryObj, Meta } from "@storybook/vue3";

const meta: Meta<typeof ElDrawer> = {
  title: 'Feedback/Drawer 抽屉',
  component: ElDrawer,
}

export default meta;

type Story = StoryObj<typeof ElDrawer>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElDrawer,
      ElButton,
    },
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      showDrawer() {
        this.isShow = true;
      },
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDrawer">打开常规抽屉</ElButton>
        <ElDrawer
          title="抽屉标题"
          v-model="isShow"
          :size="540"
        >
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
        </ElDrawer>
      </div>
    `,
  })
};

export const FooterSlot: Story = {
  render: (args) => ({
    components: {
      ElDrawer,
      ElButton,
    },
    data() {
      return {
        isShow: false,
      };
    },
    methods: {
      showDrawer() {
        this.isShow = true;
      },
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDrawer">打开带 footer 的抽屉</ElButton>
        <ElDrawer
          title="抽屉标题"
          v-model="isShow"
          :size="540"
        >
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>

          <template #footer>
            <ElButton>退出</ElButton>
            <ElButton type="primary">递交</ElButton>
          </template>
        </ElDrawer>
      </div>
    `,
  })
};
