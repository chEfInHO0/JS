t1 = open('error.txt','r',encoding='utf-8')
t2 = open('error.txt','r',encoding='utf-8')

text = t1.read()
text2 = t2.read()

print(text)
print(text2)

text = text.replace(' ','')
text = text.replace('\n','').replace('-','')
f = [x for x in text]
counter = 0
b = open('charposnospaces.txt','w',encoding='utf-8')
for x in f:
    b.write(f'POS {counter} : CHAR {x} \n')
    counter += 1



f2 = [x for x in text2]
counter = 0
c = open('charpos.txt','w',encoding='utf-8')
for x in f2:
    c.write(f'POS {counter} : CHAR {x} \n')
    counter += 1

