import pandas as pd

#  df = pd.read_csv('nome do arquivo',sep='separador de dados',parse_dates=['coluna com datas'],
#       dayfirst=modelo de dia primeiro ou não (True / False), index_col=['coluna para representar o index']
#  df = pd.read_csv("arq_csv.csv",sep=';',parse_dates=['Date'],dayfirst=True,index_col=['Date'])
# Exemplo

arq = 'results.xlsx'
df = pd.read_excel(arq, sheet_name='mega_sena')

print(df)
