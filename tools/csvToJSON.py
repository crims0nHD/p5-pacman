import csv
import os

csvfile = open('../website/pacmap.csv', 'r')
jsonfile = open('../website/pacmap.json', 'w')

csvMode = csv.reader(csvfile)

jsonfile.write("[")
for row in csvMode:
    jsonfile.write("[\"")
    for colummn in row:
        if colummn != "":
            jsonfile.write(str(colummn))
        else:
            jsonfile.write(" ")
    jsonfile.write("\"],")
jsonfile.write("[]]")