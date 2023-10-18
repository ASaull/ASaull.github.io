import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error" className="main">
      <h1 className="errortext">"ERROR"</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}