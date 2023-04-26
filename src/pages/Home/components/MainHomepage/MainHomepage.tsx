import { useNavigate } from "react-router-dom";

export function MainHomepage() {
  const Navigate = useNavigate();

  return (
    <main
      onClick={() => {
        Navigate("/presentation");
      }}
    >
      MainHomepage
    </main>
  );
}
