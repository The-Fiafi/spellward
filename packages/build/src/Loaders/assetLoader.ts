export const assetLoader = (idDev: boolean) => {
    return {
        test: /\.(png|jpg|jpeg|gif|mp4)$/i,
        type: "asset/resource"
    }
}