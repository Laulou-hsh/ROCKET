// 运行时配置
import rocket from './assets/rocket.svg'
import { Dropdown } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import 'sensd/dist/sensd.css';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = () => {
  return {
    logo: <img src={rocket} />,
    title: "ROCKET FLY",
    menu: {
      locale: false,
    },
    layout: "mix",
    avatarProps: {
      size: "large",
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      title: "user",
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'logout',
                  icon: <LoginOutlined />,
                  label: '退出登录',
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      }
    }
  };
};
