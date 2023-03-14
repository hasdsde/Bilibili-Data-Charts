import os
import time
import requests
import json

def get_bangumi():
    headers = {'User-Agent' : 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)'}
    url = "https://api.bilibili.com/pgc/season/index/result?st=1&order=2&season_version=-1&spoken_language_type=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&sort=0&page=1&season_type=1&pagesize=250&type=1"
    response =  requests.get(url,headers=headers)
    
    if not os.path.exists("data"):
        os.mkdir("data")

    with open('data/bili_bangumi_list.json',"w",encoding="utf-8") as f:
        f.write(response.text)
        f.close()
    print("获取番剧数据完成")
def get_sort():
    headers = {'User-Agent' : 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)'}
    url = "https://api.bilibili.com/pgc/season/index/result?st=1&order=3&season_version=-1&spoken_language_type=-1&area=-1&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&sort=0&page=1&season_type=1&pagesize=20&type=1&style_id="
    sortDict = {
        '原创':10010,
        '漫画改':10011,
        '小说改':10012,
        '游戏改':10013,
        '特摄':10102,
        '布袋戏':10015,
        '热血':10016,
        '穿越':10017,
        '奇幻':10018,
        '战斗':10020,
        '搞笑':10021,
        '日常':10022,
        '科幻':10023,
        '萌系':10024,
        '治愈':10025,
        '校园':10026,
        '少儿':10027,
        '泡面':10028,
        '恋爱':10029,
        '少女':10030,
        '魔法':10031,
        '冒险':10032,
        '历史':10033,
        '架空':10034,
        '机战':10035,
        '神魔':10036,
        '声控':10037,
        '运动':10038,
        '励志':10039,
        '音乐':10040,
        '推理':10041,
        '社团':10042,
        '智斗':10043,
        '催泪':10044,
        '美食':10045,
        '偶像':10046,
        '乙女':10047,
        '职场':10048,
    }
    keyList = list( sortDict.keys())
    resultDict={}

    if not os.path.exists("data"):
        os.mkdir("data")

    for sort in sortDict:
        resp = requests.get(url+str(sortDict.get(sort)),headers=headers)
        jsonData = resp.json()

        resultDict.update({sort:jsonData['data']['total']})
        json.dump(resultDict,open('data/bili_bangumi_sort.json','w',encoding='utf-8'),ensure_ascii=False)
    print('获取分类数据完成')
def get_area():
    headers = {'User-Agent' : 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; InfoPath.3)'}
    areaDict = {}

    respJp = requests.get('https://api.bilibili.com/pgc/season/index/result?st=1&order=3&season_version=-1&spoken_language_type=-1&area=2&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&sort=0&page=1&season_type=1&pagesize=20&type=1',headers=headers)
    rJp = respJp.json()
    areaDict.update({'日本':rJp['data']['total']})    
    
    respUs = requests.get('https://api.bilibili.com/pgc/season/index/result?st=1&order=3&season_version=-1&spoken_language_type=-1&area=3&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&sort=0&page=1&season_type=1&pagesize=20&type=1',headers=headers)
    rUs = respUs.json()
    areaDict.update({'美国':rUs['data']['total']})

    respOther = requests.get('https://api.bilibili.com/pgc/season/index/result?st=1&order=3&season_version=-1&spoken_language_type=-1&area=1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70&is_finish=-1&copyright=-1&season_status=-1&season_month=-1&year=-1&style_id=-1&sort=0&page=1&season_type=1&pagesize=20&type=1',headers=headers)
    rOther = respOther.json()
    areaDict.update({'其他':rOther['data']['total']})

    respCn = requests.get('https://api.bilibili.com/pgc/season/index/result?st=4&order=3&season_version=-1&is_finish=-1&copyright=-1&season_status=-1&year=-1&style_id=-1&sort=0&page=1&season_type=4&pagesize=20&type=1',headers=headers)
    rCn = respCn.json()
    areaDict.update({'国创':rCn['data']['total']})

    json.dump(areaDict,open('data/bili_bangumi_area.json','w',encoding='utf-8'),ensure_ascii=False)
    print('获取地区数据完成')


if __name__=='__main__':
    # get_bangumi()
    # get_sort()
    get_area()