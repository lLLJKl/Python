import { useState } from "react";
import {Command} from "commander"
import {submit, list} from '../cmd.js'

const program = new Command()

program
    .command('add')
    .argument('<content>')
    .description('메모 추가')
    .action(submit);

program
    .command('list')
    .description('목록보기')
    .action(list);    

program.parse(process.argv);

const Page = () => {
  const [word, setWord] = useState("");
  const [list, setList] = useState([
    { id: 1, name: "반복문 정리하기", completed: false },
    { id: 2, name: "조건문 정리완료", completed: true },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!word.trim()) return;

    setList([
      ...list,
      { id: Date.now(), name: word, completed: false },
    ]);

    setWord("");
  };

  const Complete = (id) => {
    setList(
      list.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const Delete = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  const filteredList = list.filter(item =>
    item.name.includes(search)
  );

  return (
    <div className="word-container">
      <h3 className="text-center mb-4">단어장</h3>

      <form className="input-group mb-3" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="단어를 입력하세요"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          추가
        </button>
      </form>

      <ul className="list-group">
        {filteredList.map(item => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-center word-item ${
              item.completed ? "completed" : ""
            }`}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={item.completed}
                onChange={() => Complete(item.id)}
              />
              <span className="ms-2">{item.name}</span>
            </div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => Delete(item.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
