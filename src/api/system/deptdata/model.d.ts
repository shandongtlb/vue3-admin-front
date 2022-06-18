declare namespace API {
  /** 获取系统部门返回结果 */
  type SysDeptDataListResult = {
    createTime: string;
    updateTime: string;
    id: number;
    parentId: number;
    name: string;
    orderNum: number;
    keyPath?: number[];
  };
  /** 部门 */
  type MovedDeptDataItem = {
    id: number;
    parentId: number;
  };

  /** 要排序的部门 */
  type MovedDeptsDataParams = {
    depts: MovedDeptItem[];
  };

  /** 删除部门的参数 */
  type DelDeptDataParams = {
    departmentId: number | string;
  };

  /** 更新某个部门需要传的参数 */
  type UpdateDeptDataParams = {
    name: string;
    parentId: number | string;
    orderNum: number;
    id: number | string;
  };

  /** 创建部门参数 */
  type CreateDeptDataParams = {
    name: string;
    parentId: number;
    orderNum: number;
  };

  /** 管理员部门转移 */
  type TransferDeptDataParams = {
    userIds: number[];
    departmentId: number;
  };

  /** 部门详情 */
  type GetDeptDataInfoResult = {
    department: {
      createTime: string;
      updateTime: string;
      id: number;
      parentId: number;
      name: 'string';
      orderNum: number;
    };
    parentDepartment: {
      createTime: string;
      updateTime: string;
      id: number;
      parentId: number;
      name: 'string';
      orderNum: number;
    };
  };
}
