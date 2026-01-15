import fs from 'fs';

const getData = () => {
    const f = fs.readFileSync('./data/memo.json', 'utf-8')
    return JSON.parse(f)
}
const writeData = (data) => {
    fs.writeFileSync('./data/memo.json', JSON.stringify(data), 'utf-8')
}

export const submit = (word) => {
    const data =  getData();   
    data.list.push({id: Date.now(), name: word})
    console.log(data);
    writeData(data);
}

export const list = () => {
    console.log("list() 호출됨");
    const arr = getData()
    for(const v of arr.list) console.log(v);
}

export const Ddelete = (name) => {
    const data = getData()
    data.list = data.list.filter(v => v.name !== name)    
    writeData(data);
    console.log(data)
}

export const update = (targetName, newName) => {
  const data = getData();
  const target = data.list.find(v => v.name === targetName);
  if (!target) {console.log("단어 없음"); return; }
   if (newName) target.name = newName;
  writeData(data);
  console.log(data);
};
