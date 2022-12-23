import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function AuthenticationButton() {
  const {
    isAuthenticated,
    user,
  } = useAuth0();

  if (isAuthenticated) {
    const { name, picture, givenName } = user;
    return (
      <div className="d-flex flex-row align-items-center">
        <div className="col">
          <img src={picture} alt={givenName} className="rounded" width={40}/>
        </div>
        <div className="col">
        &nbsp;&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col">
          <LogoutButton />
        </div>
      </div>
    );
  }

  return <LoginButton />;
}
