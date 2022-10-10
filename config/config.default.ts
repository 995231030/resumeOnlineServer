import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_995231030';

  // add your egg config in here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false
    }
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '39.105.190.219',
      // 端口号
      port: '9952',
      // 用户名
      user: 'root',
      // 密码
      password: 'aa995231030',
      // 数据库名
      database: 'resumeonline',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
