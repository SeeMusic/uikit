import { ElPopconfirm, ElButton } from 'element-plus';

export default {
  title: 'Feedback/Popconfirm 气泡确认框',
};

const Template = (args) => ({
  components: {
    ElPopconfirm,
    ElButton,
  },
  setup() {
    return { args };
  },
  template: `
    <ElPopconfirm
      cancel-button-type="default"
      confirm-button-text="继续"
      cancel-button-text="取消"
      hide-icon
      title="删除项目会导致其歌单一并被删除，确认继续吗？"
    >
      <template #reference>
        <ElButton>点击激活</ElButton>
      </template>
    </ElPopconfirm>
  `,
});

export const Overview = Template.bind({});
