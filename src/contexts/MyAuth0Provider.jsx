import { Auth0Provider } from '@auth0/auth0-react';

function MyAuth0Provider({ children }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_API_AUDIENCE;

  return (
    <Auth0Provider
      domain="dev-pfq0u0r7receuu0q.eu.auth0.com"
      audience="http://cervelo-fietsen.berre-hogent.be"
      clientId="ArWnWSxY6mMUeUdaHlWsB89RK8anarwR"
      redirectUri={`${window.location.origin}/login`}
      cacheLocation="localstorage"
      useRefreshTokens 
    >
      {children}
    </Auth0Provider>
  );
}

export default MyAuth0Provider;
