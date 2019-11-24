import csv
import sqlite3
from datetime import date
def make_header(row):
    dict = {}
    for index in range(len(row)):
        dict[row[index]] = index
    return dict

def number_to_cat(number):
    category = None
    number = int(number)
    ensino_infantil = [1,2]
    ensino_fundamental = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,41]
    ensino_medio = [25,26,27,28,29,30,31,32,33,34,35,36,37,38]
    eja = [65,67,69,70,71,73,74]
    if number in ensino_infantil:
        category = 'ENSINO INFANTIL'
    elif number in ensino_fundamental:
        category = 'ENSINO FUNDAMENTAL'
    elif number in ensino_medio:
        category = 'ENSINO MEDIO'
    elif number in eja:
        category = 'EJA'
    return category

con = sqlite3.connect('../poaonrails/db/development.sqlite3')
cursor = con.cursor()
with open('data/turmas.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter='|')
    line_count = 0
    i = {}
    escolas = {}
    for row in csv_reader:
        try:
            if line_count == 0:
                i = make_header(row)
            else:

                today = date.today()
                category = number_to_cat(row[i['TP_ETAPA_ENSINO']])
                code = row[i['CO_ENTIDADE']]
                commit = False
                if code in escolas:
                    categories = escolas[code]
                    if category in categories:
                        commit = False
                    else:
                        categories.append(category)
                        escolas[code] = categories
                        commit = True
                else:
                    escolas[code] = [category]
                    commit = True

                if commit and category:
                    entry = ('Etapa do Ensino', '', category, row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)
                    con.commit()
                    print(row[i['CO_ENTIDADE']], number_to_cat(row[i['TP_ETAPA_ENSINO']]))
            line_count += 1
        except:
            line_count += 1
            continue
