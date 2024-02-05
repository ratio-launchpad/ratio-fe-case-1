import StyledLandingPage from './styles';
import { Col, Row, Typography } from 'antd';
import ratioLogo from '@/assets/ratio.webp';

const Landing = () => {
  return (
    <StyledLandingPage align="middle" justify="center">
      <Col span={12}>
        <Row align="middle" justify="center">
          <img src={ratioLogo} alt="ratio-logo" />
        </Row>
        <Typography.Paragraph
          style={{ fontSize: '16px', textAlign: 'center', fontStyle: 'italic' }}
        >
          Hello candidate!
          <Typography.Text className="emoji-styles"> &#128513;</Typography.Text>
          You can start your case immediately by reading README file. PS: We've
          left some comments in certain files to help you understand them more
          easily. You can speed up your work by reading those. Happy coding!{' '}
          <Typography.Text className="emoji-styles"> &#x1F680;</Typography.Text>
        </Typography.Paragraph>
      </Col>
    </StyledLandingPage>
  );
};

export default Landing;
