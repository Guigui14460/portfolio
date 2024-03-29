import styled from "styled-components";

const PageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageContainer = (props: { children: React.ReactNode; }) => <PageWrapper>{props.children}</PageWrapper>;

export const InnerPageContainer = styled.div<{ maxWidth: string }>`
    flex: 1;
    width: 100%;
    max-width: ${({maxWidth}) => (maxWidth ? maxWidth : "auto")};
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
