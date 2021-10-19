import { User } from 'src/public/users/interfaces/user.interface';

export interface PasswordRecovery {
  id?: number;
  expiration_date?: Date;
  use_date?: Date;
  verification_code?: string;
  user_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  User?: User;
}
