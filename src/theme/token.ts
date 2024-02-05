import { ThemeConfig } from 'antd';
import { useTheme } from 'styled-components';

//IMPORTANT! To understand this part, it is necessary to learn how to customize Ant Design components using the Ant Design token.You can use the styled components theme (/theme/index.js) to provide the required colors, etc., to Ant Design components.Refer to the Ant Design documentation at "https://ant.design/docs/react/customize-theme" for guidance on using styled components with Ant Design tokens.

const Token = () => {
  const theme = useTheme();
  const config: ThemeConfig = {
    hashed: false,
    token: {
      fontSize: 14,
      colorPrimary: theme.colors.primary,
      colorText: theme.colors.darkGray,
      colorLink: theme.colors.primary,
      colorLinkHover: theme.colors.secondary,
      fontFamily: theme.font.family,
      colorBgContainer: 'transparent',
      colorTextDisabled: theme.colors.textPassive,
      controlOutline: 'none',
    },
    components: {
      Layout: {},
      Button: {
        // padding: 0,
        // defaultBg: theme.colors.light,
        // defaultColor: theme.colors.dark,
        // colorText: '#FFF',
        // colorPrimaryHover: theme.colors.secondary,
        // colorPrimary: theme.colors.primary,
        // paddingInlineLG: '0px',
        // primaryShadow: 'none',
      },
      Input: {},
      Typography: {},
    },
  };
  return config;
};

export default Token;
