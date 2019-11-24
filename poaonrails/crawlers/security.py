# -*- coding: utf-8 -*-
import csv
import sqlite3
from datetime import date

con = sqlite3.connect('../poaonrails/db/development.sqlite3')
cursor = con.cursor()
with open('data/security.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    i = {}
    statistics = []
    for row in csv_reader:
        bairro = row[0].upper()
        fr = int(row[1])
        statistics.append([bairro, fr])
    statistics.sort(key=lambda x: x[1])
    print(statistics)
