import axios from './config';

// 搜索列表数据接口
function getSearchList() {
    return axios.get('/api/meituan/header/search.json');
}

// 热门搜索数据接口
function getHotSearchList() {
    return axios.get('/api/meituan/header/searchHotWords.json');
}

// 首页全部分类数据接口
function getMenuList() {
    return axios.get('/api/meituan/index/nav.json');
}

// 首页生活列表数据接口
function getLifeList() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
}

// 省份数据接口
function getProvinceList() {
    return axios.get('/api/meituan/city/province.json');
}

// 热门城市数据接口
function getHotCityList() {
    return axios.get('/api/meituan/city/hot.json');
}

// 最近访问数据接口
function getRencentList() {
    return axios.get('/api/meituan/city/recents.json');
}

// 城市列表数据接口
function getCityList() {
    return axios.get('/api/meituan/city/cityList.json');
}

// 分类列表数据接口
function getCategoryList() {
    return axios.get('/api/meituan/list/classify.json');
}

// 商家列表数据接口
function getProductList() {
    return axios.get('/api/meituan/list/goodsList.json');
}

// 登录接口
function login(params) {
    return axios.get('/api/meituan/login', params);
}

// 注册接口
function register(params) {
    return axios.get('/api/meituan/register', params);
}

// 获取当前位置接口
function getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json');
}

export default {
    getSearchList,
    getHotSearchList,
    getMenuList,
    getLifeList,
    getProvinceList,
    getHotCityList,
    getRencentList,
    getCityList,
    getCategoryList,
    getProductList,
    login,
    register,
    getCurPosition
}