import argparse
from cmd import add, list, delect, replace

parser = argparse.ArgumentParser(description="CLI 프로그램")

subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("add", help="단어 추가")
add_parser.add_argument("a", help="단어 추가")

add_parser = subparsers.add_parser("delect", help="단어 삭제")
add_parser.add_argument("b", help="삭제 단어")

add_parser = subparsers.add_parser("replace", help="단어 변경")
add_parser.add_argument("c", help="변경 필요 단어")
add_parser.add_argument("d", help="변경 단어")

add_parser = subparsers.add_parser("list", help="목록")

args = parser.parse_args()

if args.command == "add":
    add(args.a)
elif args.command == "list":
    list()
elif args.command == "delect":
    delect(args.b)
elif args.command == "replace":
    replace(args.c, args.d)