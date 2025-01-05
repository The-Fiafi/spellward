import MiniCssExtractPlugin from "mini-css-extract-plugin"


export const scssLoader = (isDev: boolean) => {
    return { 
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        config: false,
                        plugins: [["autoprefixer", {}]]
                    }
                }
            },
            "sass-loader"
        ]
    };
}