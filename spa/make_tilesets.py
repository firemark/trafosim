#!/usr/bin/python3
import os
from PIL import Image

TILESETS = {
    'road': ['road-h', 'road-v', 'road-x'], 
    'lines': ['dashed-line-h', 'dashed-line-v'],
    'onroad': ['zebra-h', 'zebra-v'],
}

DIR = os.path.dirname(os.path.abspath(__file__))
TILESETS_DIR = os.path.join(DIR, 'assets', 'tilesets')
SPLIT_TILESETS_DIR = os.path.join(DIR, 'assets', 'split_tileset')
TILE_SIZE = 64


def get_filename(path, filename):
    return os.path.join(path, '%s.png' % filename)


def save_tileset(tileset_name, image_names):
    size = (TILE_SIZE * len(image_names), TILE_SIZE)
    tileset_image = Image.new('RGBA', size)
    fill_tileset(tileset_image, image_names)
    filename = get_filename(TILESETS_DIR, tileset_name)
    tileset_image.save(filename)


def fill_tileset(tileset_image, image_names):
    for i, image_name in enumerate(image_names):
        filename = get_filename(SPLIT_TILESETS_DIR, image_name)
        image = Image.open(filename)
        coord = (TILE_SIZE * i, 0)
        tileset_image.paste(image, coord) 


for tileset_name, image_names in TILESETS.items():
    print('Save %s.png...' % tileset_name)
    save_tileset(tileset_name, image_names)

print('Done.')
