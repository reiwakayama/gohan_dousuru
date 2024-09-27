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

    