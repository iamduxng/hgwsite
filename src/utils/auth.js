//import IDB from "storage/indexed-db";

const Auth = {
    isAuthenticated: false,
    // checkAuthenticate: async function () {
    //     this.isAuthenticated = await IDB.isSearchDataExisting();
    // },
    setAuthenticate: function (status) {
        this.isAuthenticated = status;
    }
};

export default Auth;