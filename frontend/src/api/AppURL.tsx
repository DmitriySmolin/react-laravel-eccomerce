class AppURL {
    static baseURL = "http://127.0.0.1:8000/api"
    static visitorDetails = this.baseURL + "/getvisitor"
    static postContact = this.baseURL + "/postcontact"
    static allSiteInfo = this.baseURL + "/allsiteinfo"
    static allCategoryDetails = this.baseURL + "/allcategory"
}

export default AppURL
