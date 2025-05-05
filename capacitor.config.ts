import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tencent.app.cdid',
  appName: 'Dshop',
  webDir: 'dist',
  server: {
    url: 'https://to.zhaobiaoline.top/mobile/',
    cleartext: true
  }
};

export default config;
