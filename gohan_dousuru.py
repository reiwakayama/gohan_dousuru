import pandas as pd
import locale
locale.setlocale(locale.LC_ALL, 'ja_JP.UTF-8')

df = pd.read_excel("C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru.xlsx")

"""
options_grouping = {
    'main': sorted(df[df['type'] == 'main']['menu'].tolist(), key=locale.strxfrm), 
    'side': sorted(df[df['type'] == 'side']['menu'].tolist(), key=locale.strxfrm), 
    'soup': sorted(df[df['type'] == 'soup']['menu'].tolist(), key=locale.strxfrm), 
}

with open("C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru_template.html", 'r', encoding='utf-8') as file:
    template_html = file.read()

options_html = {
    'main': '\n'.join([f'  <option value="{option}">{option}</option>' for option in options_grouping['main']]),
    'side': '\n'.join([f'  <option value="{option}">{option}</option>' for option in options_grouping['side']]),
    'soup': '\n'.join([f'  <option value="{option}">{option}</option>' for option in options_grouping['soup']]),
}

gohan_dousuru_html = template_html.replace('<!-- MAIN_OPTIONS_PLACEHOLDER -->', options_html['main'])
gohan_dousuru_html = gohan_dousuru_html.replace('<!-- SIDE_OPTIONS_PLACEHOLDER -->', options_html['side'])
gohan_dousuru_html = gohan_dousuru_html.replace('<!-- SOUP_OPTIONS_PLACEHOLDER -->', options_html['soup'])

with open('C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru.html', 'w', encoding='utf-8') as file:
    file.write(gohan_dousuru_html)
"""

piman_menus = df[df['ingredient'].str.contains('ピーマン', case=False, na=False)]
piman_menus = piman_menus['menu'].tolist()
piman_menus = ', '.join(f'"{menu}"' for menu in piman_menus)

cabbage_menus = df[df['ingredient'].str.contains('キャベツ', case=False, na=False)]
cabbage_menus = cabbage_menus['menu'].tolist()
cabbage_menus = ', '.join(f'"{menu}"' for menu in cabbage_menus)

onion_menus = df[df['ingredient'].str.contains('玉ねぎ', case=False, na=False)]
onion_menus = onion_menus['menu'].tolist()
onion_menus = ', '.join(f'"{menu}"' for menu in onion_menus)

carrot_menus = df[df['ingredient'].str.contains('人参', case=False, na=False)]
carrot_menus = carrot_menus['menu'].tolist()
carrot_menus = ', '.join(f'"{menu}"' for menu in carrot_menus)

celery_menus = df[df['ingredient'].str.contains('セロリ', case=False, na=False)]
celery_menus = celery_menus['menu'].tolist()
celery_menus = ', '.join(f'"{menu}"' for menu in celery_menus)

lettuce_menus = df[df['ingredient'].str.contains('レタス', case=False, na=False)]
lettuce_menus = lettuce_menus['menu'].tolist()
lettuce_menus = ', '.join(f'"{menu}"' for menu in lettuce_menus)

with open("C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru_template.js", 'r', encoding='utf-8') as file:
    template_js = file.read()

gohan_dousuru_js = template_js.replace('/*PIMAN_MENUS_PLACEHOLDER*/', piman_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CABBAGE_MENUS_PLACEHOLDER*/', cabbage_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*ONION_MENUS_PLACEHOLDER*/', onion_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CARROT_MENUS_PLACEHOLDER*/', carrot_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CELERY_MENUS_PLACEHOLDER*/', celery_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*LETTUCE_MENUS_PLACEHOLDER*/', lettuce_menus)

with open('C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru_test.js', 'w', encoding='utf-8') as file:
    file.write(gohan_dousuru_js)