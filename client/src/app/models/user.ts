import { Role } from './role';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  roles: Role;
}
