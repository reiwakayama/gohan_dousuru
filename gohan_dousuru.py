import pandas as pd
import locale
locale.setlocale(locale.LC_ALL, 'ja_JP.UTF-8')

df = pd.read_excel("C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru.xlsx")

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

def get_menus(ingredient):
    menus = df[df['ingredient'].str.contains(ingredient, case=False, na=False)]['menu'].tolist()
    return ', '.join(f'"{menu}"' for menu in menus)

# Get the menus for each ingredient
piman_menus = get_menus('ピーマン')
cabbage_menus = get_menus('キャベツ')
onion_menus = get_menus('玉ねぎ')
carrot_menus = get_menus('人参')
celery_menus = get_menus('セロリ')
lettuce_menus = get_menus('レタス')

with open("C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru_template.js", 'r', encoding='utf-8') as file:
    template_js = file.read()

gohan_dousuru_js = template_js.replace('/*PIMAN_MENUS_PLACEHOLDER*/', piman_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CABBAGE_MENUS_PLACEHOLDER*/', cabbage_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*ONION_MENUS_PLACEHOLDER*/', onion_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CARROT_MENUS_PLACEHOLDER*/', carrot_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*CELERY_MENUS_PLACEHOLDER*/', celery_menus)
gohan_dousuru_js = gohan_dousuru_js.replace('/*LETTUCE_MENUS_PLACEHOLDER*/', lettuce_menus)

with open('C:\\Users\\81701\\gohan_dousuru\\gohan_dousuru.js', 'w', encoding='utf-8') as file:
    file.write(gohan_dousuru_js)