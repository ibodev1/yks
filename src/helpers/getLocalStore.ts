function getLocaleStore(name: string){
    return JSON.parse(localStorage.getItem(name) ?? "{}") ?? {};
}