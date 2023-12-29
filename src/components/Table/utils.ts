
export const conditionalStyle = (options: any) => {
    if(!options || !options.sticky?.[0]) return {}
    return {
        position: "sticky",
        width: options.width,
        maxWidth: options.width,
        ...options.sticky[1]
    }
}