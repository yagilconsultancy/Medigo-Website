import { AppLabel } from '../../../../AppLabel';

type LabelComponentProps = {
  label: string;
};

export function AppLabelField({ label }: LabelComponentProps) {
  return <AppLabel>{label}</AppLabel>;
}
