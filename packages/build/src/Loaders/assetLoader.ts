export const assetLoader = (idDev: boolean) => {
    return {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
    }
}