export const sysRoledata = {
  list: 'sys/roledata/list',
  page: 'sys/roledata/page',
  add: 'sys/roledata/add',
  update: 'sys/roledata/update',
  delete: 'sys/roledata/delete',
  info: 'sys/roledata/info',
} as const;

export const values = Object.values(sysRoledata);

export type SysRoledataPerms = typeof values[number];

export default sysRoledata;
