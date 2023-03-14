import numpy as np
from PIL import Image
from matplotlib import pyplot as plt
from wordcloud import WordCloud

path = r'static\image'
font = r'C:\Windows\Fonts\STXIHEI.TTF'

# data from json file
# text = (open(r'data/bili_bangumi_list.json', 'r', encoding='utf-8')).read()
# j_text = json.loads(text)
#
# string = ''
# for item in j_text['data']['list']:
#     string = string + ' ' + item['title']
string = '番剧播放量排行 番剧分类 番剧评分 番剧地区分类 Python Vue Flask Quasar Echarts' \
         ' 图表分析 数据 日本动画 国创 BILIBILI 动漫 二次元 番剧 饼图 柱状图 新番 分类  ' \
         '欧美动画 HTML 一目了然'
img = Image.open(path + r'\heart.png')
img_array = np.array(img)
stopword = ['']
wc = WordCloud(
    background_color='white',
    width=3000,
    height=3000,
    mask=img_array,
    font_path=font,
    stopwords=stopword
)
wc.generate_from_text(string)
plt.axis('off')
plt.show()
wc.to_file(path + r'\cloud.png')
