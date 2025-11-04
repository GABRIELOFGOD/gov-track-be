// import { z } from 'zod';
// import { UserRegistrationType } from '../types/user';

// export class Validators {
//   static userRegistrationSchema = z.object({
//     firstName: z.string()
//       .min(2, 'First name must be at least 2 characters')
//       .max(50, 'First name must not exceed 50 characters'),
//     lastName: z.string()
//       .min(2, 'Last name must be at least 2 characters')
//       .max(50, 'Last name must not exceed 50 characters'),
//     email: z.string()
//       .email('Invalid email address'),
//     password: z.string()
//       .min(8, 'Password must be at least 8 characters')
//       .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
//       .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
//       .regex(/[0-9]/, 'Password must contain at least one number')
//       .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
//     confirmPassword: z.string()
//   }).refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

//   static validateUserRegistration(data: UserRegistrationType) {
//     return this.userRegistrationSchema.safeParse(data);
//   }
// }