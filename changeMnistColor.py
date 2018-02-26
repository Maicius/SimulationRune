import cv2
import numpy as np
import os

file_root = '/Users/maicius/code/simulationRune/src/images/'


def change_color(file_name):
    img = cv2.imread(file_name, 0)
    # cv2.imshow('img', img)
    ret, thresh = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY_INV)
    # cv2.imshow('res', thresh)
    # cv2.waitKey(0)
    cv2.imwrite(file_name, thresh)

for i in range(0, 10):
    file_dir = file_root + str(i) + '/'
    print(file_dir)
    for root, dir, file in os.walk(file_dir, topdown=True, onerror=None, followlinks=False):
        for file_name in file:
            if file_name.find('jpg') != -1:
                file_name = file_dir + file_name
                print(file_name)
                change_color(file_name)
