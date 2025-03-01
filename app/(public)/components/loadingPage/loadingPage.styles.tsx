import styled from "styled-components";

export const LoadingPageContainer = styled.div<{ $isLoading: boolean, $isHome: boolean }>`
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
    translate: 0 ${({ $isLoading, $isHome }) => ($isLoading ? "0" : $isHome ? "-100%" : "100%")};

`