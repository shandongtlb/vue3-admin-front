declare namespace API {
  /** 新增角色 */
  type CreateRoledataParams = {
    name: string;
    label: string;
    remark: string;
    menus: Key[];
    depts: number[];
  };
  /** 更新角色 */
  type UpdateRoledataParams = CreateRoledataParams & {
    roleId: number;
  };

  /** 角色列表项 */
  type RoledataListResultItem = {
    createdAt: string;
    updatedAt: string;
    id: number;
    userId: string;
    name: string;
    label: string;
    remark: string;
  };

  /** 角色列表 */
  type RoledataListResult = RoledataListResultItem[];

  /** 角色详情 */
  type RoledataInfoResult = {
    roleInfo: {
      createTime: string;
      updateTime: string;
      id: number;
      userId: string;
      name: string;
      label: string;
      remark: string;
    };
    menus: {
      createTime: string;
      updateTime: string;
      id: number;
      roleId: number;
      menuId: number;
    }[];
    depts: {
      createTime: string;
      updateTime: string;
      id: number;
      roleId: number;
      departmentId: number;
    }[];
  };
}
