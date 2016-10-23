entry: {
        app: 'app/main.ts'
}

output: {
        filename: 'app.js';
}

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
