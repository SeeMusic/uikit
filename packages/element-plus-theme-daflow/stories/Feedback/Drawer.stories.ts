import { ElDrawer, ElButton } from 'element-plus';

import type { StoryObj, Meta } from '@storybook/vue3';

const meta: Meta<typeof ElDrawer> = {
  title: 'Feedback/Drawer 抽屉',
  component: ElDrawer
};

export default meta;

type Story = StoryObj<typeof ElDrawer>;

export const Overview: Story = {
  render: (args) => ({
    components: {
      ElDrawer,
      ElButton
    },
    data() {
      return {
        isShow: false
      };
    },
    methods: {
      showDrawer() {
        this.isShow = true;
      }
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDrawer">打开常规抽屉</ElButton>
        <ElDrawer
          title="Title"
          v-model="isShow"
          :modal="false"
          direction="ltr"
        >
          <p>抽屉内容</p>
          <p>抽屉内容</p>
          <p>抽屉内容</p>
        </ElDrawer>
      </div>
    `
  })
};

export const FooterSlot: Story = {
  render: (args) => ({
    components: {
      ElDrawer,
      ElButton
    },
    data() {
      return {
        isShow: false
      };
    },
    methods: {
      showDrawer() {
        this.isShow = true;
      }
    },
    setup() {
      return { args };
    },
    template: `
      <div>
        <ElButton @click="showDrawer">打开带 footer 的抽屉</ElButton>
        <ElDrawer
          title="Title"
          v-model="isShow"
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
            <ElButton size="large">Cancel</ElButton>
            <ElButton type="primary" size="large">Submit</ElButton>
          </template>
        </ElDrawer>
      </div>
    `
  })
};
