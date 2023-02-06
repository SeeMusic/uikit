import { SopCover } from '../../../lib/components';
import { ElMessage } from 'element-plus';
import type { Meta, StoryObj } from '@storybook/vue3';
import { sopCoverCode } from '../demo';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/头像 SopCover',
  component: SopCover,
  argTypes: {
    type: {
      control: { type: 'select' },
      options:  [
        'album',
        'track',
        'cp',
        'customer',
        'contract',
        'dsp',
        'playlist-project',
        'playlist'
      ],
      description: '类型',
      defaultValue: 'album'
    },
    src: {
      type: 'string',
      description: '远程图片地址'
    },
    width: {
      type: 'number',
      description: '图片宽度'
    },
    height: {
      type: 'number',
      description: '图片高度'
    },
    placeholder: {
      type: 'string',
      description: 'src 不存在时显示内容'
    },
    isCoverEdit: {
      type: 'boolean',
      description: '是否可编辑图片'
    },
    coverEdit: {
      type: 'function',
      description: 'isCoverEdit 为 true 时需要传递的上传图片方法'
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: sopCoverCode
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SopCover>;

export default meta;

type Story = StoryObj<typeof SopCover>;

export const Custom: Story = {
  name: '自定义',
  render: (args: unknown ) => ({
    components: { SopCover },
    setup() {
      return { args };
    },
    template: `
      <SopCover v-bind="args" />
    `
  }),
  args: {
    type: 'album',
    width: 60,
    height: 60,
    isCoverEdit: true,
    coverEdit: () => ElMessage.success('点击上传')
  }
};
