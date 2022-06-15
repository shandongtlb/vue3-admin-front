export const sysUser = {
  list: 'xl/cz/list',
  info: 'xl/cz/info',
} as const;

export const values = Object.values(sysUser);

export type SysUserPerms = typeof values[number];

export default sysUser;
