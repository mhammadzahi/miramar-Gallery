import openpyxl
from openpyxl_image_loader import SheetImageLoader

pxl_doc = openpyxl.load_workbook('real-estate-101.xlsx')
sheet = pxl_doc['Sheet1']

image_loader = SheetImageLoader(sheet)

for i in range(2, 10):
    cell = 'G' + str(i)
    print(cell)
    image = image_loader.get(cell)
    #save
    name = 'img' + str(i-1)
    image.save('images/' + name + '.png')

