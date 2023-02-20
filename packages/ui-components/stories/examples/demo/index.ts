
export const pageHeaderCode =
`
<template>
  <SopPageHeader title="客户详情页" :back="-1">
    <template #opt>
      <ElButton
        type="primary"
        @click="clickHandler"
      >
        + 新增
      </ElButton>
    </template>
  </SopPageHeader>
</template>
`
export const sopBasicInfoCode =
`
<template>
  <SopBasicInfo title="九和速格面火率 for 运营手动交付类">
    <template #cover>
      <SopCover type="album" width="60" :height="60" />
    </template>

    <span>
      <ElTag>SP</ElTag>
    </span>
    <span>
      <SopStatus type="danger" text="禁用"/>
    </span>
    <span>创建时间：2023-03-03 20:20:20</span>
    <span>更新时间：2023-03-03 20:20:20</span>
    <span>创建人：杨国福麻辣烫</span>

    <template #opt>
      <ElDropdown trigger="click">
        <ElButton type="primary">操作</ElButton>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>启用</ElDropdownItem>
            <ElDropdownItem>禁用</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </template>
  </SopBasicInfo>
</template>
`
export const sopCardCode =
`
<script setup lang="ts">
import { ElMessage } from 'element-plus';

const clickHandler = () => {
  ElMessage.success('click me...');
};
</script>

<template>
  <SopCard title="卡片标题">
    <template #opt>
      <ElButton type="primary" @click="clickHandler">操作</ElButton>
    </template>
    <template #default>
      <ElSkeleton :row="5" animated />
    </template>
    <template #footer>
      <ElButton type="primary" @click="clickHandler">提交</ElButton>
    </template>
  </SopCard>
</template>
`
export const sopCoverCode =
`
<SopCover
  type="album"
  :width="60"
  :height="60"
  isCoverEdit
  coverEdit: () => ElMessage.success('点击上传')
/>
`
export const sopDataTableCode =
`
<SopCard>
  <SopDataTable :cols="2" :gap="16">
    <SopDataTableItem label="label-1">内容1...</SopDataTableItem>
    <SopDataTableItem label="label-2">内容2...</SopDataTableItem>
    <SopDataTableItem label="label-3">内容3...</SopDataTableItem>
    <SopDataTableItem label="label-4">内容4...</SopDataTableItem>
  </SopDataItem>
</SopCard>
`
export const sopDataTableItemCode =
`
<SopDataTableItem
  label="标签文本"
  :border="false"
>
  <ElInput />
</SopDataTableItem>
`
export const sopFilterFormCode =
`
<SopFilterForm @keyup.enter="getList">
  <SopDataTable :cols="3">
    <SopDataTableItem
      :border="false"
      label="关键词by ID, SP名称"
    >
      <ElInput />
    </SopDataTableItem>
    <SopDataTableItem
      :border="false"
      label="对接类型"
    >
      <ElInput />
    </SopDataTableItem>

    <SopDataTableItem
      :border="false"
      label="Sender to SP 传输方式"
    >
      <ElInput />
    </SopDataTableItem>

    <SopDataTableItem
      :border="false"
      label="SP to DSP 传输方式"
    >
      <ElInput />
    </SopDataTableItem>
  </SopDataTable>

  <template #opt>
    <ElButton @click="clickHandler">重置</ElButton>
    <ElButton type="primary" @click="clickHandler">查询</ElButton>
  </template>
</SopFilterForm>
`
export const sopStatusCode =
`
<SopStatus type="all" text="信息" />
`
export const sopTheHeaderCode =
`
<SopTheHeader
  logo="https://pics.kanjian.com/favicon/kanjian-logo-blue@2x.png"
  subTitle="版权管理后台"
  @logo-click="ElMessage.success('点击 logo...')"
>
  <template #rightOpt>
    <ElPopover trigger="click" width="272px">
      <template #reference>
        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #0040FF;">
        </div>
      </template>
      <ElButton>退出登录</ElButton>
    </ElPopover>
  </template>
</SopTheHeader>
`
