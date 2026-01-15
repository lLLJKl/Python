import json

def getData():
    f = open("./cli_data/memo.json","r", encoding="utf-8")
    return json.load(f)

def list():
    data = getData()
    arr = data["list"]
    for i in range(len(arr)):
        print('='*30)
        print(f'번호{i} 단어:{arr[i]}')
    print('='*30)

def add(a):
    data = getData()
    result = a
    data["list"].append(result)
    print(data, result)
    f = open("./cli_data/memo.json", "w", encoding="utf-8")
    json.dump(data, f,ensure_ascii=False)


def delect(b):
    data = getData()
    result = b
    data["list"].remove(b)
    print(data, result)
    f = open("./cli_data/memo.json", "w", encoding="utf-8")
    json.dump(data, f,ensure_ascii=False)

def replace(c, d):
    data = getData()
    result = d
    arr = data["list"]
    index = arr.index(c)
    arr[index] = d
    print(data, result)
    f = open("./cli_data/memo.json", "w", encoding="utf-8")
    json.dump(data, f,ensure_ascii=False)