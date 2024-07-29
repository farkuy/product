import webpack from "webpack"
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'), // entry - стартовая точка приложения
        build: path.resolve(__dirname, "build"), // путь куда сборка будет происходить,
        html: path.resolve(__dirname, 'public', 'index.html'), // Путь на основе чего собираем
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
}