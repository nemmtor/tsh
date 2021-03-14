export interface Props {
  name: string;
  label: string;
  changeAction: (value: boolean) => void;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  'data-testid': string;
}
