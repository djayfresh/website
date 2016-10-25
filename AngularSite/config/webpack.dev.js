entry: {
        app: 'app/main.ts'
}

output: {
        filename: './dist/app.js';
}
module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: 'ts'
            },
            {
                test: /\.css$/,
                loaders: 'style!css'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'raw-loader!less-loader'
            }
        ]
}
resolve: {
        extensions: ['', '.js', '.ts', '.less']
}
