import { Alert } from "react-bootstrap";
import { IMessage } from "../entities/message";

function Message({ variant, children }: IMessage) {
  return <Alert variant={variant}>{children}</Alert>;
}

Message.defaultProps = {
  variant: "info",
};

export default Message;
