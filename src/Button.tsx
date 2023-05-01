import { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
};

const Button: FC<ButtonProps> = (props) => <button>{props.children}</button>;

export default Button;