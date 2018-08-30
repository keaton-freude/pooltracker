/* Functions to return the routes to various end points */

import * as process from "process";

export function GetBackendHttpRoute(): string {
    return `http://${process.env.BACKEND_HTTP_HOST}:${
        process.env.BACKEND_HTTP_PORT
    }/`;
}
