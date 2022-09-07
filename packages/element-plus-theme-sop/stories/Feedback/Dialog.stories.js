import { ElDialog, ElButton } from 'element-plus';

export default {
  title: 'Feedback/Dialog 对话框',
};

const Template = (args) => ({
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
      <ElButton @click="showDialog">打开常规抽屉</ElButton>
      <ElDialog
        v-model="isShow"
        title="是否确定创建补充合同？"
        width="480px"
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
});

export const Overview = Template.bind({});

const FooterTemplate = (args) => ({
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
      <ElButton @click="showDialog">打开带 footer 的抽屉</ElButton>
      <ElDialog
        v-model="isShow"
        title="是否确定创建补充合同？"
        width="480px"
        align-center
      >
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>

        <template #footer>
          <ElButton
            @click="isShow = false"
          >
            取消
          </ElButton>
          <ElButton
            type="primary"
            @click.prevent
          >
            确定
          </ElButton>
        </template>
      </ElDialog>
    </div>
  `,
});

export const FooterSlot = FooterTemplate.bind({});

