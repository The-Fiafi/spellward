export const svgrLoader = (isDev: boolean) => {
    return {
        test: /\.svg$/i,
        use: [{
            loader: "@svgr/webpack",
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [{
                        name: "convertColors",
                        params: {
                            currentColor: true,
                        }
                    }]
                }
            }
        }],
    };
}