module.exports = (env) => {
    return {
        mode: env,
        entry: "./index.js",
        output: {
            filename: "bundle.js",
            path: __dirname,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/, /bundle\.js/],
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        devServer: {
            port: 3000,
        },
    };
};
