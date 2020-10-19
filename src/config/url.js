// 定义电影列表需要的地址
// 正在热映
export const nowPlayingListUri = "gateway?cityId=310100&pageSize=10&type=1&k=7706862&pageNum=";

// 即将上映
export const comingSoonListUri = "gateway?cityId=310100&pageSize=10&type=2&k=9317665&pageNum=";

// 电影详情数据
export const moiveDetailUrl = "gateway?k=7415759&filmId="

// 城市列表数据
export const cityListUrl = "gateway?k=6255212"

// 个人中心相关接口
export const loginUrl = "http://127.0.0.1:3000/api/v1/login"
export const centerUrl = "http://127.0.0.1:3000/api/v1/user_info"
