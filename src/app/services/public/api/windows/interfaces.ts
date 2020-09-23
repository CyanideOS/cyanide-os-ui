export interface WindowInterface {
  packageName: string;
  name: string;
  pid: number;
  zIndex: number;
}

export interface ApplicationInterface {
  packageName: string;
  name: string;
  component: string;
  installedOn: number;
}
