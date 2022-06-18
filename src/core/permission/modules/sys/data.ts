export const sysData = {
  add: 'sys/data/add',
  page: 'sys/data/page',
  info: 'sys/data/info',
  update: 'sys/data/update',
  delete: 'sys/data/delete',
  password: 'sys/data/password',
} as const;

export const values = Object.values(sysData);

export type SysDataPerms = typeof values[number];

export default sysData;
