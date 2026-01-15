import argparse
from cmd import add, list, delete, update

parser = argparse.ArgumentParser(description="CLI 프로그램")
subparsers = parser.add_subparsers(dest="command")

add_parser = subparsers.add_parser("add", help="메모 추가")
add_parser.add_argument("a", help="첫번째 값")
add_parser.add_argument("b", help="두번째 값")

add_parser = subparsers.add_parser("list", help="목록보기")

add_parser = subparsers.add_parser("delete", help="지우기")
add_parser.add_argument("c", help="지울 값")

args = parser.parse_args()

if args.command == "add":
  add(args.a, args.b)
elif args.command == "list":
  list()
elif args.command == "delete":
  delete()