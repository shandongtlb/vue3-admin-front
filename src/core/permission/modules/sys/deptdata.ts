export const sysDeptData = {
  /** 获取部门列表 */
  list: 'sys/deptdata/list',
  /** 移动部门 */
  move: 'sys/deptdata/move',
  /** 更新部门 */
  update: 'sys/deptdata/update',
  delete: 'sys/deptdata/delete',
  add: 'sys/deptdata/add',
  info: 'sys/deptdata/info',
  transfer: 'sys/deptdata/transfer',
} as const;

export const values = Object.values(sysDeptData);

export type SysDeptDataPerms = typeof values[number];

export default sysDeptData;
