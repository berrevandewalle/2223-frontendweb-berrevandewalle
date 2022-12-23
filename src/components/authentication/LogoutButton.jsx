import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => logout({
        returnTo: window.location.origin,
      })}
      style={{width: 90, padding: 5}}
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
