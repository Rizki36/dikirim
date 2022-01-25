import { UserRole } from "constans/Auth";

export type orderStep = "pickup" | "packet" | "review";

export interface OrderState {
  step: orderStep;
}

export interface AuthInterface {
  role?: UserRole;
  authenticatedRedirect?: string;
  children?: any;
  ScreenLoader?: React.ReactNode;
}
