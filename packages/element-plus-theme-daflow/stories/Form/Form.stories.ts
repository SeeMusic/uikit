import {
  ElForm, ElFormItem, ElInput, ElSelect, ElOption,
  ElRadio, ElRadioGroup, ElRadioButton,
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElTag
} from 'element-plus';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ElForm> = {
  title: 'Form/Form 表单',
  component: ElForm,
  args: {
    disabled: false,
    labelPosition: 'top',
    size: 'large'
  }
};

export default meta;

type Story = StoryObj<typeof ElForm>;

const BasicTemplate = (args) => ({
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElRadio,
    ElRadioGroup,
    ElSelect,
    ElOption,
    ElRadioButton,
    ElButton
  },
  data() {
    return {
      text:'',
      textarea: '',
      isChecked: 1,
      typeId: 1,
      typeIds: []
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElForm
      v-bind="args"
    >
      <ElFormItem
        required
        label="Input"
      >
        <ElInput v-model="text" placeholder="Placeholder" />
      </ElFormItem>

      <ElFormItem
        label="Textarea"
      >
        <ElInput
          v-model="textarea"
          type="textarea"
          :autosize="{
            minRows: 3,
            maxRows: 6,
          }"
        />
      </ElFormItem>

      <ElFormItem
        label="RadioButton"
      >
        <ElRadioGroup
          v-model="isChecked"
          v-bind="args"
        >
          <ElRadioButton
            :label="1"
          >
            Option A
          </ElRadioButton>
          <ElRadioButton
            :label="2"
          >
            Option b
          </ElRadioButton>
          <ElRadioButton
            :label="3"
          >
            Option C
          </ElRadioButton>
        </ElRadioGroup>
      </ElFormItem>

      <ElFormItem
        label="Selector"
      >
        <ElSelect
          v-model="typeId"
          :popper-options="{
            modifiers:[
              {
                name: 'offset',
                options: {
                  offset: [0, 0],
                }
              }
            ]
          }"
        >
          <ElOption label="Option A" :value="1" />
          <ElOption label="Option B" :value="2" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem
        label="Selector - multiple"
      >
        <ElSelect
          v-model="typeIds"
          multiple
          collapse-tags
          :popper-options="{
            modifiers:[
              {
                name: 'offset',
                options: {
                  offset: [0, 0],
                }
              }
            ]
          }"
        >
          <ElOption label="Option A" :value="1" />
          <ElOption label="Option B" :value="2" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem>
        <ElButton
          type="primary"
        >
          Submit
        </ElButton>

        <ElButton>
          Cancel
        </ElButton>
      </ElFormItem>
    </ElForm>
  `
});

export const Overview:Story = {
  render: BasicTemplate
};

const VerticalOptionsTemplate = (args) => ({
  components: {
    ElForm,
    ElFormItem,
    ElRadio,
    ElRadioGroup,
    ElCheckbox,
    ElCheckboxGroup,
    ElTag
  },
  data() {
    return {
      isChecked: 1,
      checkedList: []
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElForm
      v-bind="args"
    >
      <ElFormItem label="单选纵向列表">
        <ElRadioGroup
          v-model="isChecked"
          class="option-list"
        >
          <ElRadio
            :label="1"
          >
            唱片公司或厂牌
          </ElRadio>
          <ElRadio
            :label="2"
          >
            个人工作室
          </ElRadio>
          <ElRadio
            :label="3"
          >
            版权代理机构
          </ElRadio>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem label="多选纵向列表">
        <ElCheckboxGroup
          v-model="checkedList"
          class="option-list"
        >
          <ElCheckbox
            :label="1"
          >
            唱片公司或厂牌
          </ElCheckbox>
          <ElCheckbox
            :label="2"
          >
            个人工作室
          </ElCheckbox>
          <ElCheckbox
            :label="3"
          >
            版权代理机构
          </ElCheckbox>
        </ElCheckboxGroup>
      </ElFormItem>
      <ElFormItem label="用法">
        <div class="el-form-item__more">
          <ElTag>ElRadioGroup</ElTag> 或 <ElTag>ElCheckboxGroup</ElTag> 组件添加 class="option-list" 即可
        </div>
      </ElFormItem>
    </ElForm>
  `
});

export const VerticalOptions:Story = {
  name: '扩展样式 - 纵向选项组',
  render: VerticalOptionsTemplate
};

const FormItemFooterTemplate = (args) => ({
  components: {
    ElForm,
    ElTag,
    ElFormItem,
    ElInput
  },
  data() {
    return {
      username: ''
    };
  },
  setup() {
    return { args };
  },
  template: `
    <ElForm
      v-bind="args"
    >
      <ElFormItem label="姓名">
        <ElInput
          v-model="username"
        />
        <div class="el-form-item__more">
          3-5 字符，必填
        </div>
      </ElFormItem>
      <ElFormItem label="说明">
        <p><ElTag>ElFormItem</ElTag> 没有设计一个可以放置 "对表单项的描述 / 补充说明" 的地方，如果需要的话，在 <ElTag>ElFormItem</ElTag> 正文下方使用 <ElTag>div class="el-form-item__more"</ElTag> 即可。</p>
      </ElFormItem>
    </ElForm>
  `
});

export const FormItemFooter:Story = {
  name: '扩展样式 - 表单单元项描述区',
  render: FormItemFooterTemplate
};
