import { ElPopover, ElButton } from 'element-plus';

export default {
  title: 'Feedback/Popover 弹出框',
};

const Template = (args) => ({
  components: {
    ElPopover,
    ElButton,
  },
  setup() {
    return { args };
  },
  template: `
    <ElPopover
      placement="bottom"
      title="Title"
      :width="200"
      trigger="click"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <ElButton>点击激活</ElButton>
      </template>
    </ElPopover>
  `,
});

export const Overview = Template.bind({});
