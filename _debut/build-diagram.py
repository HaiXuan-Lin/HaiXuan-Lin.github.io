#!/usr/bin/env python3
"""Compile a standalone TikZ diagram to a theme-aware, font-independent SVG."""
import argparse
from pathlib import Path
import re
import subprocess
import tempfile
import xml.etree.ElementTree as ET


def prepare_svg(source):
    ET.register_namespace('', 'http://www.w3.org/2000/svg')
    ET.register_namespace('xlink', 'http://www.w3.org/1999/xlink')
    root = ET.parse(source).getroot()
    root.set('fill', 'currentColor')
    root.set('aria-hidden', 'true')
    root.set('focusable', 'false')
    prefix = 'debut-' + re.sub(r'[^A-Za-z0-9_-]', '-', Path(source).stem) + '-'
    ids = {node.attrib['id']: prefix + node.attrib['id']
           for node in root.iter() if 'id' in node.attrib}
    for node in root.iter():
        for attr, value in list(node.attrib.items()):
            if attr in ('stroke', 'fill') and value.lower() in ('#000', '#000000', 'black'):
                node.set(attr, 'currentColor')
            elif attr in ('stroke', 'fill') and value.lower() in ('#fff', '#ffffff', 'white'):
                node.set(attr, 'var(--global-bg-color)')
            elif attr == 'id':
                node.set(attr, ids[value])
            elif value.startswith('#') and value[1:] in ids:
                node.set(attr, '#' + ids[value[1:]])
            else:
                for old, new in ids.items():
                    value = value.replace('url(#' + old + ')', 'url(#' + new + ')')
                node.set(attr, value)
    return ET.tostring(root, encoding='unicode') + '\n'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', nargs='?', type=Path,
                        default=Path(__file__).parent / 'diagrams' / 'yoneda.tex')
    args = parser.parse_args()
    source = args.source.resolve()
    with tempfile.TemporaryDirectory(prefix='debut-tex-') as directory:
        subprocess.run(['lualatex', '-halt-on-error', '-interaction=nonstopmode',
                        '-output-directory=' + directory, str(source)], check=True)
        svg = Path(directory) / (source.stem + '.svg')
        subprocess.run(['dvisvgm', '--pdf', '--no-fonts', '--exact',
                        '--output=' + str(svg), str(svg.with_suffix('.pdf'))], check=True)
        destination = source.with_suffix('.svg')
        destination.write_text(prepare_svg(svg), encoding='utf-8')
        print('Generated ' + str(destination))


if __name__ == '__main__':
    main()
