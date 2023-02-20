import { SopTheSidebar } from '../../../lib/components';
import type { Meta, StoryObj } from '@storybook/vue3';


// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/菜单 SopTheSidebar',
  component: SopTheSidebar,
  argTypes: {
    navList: {
      description: '菜单数组',
    },
  },
  tags: ['autodocs']
} satisfies Meta<typeof SopTheSidebar>;

export default meta;

type Story = StoryObj<typeof SopTheSidebar>;

export const Custom: Story = {
  name: '自定义',
  render: (args: unknown ) => ({
    components: { SopTheSidebar },
    setup() {
      return { args };
    },
    template: `
      <SopTheSidebar style="position: initial;" v-bind="args" />
    `
  }),
  args: {
    navList: [
      {
        title: '合同管理',
        iconClass: 'ph:scroll-fill',
        subNav: [
          {
            title: '合同列表',
            href: '/contract/',
          },
        ],
      },
      {
        title: 'DSP管理',
        iconClass: 'ph:git-branch-fill',
        subNav: [
          {
            title: '客户列表',
            href: '/dsp/customer',
          },
          {
            title: 'DSP/SP',
            href: '/dsp/channel',
          },
          {
            title: '项目列表',
            href: '/dsp/project',
          },
          {
            title: '传输链路',
            href: '/dsp/transmit-link',
          },
          {
            title: '虚拟链路',
            href: '/dsp/virtual-link',
          },
        ],
      },
      {
        title: '角色和权限',
        iconClass: 'ph:users-fill',
        subNav: [
          {
            title: '账号管理',
            href: '/user-center/account',
          },
          {
            title: '角色管理',
            href: '/user-center/role',
          },
          {
            title: '权限管理',
            href: '/user-center/permissions',
          },
        ],
      },
    ],
  }
};
