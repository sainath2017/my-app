import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => keycloak.init({
    config: {
      url: 'http://localhost:8180/auth',
      realm: 'DEV_INT',
      clientId: 'my-app'
    },
    initOptions: {
      onLoad: 'login-required',
      checkLoginIframe: false
    },
    enableBearerInterceptor: true,
    bearerExcludedUrls: ['/assets', '/clients/public']
  });
}
