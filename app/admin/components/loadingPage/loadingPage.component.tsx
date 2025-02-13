import { LoadingContainer } from "./loadingPage.styles";
import {HashLoader as Spinner} from'react-spinners'

export default function LoadingPage() {
    return (
        <LoadingContainer>
            <Spinner color="#000" />
        </LoadingContainer>
    );
}