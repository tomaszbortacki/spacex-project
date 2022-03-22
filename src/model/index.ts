export interface ILaunches {
  id: number;
  launch_success: boolean;
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
}

export type TLaunches = Array<ILaunches>;
