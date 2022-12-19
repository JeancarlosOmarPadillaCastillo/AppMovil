import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDtos {
  DNI: string;

  @IsNotEmpty({ message: 'Contraseña obligatoria' })
  Contrasena: string;
}
