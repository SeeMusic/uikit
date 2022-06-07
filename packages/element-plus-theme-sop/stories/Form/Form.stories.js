import {
  ElForm, ElFormItem, ElInput, ElSelect, ElOption,
  ElRadio, ElRadioGroup, ElRadioButton,
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElTag,
} from 'element-plus';

export default {
  title: 'Form/Form 表单',
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '禁用',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};

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
    ElButton,
  },
  data() {
    return {
      text:'',
      textarea: '',
      isChecked: 1,
      typeId: 1,
      typeIds: [],
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
        label="文本"
      >
        <ElInput v-model="text" />
      </ElFormItem>

      <ElFormItem
        label="文本域"
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
        label="选择器"
      >
        <ElSelect
          v-model="typeId"
        >
          <ElOption label="选项 1" :value="1" />
          <ElOption label="选项 2" :value="2" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem
        label="选择器 - 多选"
      >
        <ElSelect
          v-model="typeIds"
          multiple
          collapse-tags
        >
          <ElOption label="选项 1" :value="1" />
          <ElOption label="选项 2" :value="2" />
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
  `,
});

export const Basic = BasicTemplate.bind({});
Basic.args = {
  disabled: false,
  labelPosition: 'top',
};

const VerticalOptionsTemplate = (args) => ({
  components: {
    ElForm,
    ElFormItem,
    ElRadio,
    ElRadioGroup,
    ElCheckbox,
    ElCheckboxGroup,
    ElTag,
  },
  data() {
    return {
      isChecked: 1,
      checkedlist: [],
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
          v-model="checkedlist"
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
  `,
});

export const VerticalOptions = VerticalOptionsTemplate.bind({});

VerticalOptions.storyName = '扩展样式 - 纵向选择列表';
VerticalOptions.args = {
  disabled: false,
  labelPosition: 'top',
}


const FormItemFooterTemplate = (args) => ({
  components: {
    ElForm,
    ElTag,
    ElFormItem,
    ElInput,
  },
  data() {
    return {
      username: '',
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
  `,
});

export const FormItemFooter = FormItemFooterTemplate.bind({});

FormItemFooter.storyName = '扩展样式 - 表单单元项描述区';
FormItemFooter.args = {
  disabled: false,
  labelPosition: 'top',
}
