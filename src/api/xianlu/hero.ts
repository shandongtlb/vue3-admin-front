import type { BaseResponse } from '@/utils/request';
import { request } from '@/utils/request';
import czApi from '@/core/permission/modules/xianlu/cz/cz';

/**
 * @description 获取村庄列表
 */
export function getczList(query: API.PageParams) {
  return request<API.MenuInfoResult>({
    url: czApi.list,
    method: 'get',
    params: query,
  });
}

/**
 * @description 获取村庄列表
 */
export function getczInfo(query: { id: string | string[] }) {
  return request<BaseResponse>(
    {
      url: czApi.info,
      method: 'get',
      params: query,
    },
    {
      isMock: true,
      isGetDataDirectly: false,
    },
  );
}
