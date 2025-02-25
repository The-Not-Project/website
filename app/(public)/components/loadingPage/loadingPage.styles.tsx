import styled from "styled-components";

export const LoadingPageContainer = styled.div<{ $isLoading: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    color: white;
    z-index: 1;
    transition: translate .3s ease;
    translate: 0 ${({ $isLoading }) => ($isLoading ? "0" : "-100%")};

`