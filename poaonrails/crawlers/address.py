# -*- coding: utf-8 -*-
import csv
import sqlite3
import unidecode
from datetime import date
def make_header(row):
    dict = {}
    for index in range(len(row)):
        dict[row[index]] = index
    return dict


con = sqlite3.connect('../poaonrails/db/development.sqlite3')
cursor = con.cursor()
with open('data/endereco.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    i = {}
    for row in csv_reader:
        if line_count == 0:
            i = make_header(row)
            print(i)
        else:
            today = date.today()
            n = row[i['NU_ENDERECO']]
            try:
                number =  int(n)
            except:
                number =  0
            entry = (str(row[i['DS_ENDERECO']]), number, str(row[i['DS_COMPLEMENTO']]), str(row[i['NO_BAIRRO']]), int(row[i['CO_CEP']]), str(row[i['NU_TELEFONE']]), str(row[i['NU_TELEFONE_PUBLICO']]), str(row[i['NU_FAX']]), float(row[i['latitude']]), float(row[i['longitude']]), int(row[i['CO_ENTIDADE']]))
            print(entry)
            cursor.execute(''' UPDATE schools SET address = ? , address_number = ? , address_complement = ? , address_district = ? , address_cep = ? , phone = ? , public_phone = ? , fax = ?, lat = ?, long = ? WHERE cod =  ?''' , entry)
            con.commit()
            print(row[i['DS_ENDERECO']], row[i['NU_ENDERECO']], row[i['DS_COMPLEMENTO']], row[i['NO_BAIRRO']], row[i['CO_CEP']], row[i['NU_TELEFONE']], row[i['NU_TELEFONE_PUBLICO']], row[i['NU_FAX']])
        line_count += 1
    print(dict)
