import { useNavigate } from "react-router-dom";

export function MainPresentation(){
    const Navigate = useNavigate();

    return(
        <main onClick={() => {Navigate("/");}}>teste</main>
    );
}