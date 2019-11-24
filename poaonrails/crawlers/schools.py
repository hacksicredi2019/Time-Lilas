import csv
import sqlite3
from datetime import date
def make_header(row):
    dict = {}
    for index in range(len(row)):
        dict[row[index]] = index
    return dict

def dep_to_name(number):
    dict = {'1':'','2':'','3':'MUNICIPAL','4':'PRIVADA'}
    return dict[number]

con = sqlite3.connect('../poaonrails/db/development.sqlite3')
cursor = con.cursor()
with open('data/escolas.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter='|')
    line_count = 0
    i = {}
    for row in csv_reader:
        try:
            if line_count == 0:
                i = make_header(row)
                print(i)
            else:
                today = date.today()

                internet = row[i['IN_INTERNET']]
                if internet == '1':
                    entry = ('Acesso a internet', '', 'internet_connection', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                lab_informatica = row[i['IN_COMPUTADOR']]
                if lab_informatica == '1':
                    entry = ('Laboratorio de computadores', '', 'computer_lab', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                alimentacao = row[i['IN_ALIMENTACAO']]
                if alimentacao == '1':
                    entry = ('Alimentacao', '', 'feeding', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                cozinha = row[i['IN_COZINHA']]
                if cozinha == '1':
                    entry = ('Cozinha', '', 'kitchen', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                bib = row[i['IN_BIBLIOTECA']]
                if bib == '1':
                    entry = ('Biblioteca', '', 'library', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                verde = row[i['IN_AREA_VERDE']]
                if verde == '1':
                    entry = ('Area verde disponivel', '', 'green', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                especial =  row[i['TP_AEE']]
                if  especial == '1':
                    entry = ('Classes especiais', '', 'especial', row[i['CO_ENTIDADE']], today, today)
                    cursor.execute('''INSERT INTO badges(name, description, category, school_id, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?)''', entry)

                entry = (row[i['NO_ENTIDADE']], 0, 0, dep_to_name(row[i['TP_DEPENDENCIA']]), '', today, today,row[i['CO_ENTIDADE']])
                cursor.execute('''INSERT INTO schools(name, vacancy, rating, category, description, created_at, updated_at, cod) VALUES(?, ?, ?, ?, ?, ?, ?, ?)''', entry)
                con.commit()
                print(row[i['CO_ENTIDADE']], row[i['NO_ENTIDADE']], row[i['CO_UF']], row[i['CO_MUNICIPIO']], row[i['CO_DISTRITO']], dep_to_name(row[i['TP_DEPENDENCIA']]))
            line_count += 1
        except:
            line_count += 1
            continue
