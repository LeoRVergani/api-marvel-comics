const privateKey = "956199da63a9886d09f5f22d91ea373a0afb1304";
const publicKey = "b8c00d5d7caeaa64dc7d24d2afa80b56";

export function createHash(timeStamp){

    const myHash = timeStamp + privateKey + publicKey;
    const hashMessage = md5(myHash);
    return hashMessage;

}