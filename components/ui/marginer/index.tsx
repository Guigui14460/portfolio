import styled from "styled-components";

type MarginerDirection = 'horizontal' | 'vertical';

const HorizontalMargin = styled.span<{ margin: string|number }>`
  display: flex;
  width: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span<{ margin: string|number }>`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

const Marginer = (props: {direction: MarginerDirection, margin: number|string}) => {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
return <VerticalMargin {...props} />;
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export default Marginer;
