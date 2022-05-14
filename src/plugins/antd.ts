import {
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
  Avatar,
  List,
  Statistic,
} from 'ant-design-vue';
import type { App } from 'vue';

import { AButton } from '@/components/basic/button/index';

import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.variable.min.css';
import 'ant-design-vue/es/list';
import 'ant-design-vue/es/list/style/index.css';
import 'dayjs/locale/zh-cn';

export function setupAntd(app: App<Element>) {
  app.component('AButton', AButton);

  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(Avatar)
    .use(List)
    .use(Statistic)
    .use(DatePicker);
}
