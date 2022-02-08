import styled from '@emotion/styled';

interface ButtonProps {
    primary?: boolean;
}

const Button = styled.button<ButtonProps>`
    color: ${(props) => (props.primary ? 'hotpink' : 'turquoise')};
`;

Button.defaultProps = {
    primary: false
};

export default Button;
