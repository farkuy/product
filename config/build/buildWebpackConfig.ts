import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry, // entry - стартовая точка приложения
        //output настойка того, как и куда мы будем делать сборку приложения
        output: {
            filename: "[name].[contenthash].js", //название глав файл сборки
            path: paths.build, // путь куда сборка будет происходить
            clean: true, // чистим старые файлы при запуске вебпака
        },
        plugins: buildPlugins(options), // используется для добавления различных плагинов: Оптимизация сборки, Генерация HTML-файлов, Обработка ошибок и предупреждений
        module: {
            rules: buildLoaders(), // в rules конфигурируем лодеры ( любая обработка файлов, которая выходит за js )
        },
        resolve: buildResolvers(), // задаем расширение, дял которых мы не будем указывать расширения
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
