import MobileNavbar from '../MobileNavbar';
import DesktopNavbar from '../DesktopNavbar';

interface NavbarProps {
  isLogin?: boolean;
}

export default function Navbar(props: NavbarProps) {
  const { isLogin } = props;
  return (
    <>
      <DesktopNavbar isLogin={isLogin} />
      <MobileNavbar isLogin={isLogin} />
    </>
  );
}
