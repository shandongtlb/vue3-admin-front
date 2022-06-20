import { request } from '@/utils/request';
// import type { BaseResponse } from '@/utils/request';
import Api from '@/core/permission/modules/sys/roledata';

export function getRoledataInfo(query: { roleId: number }) {
  return request<API.RoledataInfoResult>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

export function getRoledataList(data?: API.PageParams) {
  return request<API.RoledataListResult>({
    url: Api.list,
    method: 'get',
    data,
  });
}

export function getRoledataListByPage(query: API.PageParams) {
  return request({
    url: Api.page,
    method: 'get',
    params: query,
  });
}

export function createRoledata(data: API.CreateRoledataParams) {
  return request(
    {
      url: Api.add,
      method: 'post',
      data,
    },
    {
      successMsg: '创建角色成功',
    },
  );
}

export function updateRoledata(data: API.UpdateRoledataParams) {
  return request(
    {
      url: Api.update,
      method: 'post',
      data,
    },
    {
      successMsg: '更新角色成功',
    },
  );
}

export function deleteRoledata(data: { roleIds: number[] }) {
  return request(
    {
      url: Api.delete,
      method: 'post',
      data,
    },
    {
      successMsg: '删除角色成功',
    },
  );
}
