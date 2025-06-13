import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButtons } from '../common/Button';
import {TextInput} from '../Input';

const HeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 48,
  padding: '0px 24px',
  borderBottom: '1px solid #ddd',
  boxShadow: '0px 2px 3px 0px #ddd',
});

const LeftContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  a: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#197367',
    fontSize: 22,
  },
});

const RightContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
});


const Header = () => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <a href={'/'}>Sanjay Transport</a>
      </LeftContainer>
      <RightContainer>
        <div><IconButtons></IconButtons></div>
        <div>
          <TextInput
            placeholder={'Search by vehicle number, driver name, etc.'}
            type={'text'}></TextInput>
        </div>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
