export const addWord = (word) => {
  if (!word.trim()) return;

  const data = getData();

  data.list.push({
    id: Date.now(),
    name: word,
    completed: false
  });

  saveData(data);
  console.log(`추가됨: ${word}`);
};

// 목록 출력
export const list = () => {
  const data = getData();

  if (data.list.length === 0) {
    console.log('목록이 비어 있습니다.');
    return;
  }

  data.list.forEach(item => {
    console.log(
      `[${item.completed ? '✔' : ' '}] ${item.id} - ${item.name}`
    );
  });
};

// 완료 토글
export const toggle = (id) => {
  const data = getData();
  const numId = Number(id);

  data.list = data.list.map(item =>
    item.id === numId
      ? { ...item, completed: !item.completed }
      : item
  );

  saveData(data);
  console.log(`토글 완료: ${id}`);
};

// 삭제
export const remove = (id) => {
  const data = getData();
  const numId = Number(id);

  data.list = data.list.filter(item => item.id !== numId);

  saveData(data);
  console.log(`삭제됨: ${id}`);
};

// 수정
export const update = (id, word) => {
  const data = getData();
  const numId = Number(id);

  data.list = data.list.map(item =>
    item.id === numId
      ? { ...item, name: word }
      : item
  );

  saveData(data);
  console.log(`수정됨: ${id} → ${word}`);
};