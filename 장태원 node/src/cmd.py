import json

def getData():
  f = open("./data/memo.json", "r", encoding="utf-8")
  return json.load(f)

def add(a, b):
  data = getData()
  result = a + b
  data["list"].append(result)
  print(data, result)
  f = open("./data/memo.json", "w", encoding="utf-8")
  json.dump(data, f, ensure_ascii=False)

def list():
  print("list() 호출됨")
  data = getData()
  arr = data["list"]
  for v in arr: print(v)

def delete():
  data = getData()


def update():
  sdf
