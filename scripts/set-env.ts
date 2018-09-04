import { writeFile } from "fs";
import { argv } from "yargs";

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === "prod";

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  BACKEND_API_HOST: '${process.env.BACKEND_API_HOST}',
  BACKEND_API_PORT: '${process.env.BACKEND_API_PORT}'
};
`;
writeFile(targetPath, envConfigFile, function(err) {
    if (err) {
        console.log(err);
    }

    console.log(`Output generated at ${targetPath}`);
});
