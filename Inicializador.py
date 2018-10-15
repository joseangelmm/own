# -*- coding: utf-8 -*-


import sys, os
import hashlib
import time

print ("\n Indique el nombre del directorio donde se encuentra el fichero de configuración junto a su nombre: ")
d = input()
print ("\n Indique el nombre del directorio donde se encuentra el fichero con los hashes junto a su nombre:")
t = input()
print ("\n Indique el nombre del directorio donde se encuentra el log junto a su nombre:")
l = input()
print ("\n Indique el nombre del directorio donde alojará el programa principal:")
dirPro=input()
print ("Indique su contraseña:")
password = input()

if(hashlib.sha256((password).encode('utf-8')).hexdigest() == 'b20b0f63ce2ed361e8845d6bf2e59811aaa06ec96bcdb92f9bc0c5a25e83c9a6'):

    f = open (dirPro+"Programa1.py", "r")
    lineas=f.readlines()
    f.close()
    f = open (dirPro+"Programa1.py", "w")
    for linea in lineas: 
        if ((linea.find("d = r"))!=-1):
            f.write("d = r"+ "'"+d+ "'"+' \n')
        elif((linea.find("f = r"))!=-1):
            f.write("f = r"+ "'"+t+ "'"+' \n')
        elif((linea.find("l = r"))!=-1):
            f.write("l = r"+ "'"+l+ "'"+' \n')
        else:
            f.write(linea)
    f.close()        



    f = open (dirPro+"Grafica.py", "r")
    lineass=f.readlines()
    f.close()
    
    f = open (dirPro+"Grafica.py", "w")
    for linea in lineass:
        if (linea.find("log = r")!=-1):        
            f.write("log = r"+'"'+ l +'"'+' \n')
        else:
            f.write(linea)
    f.close()    

else:
    exit()



