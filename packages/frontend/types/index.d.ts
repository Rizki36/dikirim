import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { UserRole } from "constans/Auth";

export type orderStep = "pickup" | "packet" | "review";

export interface AuthOptions {
  mustLoggedIn?: boolean,
  redirectUnAuthenticated?: string,
  redirectAuthenticated?: string
}

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType,
  auth?: AuthOptions
}

export type LayoutProps = ({
  children,
}: {
  children: ReactElement
}) => ReactElement

export interface OrderState {
  step: orderStep;
}

export interface AuthInterface {
  role?: UserRole;
  authenticatedRedirect?: string;
  children?: any;
  ScreenLoader?: React.ReactNode;
}
