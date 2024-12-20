export interface IMessage {
  variant: AlertVariant;
  children: React.ReactNode;
}

type AlertVariant =
  | "info"
  | "success"
  | "danger"
  | "warning"
  | "primary"
  | "secondary";
