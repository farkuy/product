import {ResolveOptions} from "webpack";


export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // задаем расширение, дял которых мы не будем указывать расширения
    }
}