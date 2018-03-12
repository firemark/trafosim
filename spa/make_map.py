#!/usr/bin/python3
import os
import json

LAYERS = ['road', 'lines', 'onroad'];

DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_DIR = os.path.join(DIR, 'assets', 'map')
OUTPUT_DIR = os.path.join(DIR, 'assets')


def get_filename(path, filename):
    return os.path.join(path, filename)


output_layers = []
for layer in LAYERS:
    filename = get_filename(INPUT_DIR, '%s.txt' % layer)
    with open(filename) as fp:
        lines = [line.strip() for line in fp]
    width = len(lines[0])
    height = len(lines)
    data = [
        [int(char) for char in line]
        for line in lines
    ]

    output_layers.append(data)

output_filename = get_filename(OUTPUT_DIR, 'map.json')

with open(output_filename, 'w') as fp:
    json.dump(output_layers, fp)
