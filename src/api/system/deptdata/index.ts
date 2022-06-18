import { request } from '@/utils/request';
// import type { BaseResponse } from '@/utils/request';
import Api from '@/core/permission/modules/sys/deptdata';

/**
 * @description 获取部门列表
 * @returns
 */
export function getDeptDataList() {
  return request<API.SysDeptDataListResult[]>({
    url: Api.list,
    method: 'get',
  });
}

/**
 * @description 部门移动排序
 * @param {API.MovedDeptsParams} data
 * @returns
 */
export function moveDeptDataList(data: API.MovedDeptsDataParams) {
  return request({
    url: Api.move,
    method: 'post',
    data,
  });
}

/**
 * @description 删除部门
 * @param {API.DelDeptDataParams} data
 * @returns
 */
export function deleteDeptData(data: API.DelDeptDataParams) {
  return request(
    {
      url: 'sys/dept/delete',
      method: 'post',
      data,
    },
    {
      successMsg: '删除成功',
    },
  );
}

/**
 * @description 更新某个部门
 * @param {API.UpdateDeptDataParams} data 参数
 * @returns
 */
export function updateDeptData(data: API.UpdateDeptDataParams) {
  return request({
    url: Api.update,
    method: 'post',
    data,
  });
}

/**
 * @description 创建部门
 * @param {API.CreateDeptDataParams} data 参数
 * @returns
 */
export function createDeptData(data: API.CreateDeptDataParams) {
  return request({
    url: Api.add,
    method: 'post',
    data,
  });
}
/**
 * @description 查询单个部门信息
 * @param query
 * @returns
 */
export function getDeptDataInfo(query: { departmentId: string | number }) {
  return request<API.GetDeptDataInfoResult>({
    url: Api.info,
    method: 'get',
    params: query,
  });
}

/**
 * @description 管理员部门转移
 * @param data
 * @returns
 */
export function transferDeptData(data: API.TransferDeptDataParams) {
  return request({
    url: Api.transfer,
    method: 'post',
    data,
  });
}
