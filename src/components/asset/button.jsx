import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button)`
  margin-top: 16px;
  padding: 8px 16px 8px 32px;
  color: #1e2233;
  position: relative;

  &.back {
    padding: 8px 16px;
  }
  :after,
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 1px solid #1e2233;
    transition: transform 0.2s;
    border-radius: 5px;
  }
  :after {
    transform: translate(3px, 3px);
  }
  :before {
    transform: translate(-3px, -3px);
  }
  :hover {
    color: #3c4b62;
    text-decoration: none;
    &:after,
    &:before {
      transform: translate(0);
    }
  }
`;
