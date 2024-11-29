import { useRouteError } from "react-router-dom";


type routeError = {
    statusText?: string;
    message?: string;
}


export default function Error() {
    const error = useRouteError() as routeError;
    console.error(error);

    return (
        <div id="error" className="main">
            <h1 className="errortext">"ERROR"</h1>
            <p>
                <i>{error.statusText || error.message || "An unknown error occurred."}</i>
            </p>
        </div>
    );
}