import { request } from '@/utils/request';
import Api from '@/core/permission/modules/sys/data';

export function getDataListPage(data: API.PageParams<{ departmentIds: number[] }>) {
  return request<API.TableListResult<API.DataListPageResult>>({
    url: Api.page,
    method: 'post',
    data,
  });
}

export function createData(data: API.CreateDataParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建用户成功',
    },
  );
}

export function getDataInfo(query: { userId: number }) {
  return request<API.AdminDataInfo>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function updateData(data: API.UpdateAdminDataInfoParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '修改用户成功',
    },
  );
}

export function updateDataPassword(data: API.UpdateAdminDataPassword) {
  return request(
    {
      url: Api.password,
      method: 'post',
      data,
    },
    {
      successMsg: '操作成功',
    },
  );
}

export function deleteDatas(data: { userIds: number[] }) {
  return request({
    url: Api.delete,
    method: 'post',
    data,
  });
}
