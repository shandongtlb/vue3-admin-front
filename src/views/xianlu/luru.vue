<template>
  <div>
    <antd-generate-form ref="generateFormRef" :data="widgetForm"> </antd-generate-form>
    <a-button type="primary" @click="handleSubmit">提交</a-button>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  import { defineComponent, reactive, toRefs } from 'vue';
  import { AntdGenerateForm } from 'vue-form-create';
  export default defineComponent({
    name: 'Luru',
    components: { AntdGenerateForm },
    setup() {
      const state = reactive({
        generateFormRef: null,
        widgetForm: {
          list: [
            {
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 12,
                  list: [
                    {
                      label: '走访人',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'cb366d8d01d34090b31d29eaa3d7c663',
                      model: 'input_cb366d8d01d34090b31d29eaa3d7c663',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 12,
                  list: [
                    {
                      label: '受访人',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'd2ff7028070b4a4dad7367fb654e18d7',
                      model: 'input_d2ff7028070b4a4dad7367fb654e18d7',
                      rules: [],
                    },
                  ],
                },
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
              },
              key: 'f76db9db2560461298f7fb9d27bdeb9f',
              model: 'grid_f76db9db2560461298f7fb9d27bdeb9f',
              rules: [],
            },
            {
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 12,
                  list: [
                    {
                      label: '走访日期',
                      type: 'date',
                      options: {
                        defaultValue: '',
                        width: '',
                        placeholder: '请选择时间',
                        format: 'YYYY-MM-DD',
                        readonly: false,
                        allowClear: true,
                        disabled: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '28985003b12d4343b8b3e44a0d5e1200',
                      model: 'date_28985003b12d4343b8b3e44a0d5e1200',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 12,
                  list: [
                    {
                      label: '有无变动',
                      type: 'radio',
                      options: {
                        defaultValue: '',
                        width: '',
                        inline: true,
                        remote: false,
                        showLabel: false,
                        remoteFunc:
                          'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
                        options: [
                          {
                            value: 'Option 1',
                            label: 'Option 1',
                          },
                          {
                            value: 'Option 2',
                            label: 'Option 2',
                          },
                        ],
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label',
                        },
                        disabled: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'fdcca1e4d0f440cbae8e316b9b017a78',
                      model: 'radio_fdcca1e4d0f440cbae8e316b9b017a78',
                      rules: [],
                    },
                  ],
                },
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
              },
              key: '2b3de1bc6aca437d89ee6688129a73fc',
              model: 'grid_2b3de1bc6aca437d89ee6688129a73fc',
              rules: [],
            },
            {
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 12,
                  list: [
                    {
                      label: '职务/关系',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: '75f72047e08c4575bbe92e5dfedd7945',
                      model: 'input_75f72047e08c4575bbe92e5dfedd7945',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 12,
                  list: [
                    {
                      label: '联系方式',
                      type: 'input',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        prefix: '',
                        suffix: '',
                        addonBefore: '',
                        addonAfter: '',
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'f73dfc67a4b142109027c94694c03ae8',
                      model: 'input_f73dfc67a4b142109027c94694c03ae8',
                      rules: [],
                    },
                  ],
                },
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
              },
              key: '0d7e6ba457bb4081a98b071351e9be62',
              model: 'grid_0d7e6ba457bb4081a98b071351e9be62',
              rules: [],
            },
            {
              label: '栅格布局',
              type: 'grid',
              columns: [
                {
                  span: 12,
                  list: [
                    {
                      label: '走访记录',
                      type: 'textarea',
                      options: {
                        width: '100%',
                        defaultValue: '',
                        placeholder: '',
                        maxlength: null,
                        rows: 4,
                        autoSize: false,
                        showCount: false,
                        disabled: false,
                        allowClear: false,
                        readonly: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'a1ac6c1cc7674001af7156b2385b9eb3',
                      model: 'textarea_a1ac6c1cc7674001af7156b2385b9eb3',
                      rules: [],
                    },
                  ],
                },
                {
                  span: 12,
                  list: [
                    {
                      label: '工作照片',
                      type: 'img-upload',
                      options: {
                        defaultValue: [],
                        name: 'file',
                        action: 'http://example.com/upload',
                        method: 'post',
                        listType: 'picture-card',
                        accept: 'image/*',
                        maxCount: 3,
                        multiple: false,
                        disabled: false,
                        rules: {
                          trigger: 'blur',
                          enum: '',
                          message: '',
                          pattern: '',
                          required: false,
                          type: 'any',
                        },
                      },
                      key: 'ccd26a0b45bb413a811fa588977b2610',
                      model: 'img-upload_ccd26a0b45bb413a811fa588977b2610',
                      rules: [],
                    },
                  ],
                },
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
              },
              key: '30e89961b1bc474ea4ab5a44ba0e168f',
              model: 'grid_30e89961b1bc474ea4ab5a44ba0e168f',
              rules: [],
            },
          ],
          config: {
            size: 'default',
            hideRequiredMark: false,
            layout: 'horizontal',
            labelAlign: 'left',
            labelCol: { span: 4, offset: 1 },
          },
        },
      });
      const handleSubmit = () => {
        state.generateFormRef
          .getData()
          .then((data) => {
            console.log(data);
            // data success
            // data 表单数据
          })
          .catch(() => {
            // data failed
          });
      };

      return {
        ...toRefs(state),
        handleSubmit,
      };
    },
  });
</script>
