export interface WindowInterface {
  packageName: string;
  title: string;
  icon: string;
  isClosable: boolean;
  isModal: boolean;
  isMinimizable: boolean;
  isMaximizable: boolean;
  width?: number;
  height?: number;
  isOpenAtCenter: boolean;
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
